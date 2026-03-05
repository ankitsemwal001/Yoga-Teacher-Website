async function loadComponent(id, file) {

  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  const html = await res.text();

  el.innerHTML = html;

  // Tailwind refresh for CDN
  if (window.tailwind && typeof window.tailwind.refresh === "function") {
    window.tailwind.refresh();
  }

}

loadComponent("site-header", "../templates/header.html");
loadComponent("site-footer", "../templates/footer.html");