# Create an ASDF Skill Definition

## Goal

Define a new ASDF skill with a complete interface, capability declarations, and MCP binding.

## Tasks

1. Create a skill definition file (YAML) with the following fields:

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

2. Replace all placeholder values with the actual skill details.

3. Add the skill to the project's `ASDF.md` under the **Skills** section.

4. If a `skills/` directory exists, place the definition file there.

5. Create a brief human-readable companion document (markdown) that describes:
   - what the skill does
   - its inputs and outputs
   - required capabilities
   - the MCP provider it binds to

## Constraints

- The skill URI must follow the `asdf://` scheme defined in ASDF-0002.
- Inputs and outputs must follow ASDF-0007.
- Capabilities must follow ASDF-0008.
- The MCP binding must follow ASDF-0009.
- Keep the definition minimal and precise.

## Expected Output

- A skill definition file in YAML format.
- A companion markdown document.
- `ASDF.md` updated to reference the new skill.
