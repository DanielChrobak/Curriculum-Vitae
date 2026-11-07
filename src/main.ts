export {};
document.documentElement.classList.add("js");

const menu = document.querySelector<HTMLButtonElement>(".menu-toggle");
const sitePanel = document.querySelector<HTMLElement>(".site-panel");
const compact = matchMedia("(max-width: 960px)");
const header = document.querySelector<HTMLElement>(".site-header");

function closeMenu(restoreFocus = false) {
  sitePanel?.removeAttribute("data-open");
  menu?.setAttribute("aria-expanded", "false");
  if (restoreFocus) menu?.focus();
}

if (menu && sitePanel) {
  menu.hidden = false;
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    sitePanel.toggleAttribute("data-open", open);
  });
  sitePanel
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => closeMenu()));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true")
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (
      compact.matches &&
      event.target instanceof Node &&
      !sitePanel.contains(event.target) &&
      !menu.contains(event.target)
    )
      closeMenu();
  });
  document.addEventListener("focusin", (event) => {
    if (
      compact.matches &&
      event.target instanceof Node &&
      !sitePanel.contains(event.target) &&
      !menu.contains(event.target)
    )
      closeMenu();
  });
  compact.addEventListener("change", () => closeMenu());
}

const themeButton = document.querySelector<HTMLButtonElement>(".theme-toggle");
if (themeButton) {
  themeButton.hidden = false;
  const updateTheme = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#16182b" : "#f5f5fa");
    themeButton.setAttribute(
      "aria-label",
      `Switch to ${dark ? "light" : "dark"} theme`,
    );
  };
  updateTheme();
  themeButton.addEventListener("click", () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("cv-theme", theme);
    } catch {
      /* Theme still works when storage is unavailable. */
    }
    updateTheme();
  });
}

const projects = [...document.querySelectorAll<HTMLElement>("[data-category]")];
const filters = [
  ...document.querySelectorAll<HTMLButtonElement>("[data-filter]"),
];
const toolbar = document.querySelector<HTMLElement>(".project-toolbar");
const count = document.querySelector<HTMLElement>("#project-count");
function filterProjects(category: string) {
  let shown = 0;
  for (const project of projects) {
    project.hidden =
      category !== "all" && project.dataset.category !== category;
    if (!project.hidden) shown++;
  }
  for (const filter of filters)
    filter.setAttribute(
      "aria-pressed",
      String(filter.dataset.filter === category),
    );
  if (count) count.textContent = `${shown} project${shown === 1 ? "" : "s"}`;
}
if (toolbar) toolbar.hidden = false;
filters.forEach((filter) =>
  filter.addEventListener("click", () =>
    filterProjects(filter.dataset.filter || "all"),
  ),
);

// Direct links still work when the target project was excluded by a filter.
function revealHash(hash = location.hash) {
  let id: string;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  const project = target.closest<HTMLElement>("[data-category]");
  if (project?.hidden) filterProjects("all");
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener("hashchange", () => revealHash());
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => revealHash(link.hash));
});
document
  .querySelectorAll<HTMLAnchorElement>("[data-open-details]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      const detail = document.getElementById(link.dataset.openDetails || "");
      if (detail instanceof HTMLDetailsElement) detail.open = true;
    });
  });
revealHash();

// Mark the last section that has passed the reading line, including short sections.
const sections = [
  ...document.querySelectorAll<HTMLElement>("main > section[id]"),
];
const navLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>(
    '.wordmark, nav a[href^="#"]',
  ),
];
let scrollPending = false;
function markSection() {
  const readingLine = (header?.clientHeight ?? 0) + 32;
  let current: string | undefined = sections[0]?.id;
  for (const section of sections)
    if (section.getBoundingClientRect().top <= readingLine)
      current = section.id;
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5
  )
    current = sections.at(-1)?.id;
  for (const link of navLinks) {
    if (link.hash === `#${current}`)
      link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  scrollPending = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollPending) {
      scrollPending = true;
      requestAnimationFrame(markSection);
    }
  },
  { passive: true },
);
window.addEventListener("resize", markSection);
markSection();

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

// Include every credential in print, then restore the visitor's disclosure state.
const credentials = document.querySelector<HTMLDetailsElement>(
  ".credentials-details",
);
let credentialsWereOpen: boolean | undefined;
window.addEventListener("beforeprint", () => {
  if (credentials) {
    credentialsWereOpen ??= credentials.open;
    credentials.open = true;
  }
});
window.addEventListener("afterprint", () => {
  if (credentials && credentialsWereOpen !== undefined) {
    credentials.open = credentialsWereOpen;
    credentialsWereOpen = undefined;
  }
});
document
  .querySelectorAll<HTMLButtonElement>(".print-button")
  .forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", () => window.print());
  });
