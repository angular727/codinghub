// Builds the static site into ./out for Firebase Hosting.
import { spawnSync } from "node:child_process";

const r = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NEXT_EXPORT: "1" },
});
process.exit(r.status ?? 1);
