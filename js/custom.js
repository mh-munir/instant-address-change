$(document).ready(function () {

    $(".second_link_home").click(function () {
        $(".second_nav").addClass('d-none');
    });
    $(".contact_us").click(function () {
        $(".main_nav").addClass('d-none');
    });
    $(".second_link_home").click(function () {
        $(".main_nav").removeClass('d-none');
    });
    $(".contact_us").click(function () {
        $(".second_nav").removeClass('d-none');
    });


    $(".permanent_type").click(function () {
        $(".stop_forwarding_date").addClass('d-none');
    });
    $(".temporary_type").click(function () {
        $(".stop_forwarding_date").removeClass('d-none');
    });
});