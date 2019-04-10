$(document).ready(function () {

    var screenWidth = $(window).innerWidth();
    console.log(screenWidth);
    
    $('#learn-more').click(function () {
        $('body').removeClass('blocked-page');
        $('html, body').animate({
                scrollTop: $('section').eq(0).offset().top
            }, 500);
    });

    if (screenWidth < 769) {
        $('#testimonals').removeClass('testimonals-container');
        $('#testimonals').addClass('testimonals-carousel')
    }

    $('.testimonals-carousel').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1
    });
    
    $('.section-footer-button').each(function (i, el){
        $(el).click(function(){
            var s = i+1;
            $('html, body').animate({
                scrollTop: $('section').eq(s).offset().top
            }, 500);
        })
    });

})
