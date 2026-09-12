---
name: Kateryna Ts.
description: A darkroom contact sheet. Work on black film base with white edge print; a red grease pencil marks the selects.
colors:
  film: "#0b0b0b"
  film-well: "#151515"
  edge: "#f1efe9"
  edge-muted: "#a9a59c"
  edge-line: "rgba(241, 239, 233, 0.16)"
  maroon: "#800000"
  on-red: "#fff3f0"
  on-red-muted: "#f0c2bd"
  on-red-line: "rgba(255, 243, 240, 0.22)"
  pencil: "#d5222c"
  pencil-lift: "#e33a43"
  ink: "#0b0b0b"
  paper-white: "#ffffff"
  media-black: "#000000"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "0.005em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  edge-print:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
  label:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.12em"
  action:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.1em"
  hand:
    fontFamily: "Caveat, Comic Sans MS, cursive"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
rounded:
  none: "0"
spacing:
  frame-gap: "14px"
  sheet-gap: "clamp(12px, 1.6vw, 22px)"
  row: "1.5rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  section-head: "clamp(2rem, 4vw, 3.5rem)"
  sheet-row: "4rem"
  section: "clamp(3.5rem, 8vw, 7rem)"
  container: "1280px"
components:
  button-pencil:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.paper-white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "1rem 1.5rem"
  button-pencil-hover:
    backgroundColor: "{colors.pencil-lift}"
    textColor: "{colors.paper-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.edge}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "1rem 1.5rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-red}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "1rem 1.5rem"
  switch-segment:
    backgroundColor: "transparent"
    textColor: "{colors.edge-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.85rem"
  switch-segment-current:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.paper-white}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.edge-muted}"
    typography: "{typography.label}"
  frame:
    backgroundColor: "{colors.film-well}"
    rounded: "{rounded.none}"
    padding: "0"
  frame-play-badge:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.paper-white}"
    size: "52px"
  lang-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.75rem"
  player-close:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.paper-white}"
    size: "48px"
---

# Design System: Kateryna Ts.

## Overview

**Creative North Star: "The Darkroom Contact Sheet"**

Every surface is a strip of developed film laid on a light table. The base is film black, the typography is the edge print a lab burns into the rebate (condensed caps, tracked, small), and a red grease pencil is the only hand that touches the sheet: it circles the selects, writes short notes at an angle, and paints the actions. Two doors leave the chooser: the black door is the creator's own contact sheet (`/creator/`), the red door is the coordination service, where brand maroon owns the whole page and the roles invert (`/coordination/`).

Density is editorial and even: hard 1px rebate lines separate sections, lists and rows; there are no cards, no radii, no glows. Media are 9:16 negatives with a frame number printed above and a title below. Selection is never a border: it is a stroked SVG circle that draws itself on (`stroke-dashoffset` to 0). Motion is the darkroom's: frames "develop" from a murky low-contrast state, pencil marks draw on, the chosen door floods the viewport before the next page rises into place. The build refuses the beige creator portfolio and the neon agency page alike.

**Key Characteristics:**
- Black film base or maroon region; never a mid-tone surface.
- Condensed uppercase display (Big Shoulders Display 800) at tight leading (0.92) for every heading, down to h3.
- Edge print (600, 0.8125rem, 0.16em tracking) carries data: frame numbers, name, place, format.
- Pencil red is reserved for marks and actions; maroon is a region colour, never an accent.
- Circles, ticks and arrows are drawn strokes on SVG, animated by dash offset.
- Zero radius, zero card shadows; depth comes from tonal wells and 1px rebate lines.

## Colors

Two grounds (film black and brand maroon) with one pencil; each ground carries its own off-white text ramp and its own hairline.

### Primary
- **Pencil Red** (`{colors.pencil}`): the grease pencil. Circles on selects, the play badge, the primary button on black, the current segment of the page switch, focus rings, text selection, and the black page's contact CTA on the red page. The only saturated colour that touches text or an action.
- **Pencil Lift** (`{colors.pencil-lift}`): hover state of the pencil button only.

### Secondary
- **Brand Maroon** (`{colors.maroon}`): a region colour. It owns the entire coordination page, the red door on the chooser, the creator page's contact band, and the header/menu on the red page. Never used as a button, border, or text colour.

