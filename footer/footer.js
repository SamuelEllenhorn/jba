// No advanced JS needed for this footer, but here's a simple script to highlight the phone number on hover

document.addEventListener("DOMContentLoaded", function () {
  var contact = document.querySelector(".footer-contact");
  if (contact) {
    contact.addEventListener("mouseenter", function () {
      contact.style.color = "#f57c00";
    });
    contact.addEventListener("mouseleave", function () {
      contact.style.color = "";
    });
  }
});
