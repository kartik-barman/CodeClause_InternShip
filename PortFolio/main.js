$(document).ready(function () {
    // Disable right-click
    $(document).on('contextmenu', function (e) {
        e.preventDefault();
    });

    // Disable text selection
    $(document).on('selectstart', function (e) {
        e.preventDefault();
    });

    // Disable keyboard shortcuts (Ctrl + C, Ctrl + X, Ctrl + U, etc.)
    $(document).on('keydown', function (e) {
        // Disable Ctrl key combinations
        if (e.ctrlKey) {
            if (e.which === 67 || e.which === 88 || e.which === 85) { // C, X, U
                e.preventDefault();
            }
        }
        // Disable F12 (Developer Tools)
        if (e.which === 123) {
            e.preventDefault();
        }
    });

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});