### Neutral
- **Film Black** (`{colors.film}`): body ground of the chooser and creator pages, the black door, the flood layer for the black door.
- **Film Well** (`{colors.film-well}`): the frame body behind a negative before media loads.
- **Media Black** (`{colors.media-black}`): inside every `frame-media` well and the player video; hover of the ink button on red.
- **Ink** (`{colors.ink}`): the same black as film, named for its role on maroon: the ink button, the current switch segment on red, selected ghost frames, language chips, and the contact band on the coordination page (black on red, mirroring red on black).
- **Edge Off-White** (`{colors.edge}`): primary text and headings on black; frame numbers' triangle marker; flood title on the black flood.
- **Edge Muted** (`{colors.edge-muted}`): secondary text on black (leads, list descriptions, nav at rest, edge print at rest).
- **Edge Line** (`{colors.edge-line}`): every hairline on black: header border, section dividers, list rows, ghost button border, the switch frame.
- **On-Red** (`{colors.on-red}`): primary text on maroon; the pencil stroke colour when a circle sits on maroon (door mark, red-sheet selects on the chooser).
- **On-Red Muted** (`{colors.on-red-muted}`): secondary text on maroon.
- **On-Red Line** (`{colors.on-red-line}`): every hairline on maroon.
- **Paper White** (`{colors.paper-white}`): text on pencil red only.

### Named Rules
**The Two Grounds Rule.** A region is either film black or brand maroon, edge to edge. Text, hairlines and muted copy switch ramps with the ground (`edge*` on black, `on-red*` on maroon); nothing mid-tone is ever painted between them.

**The One Pencil Rule.** Saturated red touches only what the pencil would: a select circle, a note, an action, a focus ring. Maroon is never an accent and pencil red is never a fill for a surface larger than a button.

**The Inversion Rule.** What is pencil-on-black on the creator page becomes ink-on-maroon on the coordination page: the primary button, the current switch segment, the selected frame. The creator page's contact band is maroon; the coordination page's contact band is ink.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif); weights 600, 700, 800 loaded.
**Body Font:** Schibsted Grotesk (with Helvetica Neue, Arial, sans-serif); 400, 600, italic 400 loaded.
**Hand Font:** Caveat 600 (with cursive fallback), used only for grease-pencil notes and the tally numerals.

**Character:** Condensed industrial caps at tight leading read as the edge print of a film strip; a quiet grotesk carries the sentences; a single handwritten face plays the pencil and is always tilted (`rotate(-4deg)`, notes on doors `-6deg`).

### Hierarchy
- **Display** (800, `clamp(3.25rem, 8vw, 6rem)`, 0.92, uppercase, `max-width: 9ch`): the page h1 on creator and coordination. The chooser h1 is one step down (`clamp(2.5rem, 5vw, 4rem)`, `max-width: 12ch`). The flood title during a door transition is the largest setting in the system (`clamp(3rem, 12vw, 11rem)`, 0.9).
- **Headline** (800, `clamp(2.5rem, 6vw, 4.5rem)`, 0.92, uppercase): section h2 and prose h2. Door titles `clamp(2.25rem, 4.5vw, 3.5rem)`; the contact band h2 rises to `clamp(3rem, 8vw, 6rem)` with `max-width: 10ch`. Prose emphasis lines use the same face at `clamp(2rem, 4vw, 3rem)`, line-height 1.
- **Title** (800, 1.75rem, 0.92, uppercase): h3 in the service lists; process-step h3 at 1.625rem; player caption h3.
- **Lead** (400, `clamp(1.0625rem, 1.4vw, 1.25rem)`, 1.55, muted ramp): hero and chooser leads, contact copy, coordination prose; `max-width: 62ch`. Bold spans in leads are weight 600 in the primary ramp.
- **Body** (400, 1.0625rem, 1.55): descriptions in lists (`max-width` 40–48ch), tally labels at 0.9375rem.
- **Action** (800, 1.125rem, 0.1em, uppercase, line-height 1): buttons and door CTAs. Contact rows step up to `clamp(1.25rem, 2vw, 1.625rem)` at 700 / 0.06em; the logo is 800 at 1.375rem / 0.04em; language chips 800 at `clamp(1.5rem, 3vw, 2.25rem)` / 0.04em.
- **Label** (700, 0.875–0.9375rem, 0.12–0.14em, uppercase): switch segments (0.875rem / 0.12em), nav links (0.9375rem / 0.14em), frame titles (0.875rem / 0.12em, ellipsised on the sheet, wrapping under tally and process frames).
- **Edge Print** (600, 0.8125rem, 0.16em, uppercase, nowrap, muted ramp; `<b>` = 700 in the primary ramp): frame numbers (`1A`…`12A`, `01A`…`04A` on process), the masthead line (name · city / offer), section-head metadata, footer, player caption number. Ghost-frame numbers on maroon drop to 0.6875–0.75rem / 0.1em.
- **Hand** (Caveat 600, 1.5rem base, rotated −4°): pencil notes (`the selects`, `we mark the selects for you`, `these three`, `hover to mark, tap to play`) at 1.75rem on sheet feet and up to `clamp(1.5rem, 3vw, 2.25rem)` on doors; tally numerals at `clamp(3rem, 5.5vw, 5.5rem)` in On-Red over a darkened still.

