

// Initialize dropdown manually
      const dropdownTrigger = document.getElementById("servicesDropdown");
      const dropdown = new bootstrap.Dropdown(dropdownTrigger);

      // Optional: toggle dropdown on click
      dropdownTrigger.addEventListener("click", function (e) {
        e.preventDefault(); // prevent jump
        dropdown.toggle();
      });
   