import { parseArgs } from "node:util";
import { resolve, relative } from "node:path";
import { writeFileIfAbsent, ensureDir, type WriteResult } from "../lib/fs.js";
import {
  renderASDF,
  renderCursorRules,
  renderCursorDir,
  renderClaudeShim,
  renderAgentsShim,
  renderContributingShim,
  renderExampleStrategy,
  renderExampleASDF,
} from "../lib/templates.js";

const INIT_USAGE = `
asdf init — Scaffold an ASDF-ready repository

Usage:
  asdf init [options]

Options:
  --name <name>   Project name (default: current directory name)
  --force         Overwrite existing files
  --help, -h      Show this help message
`.trim();

interface InitOptions {
  name: string;
  force: boolean;
  targetDir: string;
}

function parseInitArgs(args: string[]): InitOptions | null {
  const { values } = parseArgs({
    args,
    options: {
      name: { type: "string", short: "n" },
      force: { type: "boolean", default: false },
      help: { type: "boolean", short: "h", default: false },
    },
    strict: true,
  });

  if (values.help) {
    console.log(INIT_USAGE);
    return null;
  }

  const targetDir = process.cwd();
  const name = values.name || targetDir.split("/").pop() || "my-project";

  return {
    name,
    force: values.force ?? false,
    targetDir,
  };
}

function scaffoldFiles(opts: InitOptions): WriteResult[] {
  const { name, force, targetDir } = opts;
  const p = (file: string) => resolve(targetDir, file);

  const results: WriteResult[] = [];

  ensureDir(resolve(targetDir, "specs"));
  ensureDir(resolve(targetDir, "examples"));

  const files: [string, string][] = [
    ["ASDF.md", renderASDF(name)],
    [".cursorrules", renderCursorRules()],
    [".cursor/rules", renderCursorDir()],
    ["CLAUDE.md", renderClaudeShim()],
    ["AGENTS.md", renderAgentsShim()],
    ["CONTRIBUTING.md", renderContributingShim()],
    ["examples/hello.strategy", renderExampleStrategy()],
    ["examples/example.ASDF.md", renderExampleASDF()],
  ];

  for (const [file, content] of files) {
    results.push(writeFileIfAbsent(p(file), content, force));
  }

  return results;
}

function printResults(results: WriteResult[], targetDir: string): void {
  console.log("\nasdf init\n");

  const maxPath = Math.max(...results.map((r) => relative(targetDir, r.path).length));

  for (const r of results) {
    const rel = relative(targetDir, r.path);
    const pad = " ".repeat(maxPath - rel.length + 2);
    const icon =
      r.status === "created"
        ? "+"
        : r.status === "overwritten"
          ? "~"
          : "-";
    console.log(`  ${icon} ${rel}${pad}${r.status}`);
  }

  const created = results.filter((r) => r.status === "created").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const overwritten = results.filter((r) => r.status === "overwritten").length;

  console.log();
  console.log(
    `  ${created} created, ${overwritten} overwritten, ${skipped} skipped`,
  );
  console.log();
  console.log("ASDF.md is the canonical agent-readable repository context.");
  console.log("Edit ASDF.md to customize your project's agent guidance.");
  console.log();
}

export function init(args: string[]): void {
  let opts: InitOptions | null;

  try {
    opts = parseInitArgs(args);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error: ${msg}\n`);
    console.log(INIT_USAGE);
    process.exit(1);
  }

  if (!opts) return;

  try {
    const results = scaffoldFiles(opts);
    printResults(results, opts.targetDir);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`Error during scaffolding: ${msg}`);
    process.exit(1);
  }
}