### Named Rules
**The Edge Print Carries Data Rule.** Edge print is a lab imprint: a frame number, a name and city, a format note (`Contact sheet · 9:16`), a copyright. It is never a topic label above a headline; the heroes have no eyebrow, and the build removed them.

**The Caps Down to H3 Rule.** Every heading from h1 to h3 is Big Shoulders Display 800, uppercase, leading 0.92, balanced (`text-wrap: balance`). Sentence-case headings do not exist in this world.

**The Pencil Is Always Tilted Rule.** Caveat never sits level: −4° by default, −5° to −6° on door notes. Level handwriting reads as a font choice; tilted handwriting reads as a hand.

## Layout

One container (`min(100% − 2 × gutter, 1280px)`, gutter `clamp(1rem, 4vw, 3rem)`) inside full-bleed grounds. Sections are `clamp(3.5rem, 8vw, 7rem)` tall in padding and are separated by a 1px rebate line (`edge-line` on black, `on-red-line` on maroon); section heads are a flex row with the h2 left and edge-print metadata baseline-right, `clamp(2rem, 4vw, 3.5rem)` above the content.

Two-column heroes: copy `1.15fr` / strip `1fr` on the creator page (`1.05fr` on coordination), `gap: clamp(2rem, 5vw, 5rem)`, bottoms aligned. The chooser stacks masthead (edge print) → h1 (`1.3fr` / lead `1fr`) → two doors splitting the remaining viewport 50/50 with a 1px line between them; the door column is `min-height: 66dvh` and the whole chooser is `min-height: 100dvh`.

The contact sheet is a 6-column grid of 9:16 negatives, `column-gap: clamp(12px, 1.6vw, 22px)`, `row-gap: 4rem` to clear frame numbers above and titles below. Hero strips are 3 negatives with the middle one raised `2.25rem`; the chooser's door strip raises the middle frame 18px. Tally and process are 4-column frame grids using the sheet gap; the coordination hero ghost sheet is 4 columns at 12px; the chooser's red door ghost sheet is 6 × 3 at 10px.

Lists (services on both pages) are two columns of rows separated by 1px lines with a 1px vertical line between the columns; each row is `3.5rem` mark + text, `1.5rem` vertical padding. Contact bands are `1.2fr` / `1fr`, headline left, a line-separated contact list right.

Breakpoints, all `max-width`: **1100px** the sheet drops to 4 columns; **900px** nav and header switch hide behind a full-screen `<dialog>` menu, doors stack, heroes/contact/chooser go single column, service lists go single column, tally stays 4-up, process goes 2-up; **600px** sheet goes 2-up (18px / 3.25rem), tally and process 2-up, red-sheet 3-up with frames beyond 6 hidden, door ghost sheet 4 × 3 with frames beyond 12 hidden, contact list sublabels hidden, frame titles 0.75rem.

Rhythm inside components: 0.4–0.75rem between a heading and its description, 1.25–1.5rem between prose paragraphs, 0.75rem between actions, 1.1rem contact rows, 1.5rem header gap, 64px header height, 44–48px hit targets for icon buttons.

## Elevation & Depth

Flat. There are no card shadows and no hover shadows. Depth is tonal: media sits in a black well (`media-black`) inside a `film-well` frame body, both slightly darker than the film ground, and the well carries a 1px 8% off-white outline so a negative's edge reads on black. On maroon, ghost frames are darkened stills (`grayscale(1) contrast(1.1) brightness(0.6–0.7)`, `mix-blend-mode: luminosity`, opacity 0.7–0.75) with a 1px `on-red-line` border; a selected ghost returns to full colour. The sticky header is the ground at 88–90% over a 10px backdrop blur.

