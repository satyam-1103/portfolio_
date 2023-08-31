// Scroll Reveal JS

ScrollReveal().reveal(".home_name", {
  delay: 20,
  duration: 3000,
  opacity: 0,
  distance: "100%",
  origin: "top",
  reset: true,
});

ScrollReveal().reveal("#home", {
  delay: 75,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "top",
  reset: true,
});

ScrollReveal().reveal(".skills__group", {
  delay: 125,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "left",
  reset: true,
});

ScrollReveal().reveal("#work", {
  delay: 175,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "right",
  reset: true,
});

ScrollReveal().reveal("#contact", {
  delay: 215,
  duration: 1500,
  opacity: 0,
  distance: "50%",
  origin: "bottom",
  reset: true,
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// ====================== SCROLL SECTION ACTIVE LINK ====================

function onScroll(event) {
  const sections = document.querySelectorAll("section");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  for (let i = 0; i < sections.length; i++) {
    const currLink = document.querySelector(`nav a[href="#${sections[i].id}"]`);
    const currSection = sections[i];
    const sectionTop = currSection.offsetTop - 50;
    const sectionBottom = sectionTop + currSection.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
      currLink.classList.add("active-link");
    } else {
      currLink.classList.remove("active-link");
    }
  }
}

window.addEventListener("scroll", onScroll);

// LIGHT THEME

const themeButton = document.getElementById("change_theme");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(lightTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
