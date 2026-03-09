# Create an ASDF Strategy

## Goal

Define a deterministic ASDF strategy that composes one or more skills into an ordered workflow.

## Tasks

1. Create a strategy file using the ASDF Strategy DSL (ASDF-0006):

   ```
   strategy <strategy_name>

   input
     <param1>
     <param2>

   step <step_name>
     use asdf://<domain>/<protocol>/<action>
     <param> = <value_or_input>

   step <step_name>
     use asdf://<domain>/<protocol>/<action>
     <param> = <previous_step.output>
   ```

2. Replace placeholders with actual skill references and parameters.

3. Ensure each step references a skill that exists in the project or is declared in `ASDF.md`.

4. If a `strategies/` directory exists, place the file there.

5. If helpful, add a brief markdown companion explaining the workflow.

## Constraints

- Steps must execute in declared order.
- Each step must reference a valid `asdf://` skill URI.
- Inputs must be explicitly declared at the strategy level.
- Keep the strategy deterministic — avoid conditional branching unless the DSL supports it.
- Follow ASDF-0006 syntax conventions.

## Expected Output

- A `.strategy` file defining the workflow.
- All referenced skills should exist or be documented.
- Optional companion markdown explaining the strategy.
