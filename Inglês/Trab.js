window.addEventListener('DOMContentLoaded', function() {
    var openingAnimation = document.getElementById('opening-animation');
    setTimeout(function() {
        openingAnimation.classList.add('fade-out');
        setTimeout(function() {
            openingAnimation.style.display = 'none';
        }, 1000);
    }, 4000);
});
function showHiddenContent() {
    var hiddenContent = document.querySelector('.hidden-content');
    var button = document.querySelector('button');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        button.innerHTML = 'Ver Menos';
    } else {
        hiddenContent.style.display = 'none';
        button.innerHTML = 'Ver Mais';
    }
}
window.addEventListener("scroll", function() {
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= content.offsetTop) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
});window.addEventListener("scroll", function() {
    var menu = document.getElementById("menu");
    var content = document.getElementById("content");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= content.offsetTop) {
        menu.classList.add("fixed");
    } else {
        menu.classList.remove("fixed");
    }
});