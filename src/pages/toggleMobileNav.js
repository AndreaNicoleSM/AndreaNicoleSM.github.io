
// Mobile Nav Menu
function ToggleMobileNav() {
    var hamburgerMenu = document.getElementById("hamburger")
    var closeButton = document.getElementById("close-btn")
    var mobileNavMenu = document.getElementById("mobile-nav-menu")
    
    
    hamburgerMenu.classList.toggle("inactive")
    mobileNavMenu.classList.toggle("inactive")
    closeButton.classList.toggle("inactive")
  }

  export default ToggleMobileNav