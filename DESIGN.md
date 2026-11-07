---
name: "Engineering Folio"
description: "The visual system for Daniel Chrobak’s curriculum vitae and engineering portfolio."
colors:
  light-page: "#f5f5fa"
  light-ink: "#1b1c31"
  light-muted: "#515369"
  light-rule: "#d3d4e3"
  light-rule-strong: "#9598b6"
  light-wash: "#eceefa"
  light-accent: "#2931bf"
  light-action: "#2931bf"
  light-action-hover: "#191e93"
  light-action-text: "#fff"
  light-selection: "#d5d9ff"
  light-selection-ink: "#202483"
  dark-page: "#16182b"
  dark-ink: "#f5f5ff"
  dark-muted: "#babdd7"
  dark-rule: "#3a3d5b"
  dark-rule-strong: "#737899"
  dark-wash: "#222643"
  dark-accent: "#b9c2ff"
  dark-action: "#b9c2ff"
  dark-action-hover: "#d5dbff"
  dark-action-text: "#191b48"
  dark-selection: "#b9c2ff"
  dark-selection-ink: "#171940"
  plate: "#292fb7"
  plate-frame: "#323bc7"
  plate-text: "#fff"
  plate-secondary: "#dce0ff"
  plate-line: "#adb6ff"
  plate-grid: "#474dca"
  signal: "#ffba72"
  print-page: "white"
  print-ink: "#161616"
  print-muted: "#353535"
  print-rule: "#c0c0c0"
  print-accent: "#24246b"
  print-wash: "white"
typography:
  display:
    fontFamily: 'Archivo, "Arial", sans-serif'
    fontSize: "clamp(3.65rem, 7.2vw, 6rem)"
    fontWeight: 790
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: 'Archivo, "Arial", sans-serif'
    fontSize: "clamp(2rem, 4.8vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: 'Archivo, "Arial", sans-serif'
    fontSize: "clamp(1.4rem, 2.3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  featured-title:
    fontFamily: 'Archivo, "Arial", sans-serif'
    fontSize: "clamp(2.6rem, 6vw, 5rem)"
    fontWeight: 780
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.65
  label:
    fontFamily: 'ui-monospace, "Cascadia Mono", Consolas, monospace'
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
  action:
    fontFamily: "system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
rounded:
  square: "0"
spacing:
  gutter: "clamp(20px, 5vw, 76px)"
  section-gap: "clamp(58px, 8vw, 116px)"
  heading-gap: "clamp(20px, 3vw, 42px)"
  action-gap: "8px"
  plate-inset: "clamp(14px, 2.25vw, 30px)"
components:
  button-primary:
    backgroundColor: "{colors.light-action}"
    textColor: "{colors.light-action-text}"
    typography: "{typography.action}"
    padding: "4px 16px"
    height: "49px"
    rounded: "{rounded.square}"
  button-primary-hover:
    backgroundColor: "{colors.light-action-hover}"
  button-print:
    backgroundColor: "transparent"
    textColor: "{colors.light-ink}"
    typography: "{typography.action}"
    padding: "4px 12px"
    height: "44px"
    rounded: "{rounded.square}"
  button-theme:
    backgroundColor: "transparent"
    textColor: "{colors.light-ink}"
    padding: "0"
    width: "44px"
    height: "44px"
    rounded: "{rounded.square}"
  button-menu:
    backgroundColor: "transparent"
    textColor: "{colors.light-ink}"
    typography: "{typography.action}"
    padding: "4px 12px"
    height: "44px"
    rounded: "{rounded.square}"
  text-link:
    textColor: "{colors.light-accent}"
    typography: "{typography.action}"
    height: "44px"
  index-link:
    textColor: "{colors.light-muted}"
    padding: "0 4px"
    height: "72px"
  index-link-current:
    textColor: "{colors.light-accent}"
  project-filter:
    backgroundColor: "transparent"
    textColor: "{colors.light-muted}"
    padding: "3px 12px"
    height: "44px"
    rounded: "{rounded.square}"
  project-filter-selected:
    backgroundColor: "{colors.light-wash}"
    textColor: "{colors.light-accent}"
  featured-project:
    backgroundColor: "{colors.light-wash}"
    textColor: "{colors.light-ink}"
    padding: "clamp(20px, 3.3vw, 42px) clamp(18px, 3.3vw, 42px) 0"
    rounded: "{rounded.square}"
  drawing-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-text}"
    padding: "{spacing.plate-inset}"
    rounded: "{rounded.square}"
  disclosure:
    textColor: "{colors.light-accent}"
    height: "48px"
---

# Design System: Engineering Folio

## Overview

**Creative North Star: "Engineering Folio"**

A technical folio built from drawing stock, ultramarine ink, and precise rules. Large Archivo headings make entries easy to scan, while numbered figures and compact labels give architecture diagrams the structure of annotated drawings.

