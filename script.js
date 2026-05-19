// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn && navLinks){

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}

// ================= CLOSE MENU ON LINK CLICK =================

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if(navLinks){

      navLinks.classList.remove("active");

    }

  });

});

// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

if(navbar){

  window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

      navbar.classList.add("scrolled");

    }else{

      navbar.classList.remove("scrolled");

    }

  });

}

// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
".mission-card, .why-box, .strength-card, .testimonial-card, .step"
);

function revealOnScroll(){

  revealElements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= PARALLAX EFFECT =================

window.addEventListener("mousemove", (e) => {

  const shape1 = document.querySelector(".shape1");
  const shape2 = document.querySelector(".shape2");

  let x = e.clientX / 50;
  let y = e.clientY / 50;

  shape1.style.transform =
  `translate(${x}px, ${y}px)`;

  shape2.style.transform =
  `translate(${-x}px, ${-y}px)`;

});


// ================= HOVER TILT EFFECT =================

const cards = document.querySelectorAll(
".mission-card, .strength-card, .testimonial-card"
);

cards.forEach((card) => {

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

/*contactus*/
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
".contact-box, .strip-card"
);

function revealOnScroll(){

  revealElements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*products*/
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
".product-card, .quality-card, .category-card, .stat-box"
);

function revealOnScroll(){

  revealElements.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = "1";
      el.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach((el) => {

  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= FILTER BUTTON ACTIVE =================

const filterButtons = document.querySelectorAll(
".filter-buttons button"
);

filterButtons.forEach((btn) => {

  btn.addEventListener("click", () => {

    filterButtons.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");

  });

});


// ================= PARALLAX EFFECT =================

window.addEventListener("mousemove", (e) => {

  const cards = document.querySelectorAll(".floating-card");

  cards.forEach((card, index) => {

    let speed = (index + 1) * 0.02;

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    card.style.transform =
    `translate(${x}px, ${y}px)`;

  });

});


// ================= PRODUCT HOVER 3D =================

const productCards = document.querySelectorAll(
".product-card"
);

productCards.forEach((card) => {

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
      translateY(-10px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "perspective(1000px) rotateX(0) rotateY(0)";

  });

});