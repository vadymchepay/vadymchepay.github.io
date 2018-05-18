  $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.sidenav li').each(function(i, el){
          $(el).click(function(){
              $('.sidenav').sidenav('close')
          })
      })
      $('.carousel').carousel({
          fullWidth: true
          , indicators: true
      });
      var testCarous = $('.testimonals_carousel .testimonals_carousel_container .carousel');
      testCarous.carousel({
          fullWidth: true
          , indicators: false
      });
      $('.control_prev').click(function () {
          testCarous.carousel('prev')
      });
      $('.control_next').click(function () {
          testCarous.carousel('next')
      });
      $('.top_button').click(function () {
          $('html').animate({
              scrollTop: 0
          }, 500)
      })
      var catering = $('.catering').offset().top;
      $('.carousel-item .arrow_down').each(function (i, el) {
          $(el).click(function () {
              $('html, body').animate({
                  scrollTop: catering
              }, 700)
          })
      });
      
      
  });