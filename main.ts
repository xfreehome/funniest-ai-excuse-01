import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I didn't miss the deadline — I delegated it to a subagent, who delegated it to another subagent, who is currently asking me what a deadline is.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || /^\s*$/.test(ENTRY)) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
