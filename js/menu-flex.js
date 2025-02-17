$(function() {

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();


    //Menú Responsive
    // Calculamos el ancho e la página

    var ancho = $(window).width(),
        enlaces = $('#enlaces'),
        btnMenu = $('#btn-menu'),
        redesSoc = $('#redes-sociales'),
        icono = $('#btn-menu .icono-menu');

    if (ancho < 700) {
        enlaces.hide();
        redesSoc.hide();
        icono.addClass('fa-bars');
    }

    btnMenu.on('click', function(e) {
        enlaces.slideToggle();
        redesSoc.slideToggle();
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');

    });

    $(window).on('resize', function() {
        if ($(this).width() > 1023) {
            enlaces.show();
            redesSoc.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            redesSoc.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }

    });
});