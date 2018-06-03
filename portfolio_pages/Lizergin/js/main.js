$(document).ready(function () {
    document.body.onload = function () {
        setTimeout(function () {
            if (!$('.preloader').hasClass('done')) {
                $('.preloader').addClass('done')
            }
        }, 1000)
    };
    $('.sidenav').sidenav();
    $('.wach_mov').hide();
    var activePoint = 1;
    var volChange;
    //function for sections sliding while scroll
    var introHeight = $('.intro_content').innerHeight();
    var aboutHeight = $('.about').innerHeight();
    var trigger_1 = false;
    var sPos = 0;
    var coverBottom = $('.intro_cover').innerHeight() - sPos;
    var introContentY = $('.intro_content').offset().top;
    var introContentX = $('.intro_content').offset().left;
    var introContentWidth = $('.intro_content').width();
    var aboutPosY = $('.about').offset().top;
    var aboutPosX = $('.about').offset().left;
    var aboutWidth = introContentWidth;
    $('.about').css({
        'position': 'fixed',
        'top': aboutPosY,
        'left': aboutPosX,
        'width': aboutWidth
    });
    $('.intro_content').css({
        'position': 'fixed',
        'top': introContentY,
        'left': introContentX,
        'width': introContentWidth,
        'height': $('.intro').innerHeight()
    });
    $('.intro').append('<div class="shadow"></div>');
    $('.shadow').css({
        'height': $('.intro_content').innerHeight() + $('.about').innerHeight()
    });

    $('.exp_btn').each(function (i, el) {
        $(el).click(function () {
            if (coverBottom > 0) {
                var expBtnInt = setInterval(function () {
                    sPos += 100;
                    $(window).scrollTop(sPos);
                    $('.intro_cover').animate({
                        top: -sPos
                    }, 50, 'linear');
                    coverBottom = $('.intro_cover').innerHeight() - sPos;
                    if (coverBottom < 0) {
                        clearInterval(expBtnInt);
                    }
                }, 1);
            };
        });
    });
    $(window).scroll(function () {
        sPos = $(this).scrollTop();
        coverBottom = $('.intro_cover').innerHeight() - sPos;
        if (coverBottom > 0) {
            $('.intro').css({
                'top': sPos + 'px'
            });
        };
        $('.intro_cover').css({
            'top': -sPos + 'px'
        });
        if (coverBottom >= -50 && coverBottom <= 0) {
            coverBottom = 0;
        };
        if (coverBottom == 0) {
            $('.intro').css({
                'position': 'relative'
            });
            $('.about').css({
                'position': 'relative',
                'top': sPos,
                'left': 0
            });
        };
        if (coverBottom <= 0) {
            trigger_1 = true;
            $('.wach_mov').fadeIn();
            var contactsTop = $('.contacts').offset().top;
            var aboutTextIh = $('.about_text').innerHeight() + $('.contacts h1').innerHeight() / 2.5;
            $('.map').css('top', '0');
            if (contactsTop - sPos < aboutTextIh) {
                var nTop = sPos / 18;
                $('.map').css('top', nTop);
            };
            volChange = ($('.about').offset().top - sPos) / 1000;
            bgPlayer.volume(volChange);
            if (wachMovTrig) {
                slidePlayer[activeIndex].volume(volChange);
                if (volChange <= 0) {
                    slidePlayer[activeIndex].pause();
                    volChange = 0;
                }
            };
            if (volChange <= 0) {
                bgPlayer.pause();
                volChange = 0;
            } else if (volChange >= 0) {
                bgPlayer.play();
            }
        } else {
            trigger_1 = false;
            $('.wach_mov').fadeOut();
            $('.about').css({
                'position': 'fixed',
                'top': aboutPosY,
                'left': aboutPosX,
                'width': aboutWidth
            });
            if (wachMovTrig) {
                wachMovTrig = false;
                slidePlayer[activeIndex].pause();
                $('.video_slider').removeClass('move_left');
            };
        };
    });
    // Intro cover slider
    var sliderInt = 1;
    $(function () {
        count = $('.cover_content_slider_container .cover_content_slide').length;
        $('.cover_content_slider_container .cover_content_slide').hide();
        $('#slide1').fadeIn(1000);
    });

    function next() {
        newSlide = sliderInt + 1;
        showSlide(newSlide);
    }

    function showSlide(id) {
        if (id > count) {
            id = 1;
        } else if (id < 1) {
            id = count;
        }
        $('.cover_content_slider_container .cover_content_slide').hide();
        $('#slide' + id).fadeIn(1000);
        sliderInt = id;
    }
    setInterval(function () {
        next();
    }, 5000);


    //Wach Movies function
    var wachMovTrig = false;
    $('.wach_mov').click(function () {
        wachMovTrig = true;
        $('.video_slider').addClass('move_left');
        videoSlide(activeIndex);
    });
    $('.close_btn').click(function () {
        wachMovTrig = false;
        $('.video_slider').removeClass('move_left');
    });
    //Video Slider
    var slide = $(".video_slide");
    var viewWidth = $(".video_slide").width();
    var sliderInner = $(".video_slider_container");
    var childrenNo = sliderInner.children().length;
    sliderInner.width(viewWidth * childrenNo);
    $('.controls .prev').hide();

    function setWidth() {
        slide.each(function () {
            $(this).width(viewWidth);
            $(this).css("left", viewWidth * $(this).index());
        });
    }
    var videoActive = $('.video_slider_container .active');
    var activeIndex = videoActive.index();
    console.log(activeIndex);

    function buttonFade() {
        if (activeIndex == 0) {
            $('.controls .prev').fadeOut();
        } else {
            $('.controls .prev').fadeIn();
        };
        if (activeIndex == childrenNo - 1) {
            $('.controls .next').fadeOut();
        } else {
            $('.controls .next').fadeIn();
        };
    };

    function setActive(active) {
        sliderInner.css("transform", "translateX(-" + active * viewWidth + "px) translateZ(0)");
        $('.video_slider_container .active').removeClass("active");
        $(".video_slider_container .video_slide").eq(active).addClass("active");
    };
    $('.controls .prev').click(function () {
        activeIndex--;
        buttonFade()
        setActive(activeIndex);
        videoSlide(activeIndex);
    });
    $('.controls .next').click(function () {
        activeIndex++;
        buttonFade()
        setActive(activeIndex);
        videoSlide(activeIndex);
    });
    setWidth();



    //Video Slider Mobile
    var m_slide = $(".m_video_slide");
    var m_viewWidth = $(".m_video_slide").width();
    var m_sliderInner = $(".m_video_slider_container");
    var m_childrenNo = m_sliderInner.children().length;
    m_sliderInner.width(m_viewWidth * m_childrenNo);
    $('.controls .prev').hide();

    function m_setWidth() {
        m_slide.each(function () {
            $(this).width(m_viewWidth);
            $(this).css("left", m_viewWidth * $(this).index());
        });
    }
    var m_videoActive = $('.m_video_slider_container .active');
    var m_activeIndex = m_videoActive.index();
    console.log(m_activeIndex);

    function buttonFade() {
        if (m_activeIndex == 0) {
            $('.controls .prev').fadeOut();
        } else {
            $('.controls .prev').fadeIn();
        };
        if (m_activeIndex == childrenNo - 1) {
            $('.controls .next').fadeOut();
        } else {
            $('.controls .next').fadeIn();
        };
    };

    function m_setActive(active) {
        m_sliderInner.css("transform", "translateX(-" + active * m_viewWidth + "px) translateZ(0)");
        $('.m_video_slider_container .active').removeClass("active");
        $(".m_video_slider_container .m_video_slide").eq(active).addClass("active");
    };
    $('.controls .prev').click(function () {
        m_activeIndex--;
        buttonFade()
        m_setActive(m_activeIndex);
        videoSlide(m_activeIndex);
    });
    $('.controls .next').click(function () {
        m_activeIndex++;
        buttonFade()
        m_setActive(m_activeIndex);
        videoSlide(m_activeIndex);
    });
    m_setWidth();
});

