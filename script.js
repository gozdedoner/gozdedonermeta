document.addEventListener("DOMContentLoaded", function () {
  // NAVBAR: Hamburger Menü Aç / Kapat
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  console.log("hamburger:", hamburger);
  console.log("navMenu:", navMenu);

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }

  // SLIDER: Sadece .my-slider varsa çalışsın
  const sliderElement = document.querySelector(".my-slider");
  if (sliderElement) {
    let slider = tns({
      container: ".my-slider",
      slideBy: "1",
      speed: 400,
      nav: false,
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false,
      responsive: {
        1600: { items: 4, gutter: 20 },
        1024: { items: 4, gutter: 20 },
        768: { items: 2, gutter: 20 },
        480: { items: 1 },
      },
    });
  }
});
console.log("JS yüklendi!");
