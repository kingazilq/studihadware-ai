/* ==============================
   LOAD MENU (menu.html)
================================ */
fetch("menu.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("menu").innerHTML = data;
  });

/* ==============================
   BLOG DYNAMIC (JSON)
   hanya aktif jika ada blog-container
================================ */
fetch("blog-data.json")
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById("blog-container");
    if (!container) return; // supaya tidak error di halaman lain

    posts.forEach(post => {
      const article = document.createElement("article");
      article.style.marginBottom = "70px";

      article.innerHTML = `
        <h2>${post.title}</h2>
        <p style="opacity:0.6">${post.date}</p>
        <p>${post.content}</p>
      `;

      container.appendChild(article);
    });
  });

/* ==============================
   GSAP SCROLL ANIMATION
================================ */
if (typeof gsap !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      }
    });
  });
}