### Shadow Vocabulary
- **Player lift** (`box-shadow: 0 18px 40px -20px rgba(0, 0, 0, 0.7)`): the full-size video in the player dialog, the one lifted object, over a 92% black backdrop.
- **Numeral legibility** (`text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6)`): Caveat tally numerals written over a darkened still.
- **Pencil bleed** (`filter: drop-shadow(0 0 0.6px rgba(213, 34, 44, 0.8))`): a sub-pixel halo on every pencil stroke so it reads as grease, not vector.

### Named Rules
**The Light Table Rule.** Nothing casts a shadow onto the sheet. A shadow exists only when an object physically leaves the sheet (the player) or when a mark must stay legible over a photograph.

## Shapes

Radius is 0 everywhere: buttons, chips, switch, frames, badges, player, dialogs. Borders are 1px hairlines in the ground's line colour, used as rebate lines (row dividers, column rules, the switch frame, the ghost button). The only rounded forms are the SVG strokes themselves (`stroke-linecap: round`, `stroke-linejoin: round`): the grease-pencil circle (`viewBox 0 0 100 160`, one open loop path, stroke-width 4.5 on frames, 3 on headline words and door titles), the service tick marks (36 × 36, stroke 3.5, dash 80), stroke arrows and ticks inline in text (stroke 3, height 0.9em), and 24 × 24 line icons at stroke 1.75–2.5.

Negatives are 9:16 (`aspect-ratio: 9 / 16`; process frames drop to 9:12 under 600px). The frame-number marker is a 7px triangle (`clip-path: polygon(0 0, 100% 50%, 0 100%)`) in the ground's primary text colour. The door flood is a rectangle clipped from the clicked element's bounds to the full viewport (`clip-path: inset(...)` → `inset(0)`).

### Named Rules
**The Drawn Circle Rule.** A select is marked by a stroked SVG loop overflowing the frame by 6–8% on each side, never by a border, outline, ring or background change. On black the stroke is pencil red; on maroon it is `on-red` unless it sits over a still, where it returns to pencil red.

## Components

### Buttons
- **Shape:** square (0 radius), 2px border, `padding: 1rem 1.5rem`, Action type (800, 1.125rem, 0.1em caps), optional trailing 24 × 24 stroke icon at 1.1em.
- **Pencil** (black pages): Pencil Red fill and border, white text. Hover `pencil-lift`. The hero's "View my work".
- **Ink** (maroon pages): Ink fill and border, On-Red text; hover pure black. Inside the coordination contact band (ink ground) the same class flips to Pencil Red with white text.
- **Ghost:** transparent, 2px `edge-line` border (`on-red-line` on maroon), primary text colour; hover brightens the border to the primary text colour.
- **Hover / Active / Focus:** every button rises 2px (`translateY(-2px)`, 0.25s ease-out) and returns on press; focus is a 2px Pencil Red outline offset 3px, site-wide.

### Page Switch (segmented)
- **Style:** a 1px hairline frame with 3px inner padding, two Label-set links (700, 0.875rem, 0.12em) at `0.45rem 0.85rem`, muted text at rest, primary text on hover.
- **Current:** Pencil Red with white text on black; Ink with On-Red text on maroon. The non-current link carries `data-flood` so switching pages runs the flood transition.
- **Mobile:** hidden from the header under 900px and repeated inside the menu dialog.

### Navigation
- **Header:** sticky, 64px, ground colour at 88% over 10px blur, 1px bottom rebate line. Logo (800, 1.375rem, 0.04em caps) left, switch, then Label-set links (700, 0.9375rem, 0.14em) muted → primary on hover, right-aligned.
- **Menu (≤900px):** a full-viewport `<dialog>` in the ground colour; links at `clamp(2.5rem, 12vw, 4rem)` 800 caps, each on its own 1px rebate line; 44px close target.

### Frame (the negative)
- **Structure:** 9:16 `film-well` body; inside it a `media-black` well with a 1px 8% off-white outline holding a muted looping preview video (or a still); an edge-print number with triangle marker 1.35rem above; a Label-set title 1.5rem below, single-line ellipsised on the sheet.
- **Select mark:** the grease-pencil SVG over the frame; draws on (0.7s) on hover, focus-within, or `.is-select`.
- **Play badge:** a 52px Pencil Red square with a white 20px play glyph, hidden at rest, scaling 0.8 → 1 on hover/focus; the media scales 1.03 (0.4s).
- **Developing:** on the contact sheet, media starts at `contrast(0.2) brightness(0.3)` and develops to normal over 1.1s when the sheet enters the viewport (JS-gated, IntersectionObserver 15%).
- **On maroon:** frame number, marker and title switch to On-Red; stills print as darkened luminosity duotones; process stills return to colour on row hover.

