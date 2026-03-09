# Claude Agent Context Template

## Goal

Provide a reusable context template for Claude Code sessions that directs the agent to follow ASDF conventions and read `ASDF.md` as the canonical repository context.

## Template

Use the following as the content of `CLAUDE.md` in any ASDF-compatible repository:

---

```markdown
# Claude Agent Context

This repository follows the **ASDF (Agent Skill Discovery Format)**.

Please read:

`ASDF.md`

This file defines the canonical agent-readable repository context for the project, including:

- project purpose and architecture
- agent guidance and conventions
- available skills and their interfaces
- strategy definitions
- capability requirements
- constraints and prohibited actions

## How to Use This Repository

1. Start by reading `ASDF.md` in full.
2. Follow the conventions described in the **Conventions** section.
3. Respect all constraints in the **Do Not** section.
4. Reference skills using the `asdf://` URI scheme.
5. When creating new skills, follow the interface format in ASDF-0007.
6. When composing workflows, use the strategy DSL defined in ASDF-0006.
```

---

## Constraints

- This template must remain lightweight.
- It must always point to `ASDF.md` as the source of truth.
- Do not duplicate the full project context inside `CLAUDE.md`.
- Adapt the bullet list to reflect the actual sections in your project's `ASDF.md`.

## Expected Output

- A `CLAUDE.md` file at the repository root.
- Claude Code automatically loads this file and follows the guidance to read `ASDF.md`.
