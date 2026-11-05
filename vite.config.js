import { defineConfig } from "vite";
import credentials from "./src/credentials.json" with { type: "json" };
import github from "./src/github.json" with { type: "json" };

const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
export default defineConfig({
  base: process.env.SITE_BASE || "/Curriculum-Vitae/",
  plugins: [
    {
      name: "cv-content",
      transformIndexHtml(html) {
        // Build-time rendering keeps the entire CV readable without JavaScript.
        const groups = Object.entries(credentials)
          .map(
            ([name, group]) =>
              `<div class="credential-group"><h4>${escape(name)}</h4><ul>${group.items.map((item) => `<li><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer"><span>${escape(item.name)}</span><span class="credential-date">${escape(item.date)} <span aria-hidden="true">↗</span></span></a></li>`).join("")}</ul></div>`,
          )
          .join("");
        return html
          .replace("<!-- CREDENTIALS -->", groups)
          .replaceAll(
            "<!-- GPU_STARS -->",
            escape(
              github.repositories["Hyper-V-GPU-Paravirtualization-Manager"]
                .stars,
            ),
          )
          .replaceAll(
            "<!-- MIC_STARS -->",
            escape(
              github.repositories["Python-Microphone-Input-Forwarder"].stars,
            ),
          )
          .replaceAll("<!-- GITHUB_DATE -->", escape(github.checkedAt));
      },
    },
  ],
});
