import { writeFile } from "node:fs/promises";

// Explicit public-only allowlist for the projects featured in the CV.
const names = [
  "Hyper-V-GPU-Paravirtualization-Manager",
  "Python-Microphone-Input-Forwarder",
];
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "Curriculum-Vitae-build",
};
if (process.env.GH_TOKEN)
  headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
const repositories = {};
for (const name of names) {
  const response = await fetch(
    `https://api.github.com/repos/DanielChrobak/${name}`,
    { headers, signal: AbortSignal.timeout(15000) },
  );
  if (!response.ok)
    throw new Error(
      `GitHub metadata refresh failed for ${name}: HTTP ${response.status}. Snapshot was not changed.`,
    );
  const repo = await response.json();
  if (
    repo.private ||
    repo.owner?.login !== "DanielChrobak" ||
    repo.name !== name ||
    !Number.isInteger(repo.stargazers_count)
  )
    throw new Error(`Unexpected public repository metadata for ${name}`);
  repositories[name] = { stars: repo.stargazers_count };
}
await writeFile(
  new URL("../src/github.json", import.meta.url),
  JSON.stringify(
    {
      checkedAt: new Date().toISOString().slice(0, 10),
      profile: "https://github.com/DanielChrobak",
      repositories,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `Refreshed ${names.length} public repositories. No private data was requested.`,
);
