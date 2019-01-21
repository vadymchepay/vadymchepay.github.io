$(document).ready(function () {
    document.querySelector(".nav-toggle")
        .addEventListener("click", function () {
            this.classList.toggle("active");
            document.querySelector(".mobile-nav").classList.toggle("nav_open");
            document.querySelector(".header-bar").classList.toggle("mobile-nav-open");document.querySelector("body").classList.toggle("no_scroll");
        });

    document.querySelector(".mobile-item.sub")
        .addEventListener("click", function () {
            this.classList.toggle("open_sub");
        });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".header-bar").addClass("scrolled")
        } else {
            $(".header-bar").removeClass("scrolled")
        }
    })
});
