// Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const navToggle = document.createElement("div");
  navToggle.classList.add("nav-toggle");
  navToggle.innerHTML = '<i class="fa fa-bars"></i>';
  document.querySelector("header").appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Close mobile navigation menu when a link is clicked
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
