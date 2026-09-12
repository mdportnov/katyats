---
name: Kateryna Ts.
description: A contact sheet on a light table. White paper and Inter; the work itself sits on black film with white edge print, and a red grease pencil marks the selects.
colors:
  paper: "#ffffff"
  paper-2: "#f7f7f8"
  ink: "#111111"
  ink-muted: "#5f5f63"
  ink-line: "rgba(17, 17, 17, 0.12)"
  film: "#0b0b0b"
  film-2: "#161616"
  edge: "#f3f2ee"
  edge-muted: "#b3b0a8"
  edge-line: "rgba(243, 242, 238, 0.18)"
  maroon: "#800000"
  maroon-2: "#5a0000"
  pencil: "#d5222c"
  on-red: "#fff3f0"
  on-red-muted: "#f2c9c4"
  on-red-line: "rgba(255, 243, 240, 0.24)"
gradients:
  brand: "linear-gradient(135deg, #800000 0%, #3a0000 70%, #000 100%)"
typography:
  family: Inter, "Helvetica Neue", Arial, sans-serif
  h1: "800 / clamp(2.75rem, 7vw, 5.5rem) / 1 / -0.02em / uppercase (landing: clamp(2.25rem, 4.2vw, 3.75rem))"
  h2: "800 / clamp(2rem, 4.5vw, 3.5rem) / 1 / -0.02em / uppercase"
  h3: "800 / 1.25rem / 1.25 / -0.01em / sentence case"
  lead: "400 / clamp(1.0625rem, 1.4vw, 1.25rem) / 1.6; emphasis at 600 in --fg"
  body: "400 / 1.0625rem / 1.6"
  edge-print: "600 / 0.75rem / 0.12em / uppercase (labels, frame numbers, footer)"
  note: "600 / 0.9375rem in pencil red (captions that give an instruction)"
  button: "700 / 1rem"
  frame-title: "600 / 0.8125rem"
  tally-num: "800 / clamp(2.5rem, 5vw, 4.5rem) / -0.03em, white over a still"
  prose-emphasis: "800 / clamp(1.5rem, 3vw, 2.25rem) / uppercase"
rounded:
  pill: 999px
  none: 0
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  container: 1280px
  section: "clamp(3.5rem, 8vw, 7rem) block"
  measure: 62ch
motion:
  ease: "cubic-bezier(0.16, 1, 0.3, 1)"
  pencil-draw: "stroke-dashoffset 520→0, 0.7s (hover, focus-within, .is-select)"
  tick-draw: "stroke-dashoffset 80→0, 0.6s on .is-in"
  developing: "filter contrast(0.2) brightness(0.3) → none, 1.1s on .is-in"
  rise: "opacity 0 / translateY(18px) → none, 0.8–0.9s, staggered 0.08–0.2s"
  door-flood: "clip-path inset(rect) → inset(0), 0.6s; pencil circle 380ms first; navigate at 620ms"
  view-transition: "cross-document, old 0.25s fade, new 0.55s rise"
breakpoints:
  - 1100px
  - 900px
  - 600px
---

# Kateryna Ts. design system

## World

A photographer's contact sheet laid on a white light table. The paper is white and the type is Inter, because the owner reads best with the simplest faces. The work stays on black film: the twelve-frame sheet, the black door on the landing, the menu and the video player. Maroon is the brand's second ground: the coordination hero, every contact band and the red door run the maroon-to-black gradient. Pencil red is the tool, never a surface: drawn circles, ticks, the play button, captions that instruct.

## Rules

- **Two grounds, one paper.** White paper is the default. `.film` sets the black context, `.band-red`, `.contact` and `.door--red` set the maroon one. Every component reads `--fg`, `--fg-muted`, `--line` and never a fixed colour, so it survives all three grounds.
- **One pencil.** `--pencil` (#d5222c) is reserved for drawn strokes, the play button, notes, focus rings and selection. Buttons and the section switch use maroon (#800000); on maroon grounds the primary button flips to white with maroon text.
- **Frames are negatives.** 9:16, zero radius, one-pixel `--line` outline, a frame number (`1A`) with a triangle marker above, a title below. Stills on maroon and in stats are printed grayscale and dimmed; hover or `.is-select` restores colour.
- **Circles are strokes.** A pencil mark is an SVG path (`.pencil`) drawn with stroke-dashoffset. Never a border, never a box-shadow ring.
- **Pills for controls, none for media.** Buttons, the Creator/Coordination switch, language chips, the play button and door notes are 999px pills. Frames, sheets, lists and bands have no radius.
- **Caps down to h2.** h1 and h2 are uppercase with tight tracking; h3 and everything below are sentence case. No eyebrows above headings.
- **Edge print carries data.** Small tracked caps are used only for real labels: frame numbers, section side notes, the footer, meta rows.
- **Motion is authored, not scattered.** Pencil draw-on, the developing sheet, the door flood and the arrival rise are the only moments. Reduced motion removes all of them.

## Layout

Container 1280px with a fluid gutter. Heroes are two columns (copy 1.15fr, media 1fr) collapsing at 900px. The contact sheet is six columns, four at 1100px, two at 600px. Service lists are two columns with hairline dividers, one column at 900px. Stats and process are four frames, two at 600px.

## Landing

Meta row, headline and lead on white; then two doors filling the rest of the viewport. Black door: three looping 9:16 previews with a pencil mark on hover. Maroon door: an 18-cell sheet of stills with three circled selects. Clicking a door draws the pencil around its name, floods the screen with the door's colour and navigates.
