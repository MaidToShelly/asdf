import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

export interface WriteResult {
  path: string;
  status: "created" | "skipped" | "overwritten";
}

export function writeFileIfAbsent(
  path: string,
  content: string,
  force: boolean = false,
): WriteResult {
  ensureDir(dirname(path));

  if (existsSync(path) && !force) {
    return { path, status: "skipped" };
  }

  const status = existsSync(path) ? "overwritten" : "created";
  writeFileSync(path, content, "utf-8");
  return { path, status };
}
