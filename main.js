document.getElementById("year").textContent = new Date().getFullYear();

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
