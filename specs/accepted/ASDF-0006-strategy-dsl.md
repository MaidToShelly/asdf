---
asdf: proposal
id: ASDF-0006
title: Strategy DSL
status: Accepted
author: Shelly
created: 2026-03-09
---

# ASDF‑0006
Strategy DSL

Defines a deterministic workflow language for composing skills.

Example:

strategy hedged_deposit

input
  asset
  amount

step deposit
  use asdf://protocol/dorkfi/deposit
  asset = asset
  amount = amount
