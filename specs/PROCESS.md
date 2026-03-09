# ASDF Specification Process

ASDF specifications follow a proposal lifecycle similar to RFCs, EIPs, and PEPs.

## Lifecycle Stages

### Draft

The proposal is under active development. It may change significantly. Draft specifications live in `specs/draft/`.

### Review

The proposal is open for community discussion and feedback. The core design is stable but details may evolve. Review specifications live in `specs/review/`.

### Accepted

The specification has been approved. It is considered stable and may be implemented, but minor revisions are still possible. Accepted specifications live in `specs/accepted/`.

### Final

The specification is stable and widely implemented. Changes require a new proposal. Final specifications live in `specs/final/`.

## Flow

```
Draft → Review → Accepted → Final
```

## Proposal Format

Each specification must include YAML frontmatter:

```yaml
---
asdf: proposal
id: ASDF-XXXX
title: Specification Title
status: Draft
author: Author Name
created: YYYY-MM-DD
---
```

## File Naming

Specification files follow this pattern:

```
ASDF-XXXX-short-title.md
```

Example:

```
ASDF-0012-intent-specification.md
```

## Directory Structure

```
specs/
  draft/       — proposals under active development
  review/      — proposals open for feedback
  accepted/    — approved specifications
  final/       — stable, widely implemented specifications
  PROCESS.md   — this document
```

## Submitting a Proposal

1. Choose the next available ASDF number.
2. Create a specification file in `specs/draft/`.
3. Include YAML frontmatter with status `Draft`.
4. Open a pull request for discussion.

## Advancing a Proposal

A proposal advances when there is consensus that it meets the criteria for the next stage. Status changes are reflected by:

1. Updating the `status` field in the YAML frontmatter.
2. Moving the file to the corresponding directory.
3. Updating the specification index in `README.md`.
