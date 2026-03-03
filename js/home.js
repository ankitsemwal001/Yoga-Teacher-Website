// ================= FOOTER REVEAL =================
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("siteFooter");

  if (!footer) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-visible");
        observer.unobserve(footer);
      }
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(footer);
});