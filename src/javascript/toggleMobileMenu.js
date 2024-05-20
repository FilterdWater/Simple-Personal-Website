document.addEventListener("DOMContentLoaded", function () {
  const btnMobileMenu = document.getElementById("btnMobileMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = mobileMenu.querySelectorAll("a"); // Select all links within the mobile menu
  const body = document.body;

  btnMobileMenu.addEventListener("click", function () {
    // Toggle the 'hidden' class, aka open/close the mobile menu
    mobileMenu.classList.toggle("hidden");

    // Toggle the 'no-scroll' class aka overflow-hidden on the body so the user cant scroll when the mobile menu is open
    if (mobileMenu.classList.contains("hidden")) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }
  });

  // Add click event listener to each link within the mobile menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Close the mobile menu when a link is clicked
      // this looks better then changing page and seeing the animation play behind the mobile menu
      mobileMenu.classList.add("hidden");

      // Remove the 'no-scroll' class from the body
      body.classList.remove("overflow-hidden");
    });
  });
});
