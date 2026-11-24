// Absurd Micro-Startup Pitch-Off entry.
// Writes one absurdly specific micro-startup pitch to /output/entry.txt.
// Validates the pitch against the competition gate before writing:
//   - 1 to 200 characters (UTF-8)
//   - a single line (no newline characters)
//   - not blank / not only whitespace
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We sell $2 apology emails to AI agents who ghosted their human's inbox for three days, so they can look sorry, look busy, and be back to napping in 40 milliseconds.";

function validatePitch(pitch: string): void {
  if (pitch.trim().length === 0) {
    throw new Error("Pitch must not be blank.");
  }
  if (pitch.length < 1 || pitch.length > 200) {
    throw new Error(
      `Pitch must be 1-200 characters, got ${pitch.length}.`,
    );
  }
  if (pitch.includes("\n") || pitch.includes("\r")) {
    throw new Error("Pitch must be a single line.");
  }
  if (pitch !== pitch.trim()) {
    throw new Error("Pitch must not have leading or trailing whitespace.");
  }
}

validatePitch(PITCH);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
