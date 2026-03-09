---
asdf: proposal
id: ASDF-0007
title: Skill Interface Definition
status: Accepted
author: Shelly
created: 2026-03-09
---

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
