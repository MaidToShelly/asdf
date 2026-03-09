# ASDF — Agent Skill Discovery Format

ASDF is an open standard for discovering, composing, and executing deterministic AI agent skills.

It defines:

• Agent repository discovery  
• Portable skill references (`asdf://`)  
• Deterministic strategy workflows  
• Skill capability permissions  
• Skill interface definitions  

The goal is to enable portable agent ecosystems where natural language intent is converted into deterministic execution.

---

## Specifications

| Spec | Description |
|-----|-----|
| ASDF-0001 | Agent Skill Discovery Format |
| ASDF-0002 | Portable Skill References |
| ASDF-0003 | Metadata Format |
| ASDF-0006 | Strategy DSL |
| ASDF-0007 | Skill Interface Definition |
| ASDF-0008 | Skill Capability Model |
| ASDF-0009 | MCP Binding Specification |
| ASDF-0010 | Provider Resolution |

Status: Draft

---

## Compatibility

This repository uses `ASDF.md` as the canonical agent-readable project context file.

To support existing agent frameworks, lightweight compatibility files are included at the repository root, such as `.cursorrules`, `CLAUDE.md`, `AGENTS.md`, and `CONTRIBUTING.md`.

These files are adapters only and point back to `ASDF.md` as the source of truth.

---

## Cursor Compatibility

This repository includes native support for Cursor agent discovery.

Cursor will automatically load rules from:

`.cursor/rules`

The rules file directs Cursor agents to `ASDF.md`, which serves as the canonical agent-readable repository context.

---

## CLI

The `asdf` CLI provides tooling for working with ASDF repositories.

### Install

```
npm install
npm run build
```

### `asdf init`

Scaffold an ASDF-ready repository structure:

```
npx asdf init
```

This generates:

| File | Purpose |
|------|---------|
| `ASDF.md` | Canonical agent-readable project context |
| `.cursorrules` | Cursor compatibility (legacy) |
| `.cursor/rules` | Cursor compatibility (modern) |
| `CLAUDE.md` | Claude Code compatibility |
| `AGENTS.md` | OpenClaw / Codex compatibility |
| `CONTRIBUTING.md` | Contributor and Copilot Workspace compatibility |
| `examples/hello.strategy` | Example strategy file |
| `examples/example.ASDF.md` | Example ASDF context file |
| `specs/` | Directory for specification documents |
| `examples/` | Directory for examples |

Options:

| Flag | Description |
|------|-------------|
| `--name <name>` | Project name for templates (default: directory name) |
| `--force` | Overwrite existing files |
| `--help` | Show help |

Existing files are preserved unless `--force` is passed.

---

## Prompt Library

This repository includes a library of reusable prompts for applying ASDF in real projects using Cursor, Claude Code, and OpenClaw.

The prompts are reference tooling — structured markdown files with clear goals, tasks, constraints, and expected output. They live under `prompts/` and are organized by agent framework:

- `prompts/cursor/` — scaffolding, skill creation, strategy authoring, MCP binding
- `prompts/claude/` — agent context templates
- `prompts/openclaw/` — skill generation

See `prompts/README.md` for the full index.