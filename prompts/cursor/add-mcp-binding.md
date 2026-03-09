# Add an MCP Binding to an Existing Skill

## Goal

Add MCP binding information to an existing ASDF skill definition so that it can be resolved to a concrete MCP provider and method at runtime.

## Tasks

1. Identify the target skill definition file.

2. Add a `binding` block to the skill definition:

   ```yaml
   binding:
     type: mcp
     provider: <MCPProviderName>
     method: <methodName>
     input_map:
       <mcp_param>: <skill_input>
     output_map:
       <skill_output>: <result.path>
   ```

3. If the skill operates across multiple networks, use context-sensitive provider selection:

   ```yaml
   binding:
     type: mcp
     provider_selector: by_network
     providers:
       <network_a>:
         provider: <MCPProviderName>
         method: <methodForNetworkA>
       <network_b>:
         provider: <MCPProviderName>
         method: <methodForNetworkB>
   ```

4. Ensure `input_map` keys match the MCP method parameters and values match the skill's declared inputs (ASDF-0007).

5. Ensure `output_map` keys match the skill's declared outputs and values use dot-notation paths into the MCP result object.

6. Verify that the skill's `capabilities` list includes all capabilities required by the MCP provider (e.g. `wallet`, `network`, `broadcast`).

## Constraints

- The binding must follow ASDF-0009.
- Do not modify the skill's inputs, outputs, or capabilities unless they are incorrect.
- Shared `input_map` and `output_map` may be defined at the binding level when all provider variants use the same mapping.
- Provider-level fields override binding-level fields.

## Expected Output

- The skill definition file updated with a valid `binding` block.
- All input and output mappings verified against the skill interface.
- Capabilities confirmed to cover the MCP provider's requirements.