### Service Row
- **Style:** `3.5rem` + `1fr` grid, a 36 × 36 stroked tick (Pencil Red on black, On-Red on maroon, dash 80 drawing on when the list enters view, 0.6s), Title h3, muted description ≤48ch; rows separated by 1px lines, two columns with a 1px column rule.

### Contact List
- **Style:** rows on 1px lines, each a flex link: 22px stroke icon, contact in 700 caps (`clamp(1.25rem, 2vw, 1.625rem)`, 0.06em), a body-font `<small>` sublabel pushed right in the muted ramp (hidden ≤600px). Hover slides the row `0.5rem` right (0.3s).

### Language Chip
- **Style:** Ink block, On-Red text, Big Shoulders 800 at `clamp(1.5rem, 3vw, 2.25rem)` caps, `0.35rem 0.75rem`, 0.6rem gaps, no border; static, no states.

### Ghost Sheet
- **Style:** a grid of 9:16 (or free-height on the chooser) `ghost` frames with a 1px `on-red-line` border, a darkened luminosity still, a bottom-left frame number on a 55% black tab (0.6875–0.75rem / 0.1em), and on `.is-select` a colour still with a Pencil Red circle. A tilted Caveat note floats over the sheet in On-Red.

### Doors
- **Style:** two full-height links, black (`film` ground, `edge` text, 1px right rebate) and maroon (`maroon` ground, `on-red` text). Stage on top (a raised 3-frame strip with looping previews and a pencil note, or the ghost sheet with a note), body below a 1px line: Headline h2 wrapped in a `door-mark` (a wide pencil loop, `preserveAspectRatio: none`, stroke 3) + muted description ≤40ch + a Pencil Red / On-Red CTA with an arrow that slides 6px on hover. Hovering a door lifts its strip 6px (0.8s).
- **Transition:** clicking any `data-flood` link draws the door's pencil loop (0.45s, doors wait 380ms), dims the other door to 35%, then a fixed layer in the door's colour opens from the link's bounds to the viewport (`clip-path` 0.6s ease-out) with the destination title rising at flood scale; navigation fires at 620ms. Cross-document view transitions (`@view-transition { navigation: auto }`) fade the old root 0.25s and rise the new root 0.55s from 12px; the arrival hero staggers its copy (0.08s steps) and frames (0.12s / 0.2s) in a 0.8–0.9s rise from 18px. All of it is off under `prefers-reduced-motion`.

### Player
- **Style:** a full-viewport `<dialog>` with a 92% black backdrop; the 9:16 video at `min(92dvh, 960px)` with a 1px 20% off-white outline and the player lift shadow; an edge-print number and h3 caption bottom-left; a 48px Pencil Red close square top-right. Preview loops pause while it is open; the source is unloaded on close.

## Do's and Don'ts

### Do:
- **Do** set every heading in Big Shoulders Display 800, uppercase, leading 0.92, and cap h1 at 9ch / section h2 at the headline clamp.
- **Do** put new media in a 9:16 negative with an edge-print frame number above (`nA`) and a Label-set title below; clear them with the 4rem sheet row gap.
- **Do** mark a select with the drawn pencil loop (`stroke-dasharray/offset 520`, 0.7s ease-out draw-on) and switch its stroke to `on-red` when it sits on bare maroon.
- **Do** switch the whole text ramp with the ground: `edge` / `edge-muted` / `edge-line` on black, `on-red` / `on-red-muted` / `on-red-line` on maroon.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for every transition and gate scroll reveals, developing and pencil draw-ons behind the `.js` class and `prefers-reduced-motion`.
- **Do** keep hit targets for icon-only controls at 44–48px and the focus ring at 2px Pencil Red, offset 3px.

### Don't:
- **Don't** add a border radius, a card, a drop shadow under a surface, or a glow; depth is tonal wells and 1px rebate lines only.
- **Don't** use maroon as an accent (button, border, text) or pencil red as a region fill; maroon owns regions, pencil red owns marks and actions.
- **Don't** mark selection with a border, outline ring or background tint; the circle is a stroke.
- **Don't** place a kicker or topic eyebrow above a headline; edge print carries data (frame number, name, place, format), not a label.
- **Don't** set Caveat level or use it for body copy; it is a tilted pencil note or a tally numeral, nothing else.
- **Don't** introduce a mid-tone grey surface, a sentence-case heading, or a third accent colour.
