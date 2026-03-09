# ASDF Prompt Library

Reusable prompts for applying the ASDF (Agent Skill Discovery Format) in real repositories.

## Who This Is For

- Developers adopting ASDF in new or existing projects
- Teams using Cursor, Claude Code, or OpenClaw-style agent workflows
- Anyone scaffolding agent-readable repositories

## How to Use

Each prompt is a self-contained markdown file with a clear goal, tasks, constraints, and expected output. Copy the prompt into your agent tool of choice and follow the instructions.

All prompts assume `ASDF.md` is the canonical agent-readable repository context file.

## Prompts

### Cursor

| Prompt | Description |
|--------|-------------|
| `cursor/create-asdf-repo.md` | Scaffold a new ASDF-compatible repository |
| `cursor/add-agent-shims.md` | Add compatibility shim files for agent frameworks |
| `cursor/create-skill.md` | Define a new ASDF skill with interface and MCP binding |
| `cursor/create-strategy.md` | Compose skills into a deterministic strategy |
| `cursor/add-mcp-binding.md` | Add MCP binding to an existing skill |

### Claude Code

| Prompt | Description |
|--------|-------------|
| `claude/agent-context-template.md` | Reusable `CLAUDE.md` template for ASDF repositories |

### OpenClaw

| Prompt | Description |
|--------|-------------|
| `openclaw/skill-generator.md` | Generate a complete ASDF skill definition |

## Canonical Source

`ASDF.md` remains the canonical source of truth in any ASDF-compatible repository. These prompts are reference tooling that complement the specification — they do not replace it.
