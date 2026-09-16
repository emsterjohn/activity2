/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

  });


  /* Close menu when a navigation link is clicked */

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuToggle.textContent = "☰";

    });

  });


  /* Close menu when clicking outside */

  document.addEventListener("click", (event) => {

    const clickedInsideMenu =
      navLinks.contains(event.target);

    const clickedMenuButton =
      menuToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedMenuButton &&
      navLinks.classList.contains("open")
    ) {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuToggle.textContent = "☰";

    }

  });

}


/* ================= AUTOMATIC COPYRIGHT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}