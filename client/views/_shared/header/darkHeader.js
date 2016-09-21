Template.darkHeader.onRendered(function() {
    $('[data-pages="defaultHeader-toggle"]').on('click touchstart', function(e) { // 366
        e.preventDefault(); // 367
        var el = $(this) // 368
            // 369
        var header = el.attr('data-pages-element'); // 370
        $('body').toggleClass('menu-opened'); // 371
        $('[data-pages="defaultHeader-toggle"]').toggleClass('on'); // 372
        // 373
    });
})
