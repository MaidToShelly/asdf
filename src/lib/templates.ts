export function renderASDF(name: string): string {
  return `# ${name}

## Agent Guidance

This repository follows the **ASDF (Agent Skill Discovery Format)**.

Agents should treat this file as the canonical source of truth for project context, conventions, and guidance.

## Project

${name} is an ASDF-compatible project.

> Replace this section with a description of your project's purpose, architecture, and key concepts.

## Skills

No skills are defined yet.

> Add skill definitions here as the project evolves. See the ASDF specification for the skill format.

## Conventions

- Follow existing code style and patterns.
- Keep changes focused and well-scoped.
- Write clear commit messages.
- Do not introduce unnecessary dependencies.

## Do Not

- Store secrets or credentials in any tracked file.
- Allow undeclared capabilities in skill definitions.
- Bypass capability approval checks.
- Modify generated files by hand without updating their source templates.

## Commands

> Document key project commands here (build, test, lint, deploy, etc.).

\`\`\`
# example
npm run build
npm test
\`\`\`
`;
}

export function renderCursorRules(): string {
  return `This repository follows the ASDF (Agent Skill Discovery Format).

Start with:
ASDF.md

ASDF.md defines the canonical agent-readable repository context including:
- project structure
- agent conventions
- skill discovery
- strategy usage

All agents interacting with this repository should begin by reading ASDF.md.
`;
}

export function renderCursorDir(): string {
  return `This repository follows the **ASDF (Agent Skill Discovery Format)**.

Start with:

ASDF.md

ASDF.md defines the canonical agent-readable repository context including:

- project structure
- agent conventions
- skill discovery
- strategy usage

All agents interacting with this repository should begin by reading \`ASDF.md\`.
`;
}

export function renderClaudeShim(): string {
  return `# Claude Agent Context

This repository follows the **ASDF (Agent Skill Discovery Format)**.

Please read:

\`ASDF.md\`

This file defines the canonical agent-readable repository context for the project, including structure, conventions, and agent guidance.
`;
}

export function renderAgentsShim(): string {
  return `# Agent Instructions

This repository uses the **ASDF (Agent Skill Discovery Format)**.

Start here:

\`ASDF.md\`

ASDF provides the canonical format for agent-readable project context in this repository.
`;
}

export function renderContributingShim(): string {
  return `# Contributing

This project follows the **ASDF (Agent Skill Discovery Format)**.

Developers and agents should begin with:

\`ASDF.md\`

It is the canonical repository context file and should be treated as the primary source of project guidance.
`;
}

export function renderExampleStrategy(): string {
  return `strategy hello {
  step greet {
    skill: core/hello
    input: {
      name: "world"
    }
  }
}
`;
}

export function renderExampleASDF(): string {
  return `# Example Project

## Agent Guidance

This is a minimal example of an ASDF repository context file.

Agents should read this file first when interacting with the repository.

## Project

A sample project demonstrating ASDF conventions.

## Skills

- \`core/hello\` — A greeting skill that returns a hello message.

## Conventions

- Keep it simple.
- Follow the project's existing patterns.

## Do Not

- Store secrets in tracked files.

## Commands

\`\`\`
npm run build
npm test
\`\`\`
`;
}