// Map API 
var locations = [{
        coordinates: {
            lat: 40.6971494,
            lng: -74.2598643
        }
    }, {
        coordinates: {
            lat: 51.461989,
            lng: -0.6104095
        }
    }
    , {
        coordinates: {
            lat: 52.5065133,
            lng: 13.1445555
        }
    }, {
        coordinates: {
            lat: 29.6688758,
            lng: 29.4339315
        }
    }, {
        coordinates: {
            lat: 3.1385036,
            lng: 101.616949
        }
    }, {
        coordinates: {
            lat: 35.6732619,
            lng: 139.5703037
        }
    }];
var marker = [];
var markers = [];
var icons = [];
var contPrev = $('.contacts_controls .prev');
var contNext = $('.contacts_controls .next');

function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 2,
        center: {
            lat: 28.7328,
            lng: 303.6587
        },
        styles: [
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "landscape.natural",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "landscape.natural",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
      }
    ]
  }
            , {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
            , {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
      }
    ]
  }
]
    };
    var myMap = new google.maps.Map(element, options);
    var i;
    for (i = 0; i < locations.length; i++) {
        marker[i] = new google.maps.Marker({
            position: locations[i].coordinates,
            map: myMap,
            icon: 'img/map_pointer_small.png'
        });
        google.maps.event.addListener(marker[i], 'click', (function (marker, i) {
            return function () {
                console.log(marker);
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon('img/map_pointer_small.png');
                }
                marker[i].setIcon('../img/map_pointer.png');
                for (var l = 0; l < markers.length; l++) {
                    icons[l] = markers[l].icon;
                }
                activePoint = icons.indexOf('img/map_pointer.png');
                setContActive(activePoint);
                console.log('actPoint = ' + activePoint);
            };
        })(marker, i));
        markers.push(marker[i]);

    };
    marker[1].setIcon('img/map_pointer.png');

};
console.log(marker);
activePoint = 1;


