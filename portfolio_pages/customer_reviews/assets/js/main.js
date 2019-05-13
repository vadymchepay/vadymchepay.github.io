$(document).ready(function () {
    var formPos = $("#page-form");
    var partnerBtn = $(".become_partner");
    var resellind = $("#reselling");
    var localization = $("#localization");
    var counter = 0;
    var valError = false;
    var basicSwicher = $("#swich-basic");
    var professionalSwicher = $("#swich-professional");
    var location = window.location.href;
    var titleArrow = true;
    

    function ScrollToForm() {
        var $scroll_to_form = formPos.offset().top - 50;
        $('html, body').animate({
            scrollTop: $scroll_to_form
        }, 1200);

    }

    function swichBasic() {
        if (basicSwicher.hasClass("active")) {
            console.log(active);
        } else {
            professionalSwicher.removeClass("active");
            basicSwicher.addClass("active");
            $(".mobile-basic").css("display", "block");
            $(".mobile-professional").css("display", "none");

        }
    }

    function swichProfessional() {
        if (professionalSwicher.hasClass("active")) {
            console.log(active);
        } else {
            basicSwicher.removeClass("active");
            professionalSwicher.addClass("active");
            $(".mobile-professional").css("display", "block");
            $(".mobile-basic").css("display", "none");

        }
    }

    function validateCheckBox() {
        if (resellind.prop("checked")) {
            counter += 1;
        }
        if (localization.prop("checked")) {
            counter += 1;
        }

    }

    function removeValidatonMessage() {
        $("#validationError").css('display', 'none');
        valError = false;
    }

    $('input[type="checkbox"]').click(function () {
        if (valError) {
            removeValidatonMessage();
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".header-bar").addClass("scrolled")
        } else {
            $(".header-bar").removeClass("scrolled")
        }
    });


    $(".nav-item").each(function () {
        var itemId;
        itemId = $(this).attr("id");
        if (location.includes(itemId)) {
            $(this).addClass("active");
        } else if (location.includes("boost-sales") || location.includes("seo") || location.includes("customer-engagement") || location.includes("customer-loyalty")) {
            $("#features").addClass("active");
        } else {
            $(this).removeClass("active");
        }
    })

    document.querySelector(".nav-toggle")
        .addEventListener("click", function () {
            this.classList.toggle("active");
            document.querySelector(".mobile-nav").classList.toggle("nav_open");
            document.querySelector(".header-bar").classList.toggle("mobile-nav-open");
            document.querySelector("body").classList.toggle("no_scroll");
        });

    document.querySelector(".mobile-item.sub")
        .addEventListener("click", function () {
            this.classList.toggle("open_sub");
        });


    $(".features-title").click(function () {
        $(".fetures-table").slideToggle();
        if (titleArrow) {
            $(".shevron-up-icon").addClass("closed");
            titleArrow = false;
        } else {
            $(".shevron-up-icon").removeClass("closed");
            titleArrow = true;
        }

    })
    basicSwicher.click(function () {
        swichBasic();
    });
    professionalSwicher.click(function () {
        swichProfessional();
    });


    partnerBtn.click(function () {
        ScrollToForm()
    });





    // FORM SUBMIT

    $("#partners-form").submit(function (e) {
        e.preventDefault();
        validateCheckBox();

        if (counter > 0) {
            $(".sending-overlay").css('display', 'flex');
            var form = $(this).serializeArray();

            var formJSON = {};
            for (var i = 0; i < form.length; i++) {
                formJSON[form[i].name] = form[i].value;
            }
            $(this).trigger('reset');

            const API_URL = "https://z4jhozi8lc.execute-api.us-east-1.amazonaws.com/v1/partners-form";

            $.ajax({
                contentType: 'application/json',
                data: JSON.stringify(formJSON),
                dataType: 'json',
                type: 'POST',
                url: API_URL,
                success: function (data) {
                    console.log(data);
                    onSuccess();
                },
                error: function (xhr, str) {
                    console.log('Error: ' + xhr.responseCode);
                }
            });
        } else {
            $("#validationError").css('display', 'inline-block');
            valError = true;
        }


    });

    function onSuccess() {
        $(".sucess-overlay").css('display', 'flex');
        $(".sending-overlay").css('display', 'none');
    }
});
