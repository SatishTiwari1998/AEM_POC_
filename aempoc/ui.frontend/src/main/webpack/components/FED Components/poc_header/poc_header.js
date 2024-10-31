document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector(".custom-toggler");
    const navbar = document.getElementById("navbarSupportedContent");

    toggler.addEventListener("click", function() {
        if (navbar.classList.contains("collapse")) {
            navbar.classList.remove("collapse");
            toggler.setAttribute("aria-expanded", "true");
        } else {
            navbar.classList.add("collapse");
            toggler.setAttribute("aria-expanded", "false");
        }
    });
});