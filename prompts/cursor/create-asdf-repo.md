# Create an ASDF-Compatible Repository

## Goal

Scaffold a new repository that follows the ASDF (Agent Skill Discovery Format) standard, making it immediately discoverable by AI agents across multiple frameworks.

## Tasks

1. Create `ASDF.md` at the repository root with the following sections:

   - **Project** — describe the project's purpose and architecture
   - **Agent Guidance** — state that this repository follows ASDF and that agents should treat `ASDF.md` as the canonical context file
   - **Skills** — list available skills (start with a placeholder)
   - **Conventions** — document coding standards and project norms
   - **Do Not** — list constraints agents must respect
   - **Commands** — document key project commands (build, test, lint, deploy)

2. Create compatibility shim files that point to `ASDF.md`:

   - `.cursorrules`
   - `.cursor/rules`
   - `CLAUDE.md`
   - `AGENTS.md`
   - `CONTRIBUTING.md`

3. Create starter directories:

   - `specs/`
   - `examples/`
   - `skills/`
   - `strategies/`

4. Add a short `README.md` that describes the project and links to `ASDF.md`.

## Constraints

- `ASDF.md` is the canonical agent-readable repository context file.
- Compatibility shim files must be lightweight and must not duplicate the full project context.
- Do not introduce unnecessary dependencies.
- Keep all generated content professional and easy to edit.

## Expected Output

- A complete ASDF-ready repository scaffold.
- All compatibility shim files in place.
- `ASDF.md` populated with editable starter sections.
- Empty starter directories created.