//contacts slider
var windowWidth = $(window).width();
console.log('ww = ' + windowWidth);
if (windowWidth > 560) {
    var contSlide = $(".slide");
    var viewContWidth = $(".slider").width();
    var contSliderInner = $(".slider-inner");
    var contChildrenNo = contSliderInner.children().length;
    contSliderInner.width(viewContWidth * contChildrenNo);
    contSliderInner.css("transform", "translateX(-" + viewContWidth / 3 + "px) translateZ(0)");


    function setContWidth() {
        contSlide.each(function () {
            $(this).width(viewContWidth / 3);
            $(this).css("left", viewContWidth / 3 * $(this).index() + viewContWidth / 3);
        });
    }

    function setContActive(index) {

        contSliderInner.css("transform", "translateX(-" + index * viewContWidth / 3 + "px) translateZ(0)");
        $(".slider-inner .active").removeClass("active");
        $(".slider-inner .slide").eq(index).addClass("active");
    }
    setContWidth();
} else {
    var contSlide = $(".slide");
    var viewContWidth = $(".slider").width();
    var contSliderInner = $(".slider-inner");
    var contChildrenNo = contSliderInner.children().length;
    contSliderInner.width(viewContWidth * contChildrenNo);
    contSliderInner.css("transform", "translateX(-" + viewContWidth + "px) translateZ(0)");


    function setContWidth() {
        contSlide.each(function () {
            $(this).width(viewContWidth);
            $(this).css("left", viewContWidth * $(this).index());
        });
    }

    function setContActive(index) {

        contSliderInner.css("transform", "translateX(-" + index * viewContWidth + "px) translateZ(0)");
        $(".slider-inner .active").removeClass("active");
        $(".slider-inner .slide").eq(index).addClass("active");
    }
    setContWidth();
};
contPrev.click(function () {
    if (activePoint == 0) {
        activePoint = marker.length - 1;
        setContActive(activePoint);
        marker[activePoint].setIcon('img/map_pointer.png');
        marker[0].setIcon('img/map_pointer_small.png');
    } else {
        activePoint--;
        setContActive(activePoint);
        marker[activePoint].setIcon('img/map_pointer.png');
        marker[activePoint + 1].setIcon('img/map_pointer_small.png');
    };


});
contNext.click(function () {
    if (activePoint == marker.length - 1) {
        activePoint = 0;
        setContActive(activePoint);
        marker[activePoint].setIcon('img/map_pointer.png');
        marker[marker.length - 1].setIcon('img/map_pointer_small.png');
    } else {
        activePoint++;
        setContActive(activePoint);
        marker[activePoint].setIcon('img/map_pointer.png');
        marker[activePoint - 1].setIcon('img/map_pointer_small.png');
    }
});



$(window).resize(function () {
    setContWidth();
});
//Video API
var trigger_2 = false;
var trigger_3 = false;
var playedTrig = false
$(".video-js").each(function (i, el) {
    $(el).mousemove(function () {
        trigger_2 = true;
        trigger_3 = true;
        playButton(i);
    });
});

function playButton(p) {
    if (trigger_3) {
        $('.big-play-button').eq(p).addClass('play-button-show');
        var hb = setTimeout(function () {
            $('.big-play-button').eq(p).removeClass('play-button-show');
        }, 1500);
        $('.big-play-button').eq(p).mouseover(function () {
            $('.big-play-button').eq(p).addClass('play-button-show');
            clearTimeout(hb);
        });
    };
};
var bgPlayer;
videojs("#bg-video").ready(function () {
    bgPlayer = this;
    bgPlayer.play();
    bgPlayer.volume(0);
    $('.wach_mov').click(function () {
        bgPlayer.pause();
    });
    $('.close_btn').click(function () {
        bgPlayer.play();
    });
    if (trigger_2) {
        bgPlayer.removeClass('vjs-user-inactive');
        bgPlayer.addClass('vjs-user-active');
    };
    $('.big-play-button').eq(0).click(function () {
        if (bgPlayer.paused()) {
            bgPlayer.play();
        } else {
            bgPlayer.pause();
        };
    });
});
var playerId = [];
var slidePlayer = [];
for (var x = 0; x < $('.video_slide .video-js').length; x++) {
    playerId[x] = $('.video_slide .video-js').eq(x).attr('id');
    slidePlayer[x] = 'slidePlayer_' + x;
};

function videoSlide(y) {
    slidePlayer[y] = videojs(playerId[y]);
    slidePlayer[y].volume(0.7);
    $('.prev').click(function () {
        slidePlayer[y].pause();
    });
    $('.next').click(function () {
        slidePlayer[y].pause();
    });
    $('.close_btn').click(function () {
        slidePlayer[y].pause();
    });
    if (trigger_2) {
        slidePlayer[y].removeClass('vjs-user-inactive');
        slidePlayer[y].addClass('vjs-user-active');
    };
    $('.video_slide .big-play-button').eq(y).click(function () {
        if (slidePlayer[y].paused()) {
            slidePlayer[y].play();
            $('.video_slide-descr').css({
                'display': 'none'
            });
        } else {
            slidePlayer[y].pause();
            $('.video_slide-descr').css({
                'display': 'flex'
            });
        };
    });
};
