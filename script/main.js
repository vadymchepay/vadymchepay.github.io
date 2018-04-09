$(document).ready(function () {
    setTimeout(function () {
        $('.layer').animate({
            opacity: 0
        }, 500, "easeInCubic");
        $('.loader').animate({
            width: 200
            , height: 200
            , marginLeft: -100
            , marginTop: -100
            , borderWidth: 10
            , backgroundColor: "rgba(255, 255, 255, 1)"
        }, 500, "easeOutCirc").transition({
            y: -100
        }, 500, "easeOutCubic");
        setTimeout(function () {
            $('.letter').animate({
                opacity: 1
            }, 500, "easeInExpo");
        }, 1000);
        setTimeout(function () {
            $.fn.animate_Text = function () {
                var string = this.text();
                return this.each(function () {
                    var $this = $(this);
                    $this.html(string.replace(/./g, '<span class="letter">$&</span>'));
                    $this.find('span.letter').each(function (i, el) {
                        setTimeout(function () {
                            if ($(el).text() == " ") {
                                $(el).html('&nbsp;')
                            };
                            $(el).addClass('div_opacity');
                        }, 35 * i);
                    });
                });
            };
            $('.hero__content h1').show();
            $('.hero__content h1').animate_Text();
        }, 2000);
        setTimeout(function () {
           
            $('.socials__el').each(function(i, el){
                setTimeout(function(){
                    $(el).css('opacity', '1').transition({ x: 0 })
                },180*i)
            })
            
        }, 3500)
    }, 700);
    
    $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $(".scroll__button").fadeIn()
            }
            else {
                $(".scroll__button").fadeOut()
            }
        })
        $(".scroll__button").click(function () {
            $("html").animate({
                scrollTop: 0
            }, 500)
        });
    
    $(window).scroll(function(){
        var scroll_to_WID = $('#what__i__do').offset().top - 550;
        if($(window).scrollTop() >= scroll_to_WID){
            $('.typework__item').each(function(i, el){
                setTimeout(function(){
                    $(el).transition({ x: 0 }, 1000, "easeOutQuart")
                },250*i)
            })
        }
        var scroll_to_Skills = $('#skills').offset().top - 550;
        if($(window).scrollTop() >= scroll_to_Skills){
            $('.skill__img').each(function(i, el){
                setTimeout(function(){
                    $(el).transition({opacity: 1}, 500, "easeOutQuart")
                },250*i)
            })
        }
    })
});