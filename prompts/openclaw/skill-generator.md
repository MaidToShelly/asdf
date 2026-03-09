# ASDF Skill Generator

## Goal

Generate a complete ASDF skill definition for use in OpenClaw-style agent workflows, including interface, capabilities, and MCP binding.

## Tasks

1. Ask for or determine the following:
   - Skill name and domain (e.g. `protocol/dorkfi/deposit`)
   - Input parameters and their types
   - Output parameters and their types
   - Required capabilities (e.g. `wallet`, `network`, `broadcast`)
   - Target MCP provider and method

2. Generate a skill definition file:

   ```yaml
   skill: asdf://<domain>/<protocol>/<action>
   version: 1

   inputs:
     <param>: <type>

   outputs:
     <param>: <type>

   capabilities:
     - <capability>

   binding:
     type: mcp
     provider: <MCPProviderName>
     method: <methodName>
     input_map:
       <mcp_param>: <skill_input>
     output_map:
       <skill_output>: <result.path>
   ```

3. If the skill operates across multiple networks, use a `provider_selector`:

   ```yaml
   binding:
     type: mcp
     provider_selector: by_network
     input_map:
       <mcp_param>: <skill_input>
     output_map:
       <skill_output>: <result.path>
     providers:
       <network_a>:
         provider: <MCPProviderName>
         method: <methodForNetworkA>
       <network_b>:
         provider: <MCPProviderName>
         method: <methodForNetworkB>
   ```

4. Generate a companion markdown document describing the skill in plain language.

5. Register the skill in `ASDF.md` under the **Skills** section.

## Constraints

- Skill URIs must follow ASDF-0002 (`asdf://` scheme).
- Interfaces must follow ASDF-0007.
- Capabilities must follow ASDF-0008.
- Bindings must follow ASDF-0009.
- Keep the definition precise and free of unnecessary fields.
- Do not hardcode secrets, credentials, or environment-specific values.

## Expected Output

- A YAML skill definition file.
- A markdown companion document.
- `ASDF.md` updated with the new skill entry.
