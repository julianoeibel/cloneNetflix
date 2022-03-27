$(".icon").on("click", function(){
    $(this).toggleClass("active");
    $('.desktop-nav').toggleClass("open");
    $('.overlay').toggleClass("open");
});


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
        $(".carrosel").css("display", "block");
        mostrarIframeFilmes();
        mostrarIframeSeries();
        closeIframe();
    });
};


function closeIframe(){
    $('.iframe_close').on('click', function() {
        $('.iframe').removeClass('open');
        $('.iframe-filmes').removeClass('open');
        $('.overlay').removeClass('open');
    });
    
 }

 
$('.overlay').on('click', function() {
    $('.iframe').removeClass('open');
    $('.iframe-filmes').removeClass('open');
    $('.overlay').removeClass('open');
    $('.menu').removeClass('open');
    $(".icon").removeClass("active");
    $('.desktop-nav').removeClass("open");
    $('.overlay').removeClass("open");
});



/*--- Funções Aparecer Filmes e Aparecer Séries ---*/

function mostrarIframeSeries(){
    $(".iframes-series").append(`<section class="iframe">
    <div class="trailer-iframe">
        <iframe src="https://www.youtube.com/embed/oVzVdvGIC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="iframe-info">
        <h1>Peak Blinders</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <div class="trailer-iframe">
        <iframe src="https://www.youtube.com/embed/Yj0l7iGKh8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
    <div class="iframe-info">
        <h1>The Flash</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe  src="https://www.youtube.com/embed/X4bF_quwNtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Lucifer</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe  src="https://www.youtube.com/embed/gcTkNV5Vg1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Game of Thrones</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/aRHeECoV8Vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Pacificador</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/apltEQy8RzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Sobrenatural</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/SveaGIlBL2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Rick & Morty</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/IKtL4IW6G0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>A Lista Negra</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/C-Wi9qu--0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Gavião Arqueiro</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/iS5xXr-GOnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>La Casa de Papel</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe src="https://www.youtube.com/embed/b9EkMc79ZSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Stranger Things</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_jgYEYERYFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Os Simpsons</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>`);
 }

 function mostrarIframeFilmes(){
    $(".iframes-filmes").append(`<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/miycJHABS1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Projeto Adam</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/rsQEor4y2hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>O Batman</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/dVTAcGw6H9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Alerta Vermelho</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/jr18d7HDuMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>King'sMan: A Origem</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/PJza3ZaFeAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Eternos</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/BAjP9eBskcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Homem-Aranha: Sem Volta para Casa </h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/9ix7TUGVYIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Matrix 4: Ressurections</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/AfHiUtxrmiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Shang-Chi e a Lendas dos Dez Anéis</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yzWWSKn_D14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Mortal Kombat</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/CMynkj1qAYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Free Guy</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/PMszoQrOfbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Duna</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>
<section class="iframe-filmes">
    <iframe src="https://www.youtube.com/embed/t_ULBP6V9bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="iframe-info">
        <h1>Os Vingadores: Guerra Infinita</h1>
    </div>
    <span class="iframe_close">&times;</span>
</section>`);
 }
