document.addEventListener("DOMContentLoaded", function () {
  function setupMobileMenu() {
    const btnMobileMenu = document.getElementById("btnMobileMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    const headerLogo = document.getElementById("headerLogo");
    const body = document.body;

    if (!btnMobileMenu || !mobileMenu) return;

    // Remove previous event listeners to avoid unexpected & unacounted behaviour from happening
    btnMobileMenu.removeEventListener("click", toggleMobileMenu);
    btnMobileMenu.addEventListener("click", toggleMobileMenu);

    // Attach click event listener to each link within the mobile menu
    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.removeEventListener("click", closeMobileMenuOnClick);
      link.addEventListener("click", closeMobileMenuOnClick);
    });
    // Attach click event listener to top left logo / title
    headerLogo.removeEventListener("click", closeMobileMenuOnClick);
    headerLogo.addEventListener("click", closeMobileMenuOnClick);
  }

  function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const body = document.body;
    // Toggle the 'hidden' class, aka open/close the mobile menu
    mobileMenu.classList.toggle("hidden");

    // Toggle the 'no-scroll' class aka overflow-hidden on the body so the user cant scroll when the mobile menu is open
    if (mobileMenu.classList.contains("hidden")) {
      body.classList.remove("overflow-hidden");
      body.classList.remove("touch-none");
    } else {
      body.classList.add("overflow-hidden");
      body.classList.add("touch-none");
    }
  }

  function closeMobileMenuOnClick() {
    const mobileMenu = document.getElementById("mobileMenu");
    const body = document.body;
    // Close the mobile menu when a link is clicked
    // this looks better than changing page and seeing the animation play behind the mobile menu
    mobileMenu.classList.add("hidden");

    // Remove the 'no-scroll' class from the body
    body.classList.remove("overflow-hidden");
    body.classList.remove("touch-none");
  }

  // Initial setup
  setupMobileMenu();

  // Re-apply setup after page transitions
  document.addEventListener("astro:page-load", setupMobileMenu);
});
// code comments for myself me very new to JS
