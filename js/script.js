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

function loading() {
    $(window).on("load", function(){
        $("#loader").delay(300).fadeOut("slow");
        $(".preloader").fadeOut();
    });
};

$('.iframe_close').on('click', function() {
    $(this).closest('.iframe').removeClass('open');
    $(this).closest('.iframe-filmes').removeClass('open');
    $('.overlay').removeClass('open');
});

$('.overlay').on('click', function() {
    $('.iframe').removeClass('open');
    $('.iframe-filmes').removeClass('open');
    $('.overlay').removeClass('open');
    $('.menu').removeClass('open');
});