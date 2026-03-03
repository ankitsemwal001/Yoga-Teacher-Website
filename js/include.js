async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();

  // 🔥 FOOTER ANIMATION INIT AFTER LOAD
  if (id === "site-footer") {
    const footer = document.getElementById("siteFooter");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
          observer.unobserve(footer);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(footer);
  }
}

loadComponent("site-header", "../templates/header.html");
loadComponent("site-footer", "../templates/footer.html");