Template.home.onRendered(function() {
    $('.defaultHeader').removeClass('minimized dark')
    $.Pages.init();
    $('[data-pages="parallax"]').each(function() { // 499
        var $parallax = $(this) // 500
        $parallax.parallax($parallax.data()) // 501
    })
})
