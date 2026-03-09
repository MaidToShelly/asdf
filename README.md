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