document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("#navbarSupportedContent a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            var navbarCollapse = document.getElementById("navbarSupportedContent");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
                console.log("Menú cerrado");
            }
        });
    });
});