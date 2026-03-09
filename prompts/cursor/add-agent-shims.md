# Add Agent Compatibility Shim Files

## Goal

Add lightweight compatibility files to an existing repository so that multiple agent frameworks can automatically discover project context via `ASDF.md`.

## Tasks

1. Create `.cursor/rules` with content directing Cursor agents to read `ASDF.md`.

2. Create `.cursorrules` (legacy Cursor support) with a short pointer to `ASDF.md`.

3. Create `CLAUDE.md` for Claude Code with a markdown note directing the agent to `ASDF.md`.

4. Create `AGENTS.md` for OpenClaw and Codex with a markdown note directing agents to `ASDF.md`.

5. Create `CONTRIBUTING.md` for GitHub Copilot Workspace and human contributors, pointing to `ASDF.md`.

6. If a `README.md` exists, add a `Compatibility` section explaining that:
   - `ASDF.md` is the canonical agent-readable context file
   - compatibility shim files are included for existing agent frameworks
   - all shims point back to `ASDF.md`

## Constraints

- Do not duplicate the full project context across multiple files.
- Each shim file must be concise (under 10 lines).
- `ASDF.md` must already exist or be created first.
- Do not overwrite existing files without confirmation.

## Expected Output

- Five new shim files at the repository root (plus `.cursor/rules`).
- Each file explicitly references `ASDF.md` as the source of truth.
- `README.md` updated with a compatibility note if applicable.
