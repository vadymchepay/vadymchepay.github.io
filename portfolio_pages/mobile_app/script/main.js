 $(document).ready(function () {
     $('.intro_content').addClass('scale');
     $('.connecting_inner').addClass('translateX_left');
     $('.platform_inner .overall-header').addClass('translateX_left');
     $('.platform_list li').each(function (i, el) {
         $(el).addClass('translateX_left')
     });
     $('.enabling_left').addClass('translateX_left');
     $('.enabling_right li').each(function (i, el) {
         $(el).addClass('translateX_right')
     });
     $('.results .wrapper .overall-header').addClass('translateY_bottom');
     $('.results-list_el').each(function (i, el) {
         $(el).addClass('scale')
     });
     $('.lead_image').each(function (i, el) {
         $(el).addClass('scale')
     });
     $('.lead_desc').each(function (i, el) {
         $(el).addClass('translateY_bottom')
     });
     $('.contacts_info').addClass('translateX_left');





     var scroll_to_connecting = $('.connecting').offset().top - 700;
     var scroll_to_platform = $('.platform').offset().top - 700;
     var scroll_to_enabling = $('.enabling').offset().top - 700;
     var scroll_to_results = $('.results').offset().top - 600;
     var scroll_to_leadership = $('.leadership').offset().top - 500;
     var scroll_to_contacts = $('.contacts').offset().top - 700;

     $('.intro_content').transition({
        scale: (1, 1)
     }, 1000, "easeOutQuart")

     $(window).scroll(function () {
         if ($(window).scrollTop() >= scroll_to_connecting) {
             $('.connecting_inner').transition({
                 x: 0
             }, 1000, "easeOutQuart")
         };
         if ($(window).scrollTop() >= scroll_to_platform) {
             $('.platform_inner .overall-header').transition({
                 x: 0
             }, 500, "easeOutQuart");
             $('.platform_list li').each(function (i, el) {
                 setTimeout(function () {
                     $(el).transition({
                         x: 0
                     }, 500, "easeOutQuart")
                 }, 250 * i)
             });

         };
         if ($(window).scrollTop() >= scroll_to_enabling) {
             $('.enabling_left').transition({
                 x: 0
             }, 500, "easeOutQuart");
             $('.enabling_right li').each(function (i, el) {
                 setTimeout(function () {
                     $(el).transition({
                         x: 0
                     }, 500, "easeOutQuart")
                 }, 250 * i)
             });

         };

         if ($(window).scrollTop() >= scroll_to_results) {
             $('.results .wrapper .overall-header').transition({
                 y: 0
             }, 1000, "easeOutQuart");
             $('.results-list_el').each(function (i, el) {
                 $(el).transition({
                     scale: (1, 1)
                 }, 1000, "easeOutQuart")

             });

         };


         if ($(window).scrollTop() >= scroll_to_leadership) {
             $('.lead_image').each(function (i, el) {
                 $(el).transition({
                     scale: (1, 1)
                 }, 1000, "easeOutQuart")

             });
             $('.lead_desc').each(function (i, el) {
                 setTimeout(function () {
                     $(el).transition({
                         y: 0
                     }, 1000, "easeOutQuart")
                 }, 300)
             });

         };

         if ($(window).scrollTop() >= scroll_to_contacts) {
             $('.contacts_info').transition({
                 x: 0
             }, 1000, "easeOutQuart");
         }
     });



     $('.partners-wrp').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true
                 }
    }
             , {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
    }
             , {
                 breakpoint: 544,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
    }

  ]
     });

 });
