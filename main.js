(() => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    const next = !isOpen;

    menuBtn.setAttribute("aria-expanded", String(next));
    mobileNav.hidden = !next;
    menuBtn.setAttribute("aria-label", next ? "Close menu" : "Open menu");
  });
})();
