document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById('header');

    // Detect scroll and change header color
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#002e5f'; // Change to desired color
        } else {
            header.style.backgroundColor = 'transparent'; // Initial transparent color
        }
    });
});