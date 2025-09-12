function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function toggleDropdown(element) {
  element.classList.toggle("active-dropdown");
}

document.addEventListener("DOMContentLoaded", function () {
  var contact = document.querySelector(".footer-contact");
  if (contact) {
    contact.addEventListener("mouseenter", function () {
      contact.style.color = "#2500f5ff";
    });
    contact.addEventListener("mouseleave", function () {
      contact.style.color = "";
    });
  }
});

function registration() {
  window.location.href = "./registration/registration.html";
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
