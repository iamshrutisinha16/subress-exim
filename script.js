document.addEventListener("DOMContentLoaded", () => {

  // ================= MOBILE MENU =================
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // ================= NAVBAR SCROLL EFFECT =================
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // ================= HOME SCROLL REVEAL =================
  const homeRevealElements = document.querySelectorAll(
    ".mission-card, .why-box, .strength-card, .testimonial-card, .step"
  );

  function revealHome() {
    homeRevealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  homeRevealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1s ease";
  });

  window.addEventListener("scroll", revealHome);
  revealHome();

  // ================= CONTACT SCROLL REVEAL =================
  const contactRevealElements = document.querySelectorAll(
    ".contact-box, .strip-card"
  );

  function revealContact() {
    contactRevealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  contactRevealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1s ease";
  });

  window.addEventListener("scroll", revealContact);
  revealContact();

  // ================= PRODUCTS SCROLL REVEAL =================
  const productRevealElements = document.querySelectorAll(
    ".product-card, .quality-card, .category-card, .stat-box"
  );

  function revealProducts() {
    productRevealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  productRevealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";
  });

  window.addEventListener("scroll", revealProducts);
  revealProducts();

  // ================= FILTER BUTTON ACTIVE =================
  const filterButtons = document.querySelectorAll(".filter-buttons button");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ================= PARALLAX SHAPES =================
  const shape1 = document.querySelector(".shape1");
  const shape2 = document.querySelector(".shape2");

  window.addEventListener("mousemove", (e) => {
    if (shape1 && shape2) {
      let x = e.clientX / 50;
      let y = e.clientY / 50;

      shape1.style.transform = `translate(${x}px, ${y}px)`;
      shape2.style.transform = `translate(${-x}px, ${-y}px)`;
    }
  });

  // ================= FLOATING CARDS PARALLAX =================
  const floatingCards = document.querySelectorAll(".floating-card");

  window.addEventListener("mousemove", (e) => {
    floatingCards.forEach((card, index) => {
      let speed = (index + 1) * 0.02;

      let x = (window.innerWidth - e.pageX * speed) / 90;
      let y = (window.innerHeight - e.pageY * speed) / 90;

      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // ================= 3D HOVER EFFECT =================
  const hoverCards = document.querySelectorAll(
    ".mission-card, .strength-card, .testimonial-card, .product-card"
  );

  hoverCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = -(y - rect.height / 2) / 25;
      const rotateY = (x - rect.width / 2) / 25;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });

});