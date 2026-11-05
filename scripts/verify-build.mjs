import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const html = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
assert(
  !/<!-- (CREDENTIALS|GPU_STARS|MIC_STARS|GITHUB_DATE) -->/.test(html),
  "Unrendered build-time content",
);
assert.equal(
  [...html.matchAll(/<h1\b/g)].length,
  1,
  "Exactly one page heading",
);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "Unique element IDs");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(id), `Missing anchor: ${id}`);
assert(
  !html.includes('github.com/DanielChrobak/SlipStream"'),
  "Private repository link must not be published",
);
assert(
  !html.includes("github.com/DanielChrobak/Hyper-V-GPU-Manager"),
  "Old repository link",
);
assert(
  !/sub-50ms|WebRTC|font-awesome|fonts.googleapis/.test(html),
  "Outdated claims or external UI dependencies",
);
assert.equal(
  [...html.matchAll(/class="credential-date"/g)].length,
  13,
  "All original credentials retained",
);
for (const [, attributes] of html.matchAll(/<a\s+([^>]+)>/g)) {
  if (attributes.includes('target="_blank"'))
    assert(attributes.includes("noopener noreferrer"), "External link safety");
}
for (const [, asset] of html.matchAll(
  /(?:src|href)="([^"]*\/assets\/[^"#]+)"/g,
)) {
  await access(
    new URL("../dist/assets/" + asset.split("/assets/")[1], import.meta.url),
  );
}
for (const path of ["favicon.svg", "robots.txt", "sitemap.xml"])
  await access(new URL("../dist/" + path, import.meta.url));
JSON.parse(
  html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
);
console.log(
  "Verified static content, credentials, anchors, metadata, safe links, and built assets.",
);