The same visual grammar carries from light to dark. Indigo drawing plates stay saturated across both themes, and a lighter wash gives featured evidence a quieter emphasis.

**Key Characteristics**

- Ruled sections with square-edged controls and surfaces.
- Technical drawings with figure numbers, labelled stages, and an amber signal path.
- A light A4 print layout with compact type and rules.

## Colors

### Primary

Ultramarine marks links, selected controls, figure rules, and primary actions on light drawing stock. In dark mode, pale ultramarine serves the same roles. The plate and its internal drawing planes, rules, and grid use a shared blue palette in both modes.

### Secondary

Amber marks the delivery trace, numbered plate annotations, and plate or contact interactions. White and pale periwinkle distinguish plate titles and secondary text.

### Neutral

Use drawing stock for the page, ink for headings and titles, and slate for paragraphs and metadata. Fine rules separate records, stronger rules define control boundaries, and the wash highlights featured work, credentials, and selected filters. These roles invert to their dark counterparts when the theme changes. Print uses white stock, dark text, gray rules, and a subdued indigo accent.

**The Amber Signal Rule.** Use amber for the drawing trace, figure labels, and interactions on indigo surfaces. Use the theme accent for actions on the page.

## Typography

Self-hosted variable Archivo supplies the display, headlines, and titles. System sans handles prose, navigation, and controls. System monospace marks figure numbers, process steps, and education dates. Experience and credential dates use tabular numerals.

- The display sets the name in tightly spaced Archivo (790). Section headlines and standard titles use the same face (700), with a larger featured-project title (780).
- Body text uses a relaxed line height (1.65). Keep the introduction near 46 characters per line and longer project and experience text near 67–70.
- Figure labels stay small (0.75rem) and preserve the written case. Control labels use a stronger system-sans weight (700).

## Layout

The centered shell caps at 1296px with fluid side gutters. The masthead aligns the wordmark, section index, and utilities. The introduction and featured case study use two columns. Experience pairs dates with prose, and capabilities group each entry in three columns. Use generous spacing between sections and tighter ruled rows within them.

- At 960px and below, the masthead drops from 72px to 64px and the enhanced section index becomes a two-column menu. With scripting unavailable, navigation stays visible and the header sits in normal flow.
- At 700px and below, the introduction, project content and figures, experience, and capabilities stack. The credential summary wraps.
- At 400px and below, the name, filter spacing, and metadata tighten. Credential dates stack under their titles.
- Print uses A4 with 13mm vertical and 16mm horizontal margins. Body text uses 9.5pt and the name uses 34pt. The print stylesheet removes navigation, screen controls, and project figures. Filtered projects return to the printed list. The enhanced page temporarily opens the credentials list for printing.

## Elevation & Depth

**The Ruled Surface Rule.** Separate sections and records with thin rules. Use a tint or a solid indigo plate when a surface needs emphasis.

Drawing depth comes from overlapping SVG planes, a fine grid, and dashed guides. Surface hierarchy comes from color and rules.

## Shapes

The form language is square. Use 1px rules for rows and controls, 2px accent rules to introduce technical figures, and a 3px underline for the current section in the index. The standard keyboard focus outline is 2px with a 4px offset. Focus in the dark contact block uses amber, and index links draw the outline inside their bounds.

## Components

- **Actions.** The filled primary link has a 49px minimum target height. The secondary print and menu controls use a transparent face and a strong outline, while the theme control is a 44px square. Text links use theme accent and underline on hover.
- **Section index.** Muted labels take the theme accent and a bottom rule in the current section. The wordmark uses a square indigo monogram with a name and small subtitle.
- **Project filters.** Rectangular 44px minimum targets sit in a ruled toolbar. Hover adds a wash. The pressed state adds a visible border and keeps its pressed semantics. Technology tags use muted text and slash separators.
- **Project entries and disclosures.** Ordinary entries use a top rule. Featured entries use a flush wash and a larger title. Native disclosures have a 48px summary row with an accent label and a trailing plus that rotates when expanded.
- **Drawing plate.** A figure label, SVG drawing, ruled three-stage legend, and linked action form one surface. Hover or keyboard focus sends a single 800ms pulse along the amber trace. Reduced-motion mode preserves the static drawing and disables the pulse.
- **Contact panel.** The indigo plate palette carries a prominent underlined email address and a ruled row of secondary links.

## Do's and Don'ts

- Do pair large Archivo headings with readable system-sans prose and compact monospace figure numbers.
- Do group records with rules and reserve tinted surfaces for featured material.
- Do give keyboard focus a visible outline and keep diagram motion responsive to reduced-motion preferences.
- Don't add rounded capsules, drop shadows, or gradients to controls and evidence surfaces.
- Don't use amber as the page-wide action color.
- Don't carry dense screen diagrams or navigation into the print layout.
