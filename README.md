# ldd.ly

Official website of Libyan Data Diwan (ديوان البيانات الليبي) — currently an "under construction" page.
Arabic, right-to-left. The home page is an unveiling: a rendered daylight scene of the brand arch under a woven mint veil on a terrazzo pedestal, framed by a brass arch among sand dunes, with live text over it. A toggle in the header switches to a night render of the same scene; the choice is saved per visitor (day is the default).

Static site served by GitHub Pages (`CNAME` → www.ldd.ly). No build step.

| File | Purpose |
| --- | --- |
| `index.html` | Under-construction page |
| `404.html` | Not-found page |
| `styles.css` | Shared styles, brand tokens and glass surfaces |
| `main.js` | Footer year, day/night toggle (saved in `localStorage`), background preload of the other scene, pointer light on glass |
| `scene-wide-*.webp`, `scene-tall-*.webp` | Day backdrop: landscape (desktop) and portrait (phones), several widths |
| `scene-night-*.webp` | Night backdrop, same framings and widths |
| `favicon.svg`, `*.png`, `og-image.jpg` | Icons and social share image |

All rights reserved. See [LICENSE](LICENSE).
