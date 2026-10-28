document.getElementById("year").textContent = new Date().getFullYear();

// Day / night toggle. The choice is saved per visitor; day is the default.
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const THEME_COLORS = { day: "#F4ECE2", night: "#061B1F" };

function applyTheme(theme) {
  if (theme === "night") root.dataset.theme = "night";
  else delete root.dataset.theme;
  const night = theme === "night";
  toggle.setAttribute("aria-pressed", String(night));
  toggle.setAttribute("aria-label", night ? "الوضع النهاري" : "الوضع الليلي");
  themeColor.setAttribute("content", THEME_COLORS[theme]);
}

applyTheme(root.dataset.theme === "night" ? "night" : "day");

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "night" ? "day" : "night";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Once the page has settled, fetch the other scene too so the switch is an instant crossfade.
function loadOtherScene() {
  const hidden = document.querySelector(root.dataset.theme === "night" ? ".scene-day img" : ".scene-night img");
  const ready = () => root.classList.add("scenes-ready");
  hidden.loading = "eager";
  if (hidden.complete && hidden.naturalWidth) ready();
  else hidden.addEventListener("load", ready, { once: true });
}
if (document.readyState === "complete") setTimeout(loadOtherScene, 1000);
else addEventListener("load", () => setTimeout(loadOtherScene, 1000));

// A soft highlight on glass panels that follows the pointer (mouse/trackpad only).
if (matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
  for (const el of document.querySelectorAll(".glass")) {
    el.classList.add("has-light");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.style.setProperty("--light", "1");
    });
    el.addEventListener("pointerleave", () => el.style.setProperty("--light", "0"));
  }
}
