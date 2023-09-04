const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-link');
toggleButton.addEventListener('click', function() {
    for (var i=0; i<navbarLinks.length; i++){
        navbarLinks[i].classList.toggle('active')
    }
});