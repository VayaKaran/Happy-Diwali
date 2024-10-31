$(document).ready(function() {
    // Parallax scroll animations
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        $('.lantern').css({
            'transform': 'translateY(' + scroll / 15 + 'px)'
        });

        $('.background-animation').css({
            'background-position': 'center ' + (scroll / 5) + 'px'
        });

        $('.diya-container').css({
            'transform': 'translateY(' + scroll / 10 + 'px)'
        });
    });

    // Button animation using jQuery
    $('#celebrateBtn').hover(
        function() { $(this).addClass('animate__pulse'); },
        function() { $(this).removeClass('animate__pulse'); }
    );
});




$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    // Parallax for lanterns
    $('.lantern').css({
        'transform': 'translateY(' + scroll / 15 + 'px)'
    });

    // Parallax for the background
    $('.background-animation').css({
        'background-position': 'center ' + (scroll / 5) + 'px'
    });

    // Parallax for diya
    $('.diya-container').css({
        'transform': 'translateY(' + scroll / 10 + 'px)'
    });
});
