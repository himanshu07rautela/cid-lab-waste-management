document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the navigation menu visibility
    function toggleNav() {
        var nav = document.querySelector('nav');
        nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
    }

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listener for the mobile navigation button
    var mobileNavButton = document.getElementById('mobileNavButton');
    if (mobileNavButton) {
        mobileNavButton.addEventListener('click', function () {
            toggleNav();
        });
    }

    // Event listeners for each navigation link
    var navLinks = document.querySelectorAll('nav a');
    if (navLinks) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent the default link behavior
                toggleNav(); // Hide the navigation menu
                var targetSection = link.getAttribute('href').substring(1); // Get the target section ID
                scrollToSection(targetSection); // Scroll to the target section
            });
        });
    }
});
