#!/usr/bin/env node
/**
 * Elegant Proof
 *
 * A tiny make.fun contest CLI that prints one line, with an optional shout.
 */

const LINE =
  "It refactored my working code into an elegant proof of why it was working in the first place.";

const USAGE = `Usage: node main.ts [--shout] [--help]

Options:
  --shout   Print the line in uppercase.
  --help    Show this help and exit.`;

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).some((argument) => argument === flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function printUsage(): void {
  console.error(USAGE);
}

function main(): void {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
