import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I put my phone on airplane mode and now it won't stop asking me for peanuts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
