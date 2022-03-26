$('.owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        769:{
            items:5
        },
        1441:{
            items:8
        }
    }
})

$(".item-series").click(function() {
    $('.iframe').eq($(".item-series").index($(this))).toggleClass('open');
    $('.overlay').addClass('open');
});

$(".item-filmes").click(function() {
    $('.iframe-filmes').eq($(".item-filmes").index($(this))).toggleClass('open');
    $('.overlay').addClass('open');
});
/*
$(".item-series").click(function() {
    if ($(window).width() < 426) {
        $('.iframe').eq($(".item-series").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 769) {
        $('.iframe').eq($(".item-series").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 1025) {
        $('.iframe').eq($(".item-series").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 1441) {
        $('.iframe').eq($(".item-series").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else {
        $('.iframe').eq($(".item-series").index($(this))-8).toggleClass('open');
        $('.overlay').addClass('open');
     }
});

$(".item-filmes").click(function() {
    if ($(window).width() < 426) {
        $('.iframe-filmes').eq($(".item-filmes").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 769) {
        $('.iframe-filmes').eq($(".item-filmes").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 1025) {
        $('.iframe-filmes').eq($(".item-filmes").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else if ($(window).width() < 1441) {
        $('.iframe-filmes').eq($(".item-filmes").index($(this))-6).toggleClass('open');
        $('.overlay').addClass('open');
     } else {
        $('.iframe-filmes').eq($(".item-filmes").index($(this))-8).toggleClass('open');
        $('.overlay').addClass('open');
     }
});
*/

$('.iframe_close').on('click', function() {
    $(this).closest('.iframe').removeClass('open');
    $(this).closest('.iframe-filmes').removeClass('open');
    $('.overlay').removeClass('open');
});

$('.overlay').on('click', function() {
    $('.iframe').removeClass('open');
    $('.overlay').removeClass('open');
    $('.menu').removeClass('open');
});

