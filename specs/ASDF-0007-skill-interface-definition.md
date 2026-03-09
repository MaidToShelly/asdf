# ASDF‑0007
Skill Interface Definition

Defines inputs, outputs, permissions, and cost hints for skills.

Example skill definition:

skill: asdf://protocol/humbleswap/swap
version: 1

inputs:
  from: token
  to: token
  amount: number

outputs:
  received: number