#!/usr/bin/env node

import { parseArgs } from "node:util";
import { init } from "./commands/init.js";

const USAGE = `
asdf — Agent Skill Discovery Format CLI

Usage:
  asdf <command> [options]

Commands:
  init          Scaffold an ASDF-ready repository

Options:
  --help, -h    Show this help message
  --version     Show version

Run 'asdf <command> --help' for command-specific help.
`.trim();

function main(): void {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    console.log(USAGE);
    process.exit(0);
  }

  if (command === "--version") {
    console.log("asdf 0.1.0");
    process.exit(0);
  }

  switch (command) {
    case "init":
      init(args.slice(1));
      break;
    default:
      console.error(`Unknown command: ${command}\n`);
      console.log(USAGE);
      process.exit(1);
  }
}

main();
