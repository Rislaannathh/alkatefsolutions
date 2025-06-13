document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("customNavbarToggler");
    const navbarContent = document.getElementById("navbarContent");

    toggler.addEventListener("click", function () {
      // Toggle class to show/hide menu
      navbarContent.classList.toggle("show");

      // Optionally update aria-expanded
      const isExpanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", !isExpanded);
    });
  });