$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.mobile-menu-links').toggle(500);
    });

    var contactsSection = $("#contacts");
    var contactsOffset = contactsSection.offset().top;
    $("#reach-out").click(function () {
        $('html, body').animate({
            scrollTop: contactsOffset
        }, 800);
    })
});
