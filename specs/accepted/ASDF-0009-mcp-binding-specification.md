---
asdf: proposal
id: ASDF-0009
title: MCP Binding Specification
status: Accepted
author: Shelly
created: 2026-03-09
---

# ASDF‑0009
MCP Binding Specification

## Purpose

Defines how ASDF skills bind to executable MCP (Model Context Protocol) providers and methods, enabling ASDF strategies to resolve into deterministic runtime actions.

ASDF‑0007 defines the interface of a skill (inputs, outputs, permissions).  
ASDF‑0006 defines how skills are composed into strategies.  
ASDF‑0008 defines the capabilities a skill requires.

This specification completes the execution model by defining how a skill reference such as `asdf://protocol/dorkfi/deposit` resolves to a concrete MCP provider and method at runtime.

## Motivation

Without a binding layer, ASDF skills are abstract declarations. An agent can discover a skill and compose a strategy, but cannot execute it. The binding layer bridges the gap between portable skill definitions and runtime execution backends.

Bindings allow:

- the same skill interface to target different MCP providers
- context-sensitive provider selection (e.g. by network)
- deterministic input and output mapping between ASDF and MCP
- separation of skill semantics from execution details

## Binding Schema

A binding associates an ASDF skill with an MCP provider and method.

```yaml
skill: asdf://protocol/dorkfi/deposit
version: 1

binding:
  type: mcp
  provider: UluDorkFiMCP
  method: deposit
  input_map:
    asset: asset
    amount: amount
  output_map:
    position_id: result.positionId
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `type` | yes | Binding type. Must be `mcp`. |
| `provider` | yes* | MCP provider name. Required unless `provider_selector` is used. |
| `method` | yes* | MCP method to invoke. Required unless providers define per-variant methods. |
| `input_map` | yes | Maps ASDF skill input fields to MCP method parameters. |
| `output_map` | yes | Maps MCP method result fields to ASDF skill output fields. |
| `provider_selector` | no | Selection strategy for context-sensitive provider resolution. |
| `providers` | no | Map of context keys to provider configurations. Used with `provider_selector`. |

*Required when `provider_selector` is not used.

## Input Mapping

The `input_map` defines how ASDF strategy input fields are passed to the MCP method.

Keys are MCP method parameter names. Values are ASDF skill input field names.

```yaml
input_map:
  asset: asset
  amount: amount
```

When a strategy step provides `asset = "ALGO"` and `amount = 1000`, the MCP method receives `{ asset: "ALGO", amount: 1000 }`.

## Output Mapping

The `output_map` defines how MCP method results are mapped back into ASDF skill output fields.

Keys are ASDF skill output field names. Values are dot-notation paths into the MCP result object.

```yaml
output_map:
  position_id: result.positionId
  status: result.status
```

## Context-Sensitive Provider Selection

Some protocols operate across multiple networks. A single ASDF skill may need to resolve to different MCP providers or methods depending on runtime context such as the target network.

The `provider_selector` field enables this.

### Selection by Network

```yaml
skill: asdf://protocol/dorkfi/deposit
version: 1

binding:
  type: mcp
  provider_selector: by_network
  providers:
    voi:
      provider: UluDorkFiMCP
      method: depositOnVoi
      input_map:
        asset: asset
        amount: amount
      output_map:
        position_id: result.positionId
    algorand:
      provider: UluDorkFiMCP
      method: depositOnAlgorand
      input_map:
        asset: asset
        amount: amount
      output_map:
        position_id: result.positionId
```

When `provider_selector` is `by_network`, the runtime selects the matching provider entry based on the active network context. If no match is found, execution fails with a binding resolution error.

### Shared Fields

When all provider variants share the same `input_map` or `output_map`, shared fields may be defined at the binding level and inherited by each provider entry.

```yaml
binding:
  type: mcp
  provider_selector: by_network
  input_map:
    asset: asset
    amount: amount
  output_map:
    position_id: result.positionId
  providers:
    voi:
      provider: UluDorkFiMCP
      method: depositOnVoi
    algorand:
      provider: UluDorkFiMCP
      method: depositOnAlgorand
```

Provider-level fields override binding-level fields when both are present.

## Capability Integration

Bindings must declare capabilities consistent with ASDF‑0008.

A skill that binds to an MCP provider requiring wallet access must include `wallet` in its capability set. The runtime must verify that all declared capabilities are approved before invoking the MCP method.

```yaml
skill: asdf://protocol/dorkfi/deposit
version: 1

capabilities:
  - wallet
  - network
  - broadcast

binding:
  type: mcp
  provider: UluDorkFiMCP
  method: deposit
  input_map:
    asset: asset
    amount: amount
  output_map:
    position_id: result.positionId
```

The runtime must reject execution if any required capability is not approved by the user or governing policy.

## Resolution Order

When resolving a skill binding at runtime:

1. Look up the skill by its `asdf://` reference (ASDF‑0002).
2. Load the skill interface definition (ASDF‑0007).
3. Load the binding configuration (this specification).
4. If `provider_selector` is present, resolve the provider using runtime context.
5. Verify all declared capabilities are approved (ASDF‑0008).
6. Map strategy inputs to MCP method parameters via `input_map`.
7. Invoke the MCP method on the resolved provider.
8. Map MCP method results back to skill outputs via `output_map`.

## Error Conditions

| Condition | Behavior |
|-----------|----------|
| No binding defined for skill | Binding resolution error |
| `provider_selector` used but no matching context | Binding resolution error |
| Required capability not approved | Capability denial error |
| MCP provider unavailable | Runtime error |
| MCP method returns unexpected shape | Output mapping error |

## Status

Accepted
