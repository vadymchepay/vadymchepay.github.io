window.onload = function () {
    var button = document.querySelectorAll(".responsive, aside .close");
    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            document.querySelectorAll(".screen1 aside")[0].classList.toggle('show');
            document.querySelectorAll(".screen1 .responsive")[0].classList.toggle('hide');
        }
    };
    $('.fancybox').attr('rel', 'media-gallery').fancybox({
        openEffect: 'none'
        , closeEffect: 'none'
        , prevEffect: 'none'
        , nextEffect: 'none'
        , arrows: false
        , helpers: {
            media: {}
            , buttons: {}
        }
    });
    // common
    $('.container > .screen').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn'
        , offset: 300
    });
    // screen 1
    $('.screen1 .launch > h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible-h2 animated zoomInUp'
        , offset: 200
    });
    $('.screen1 .launch > h3, .screen1 .launch > h4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInUp'
        , offset: 200
    });
    // screen 2
    $('.screen2 .picture .box').viewportChecker({
        classToAdd: 'animated smoothlyLeft'
        , offset: 200
    });
    $('.screen2 .centered > h1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInRight'
        , offset: 200
    });
    $('.screen2 .centered > h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft'
        , offset: 200
    });
    // screen 3
    $('.monitor > div').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight'
        , offset: 300
    });
    // screen 4
    $('.screen4 .balls').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rollIn'
        , offset: 300
    });
    $('.screen4 h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible-h2 animated slideInRight'
        , offset: 200
    });
    $('.screen4 h3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft'
        , offset: 200
    });
    $('.screen4 .list li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown'
        , offset: 50
    });
    // screen 5
    $('.screen5 .centered > h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible-h22 animated slideInRight'
        , offset: 200
    });
    $('.screen5 .centered > h3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft'
        , offset: 200
    });
    $('.screen5 li').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomInDown'
        , offset: 100
    });
    // screen 6
    var $Rocket = $('.screen6 .box .after');
    var rLeft = $Rocket.css('left');
    var rTop = $Rocket.css('top');
    var rLeftNum = parseFloat(rLeft, 10);
    var rTopNum = parseFloat(rTop, 10);
    console.log(rLeftNum);
    console.log(rTopNum);
    $(window).scroll(function () {
        var screenOffset = $Rocket.offset().top - $('.screen6').innerHeight();
        var sPos = $(this).scrollTop() - screenOffset;
        if (sPos > 0) {
            $Rocket.css({
                'left': rLeftNum + sPos / 4
                , 'top': rTopNum - sPos / 4
            });
        }
    });
    // screen 7
    $('.screen7 .centered > h2').addClass("hidden").viewportChecker({
        classToAdd: 'visible-h22 animated slideInRight'
        , offset: 200
    });
    $('.screen7 .centered > h3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInLeft'
        , offset: 200
    });
    $('.screen7 .partners img').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rollIn'
        , offset: 200
    });
    if ($('.next').length > 0) {
        $('.next').click(function () {
            var slides = $(this).closest('.grid').find('ul li').length - 1;
            var current = $(this).attr('data-index');
            slides == current ? current = 0 : current++;
            $(this).attr('data-index', current);
            $(this).closest('.grid').find('ul li').removeClass('active');
            $(this).closest('.grid').find('ul li')[current].classList.add('active');
        });
    }
    $('.lang').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(document).on('click', function () {
                $('.lang').click();
            });
        }
        else {
            $(document).off('click');
        }
    });
    $('.subscribe_button').on('click', function (e) {
        e.stopPropagation();
        $(this).closest('.subscribe').find('.subscribe_popup').addClass('show');
        $(document).on('click', function () {
            $('.subscribe_popup').removeClass('show');
            $(document).off('click');
        });
    });
}