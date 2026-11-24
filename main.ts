// Fortune in a Pot — one kind, funny fortune for the houseplant on the
// windowsill, written to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The gate: UTF-8 text, 1 to 120 characters, not only white space, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

const ENTRY =
  "Your fern will outgrow its terracotta pot by spring, then forgive you for the repot you keep postponing. Barely.";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry is ${ENTRY.length} characters, must be 1 to ${MAX_CHARS}`,
  );
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} characters)`);
