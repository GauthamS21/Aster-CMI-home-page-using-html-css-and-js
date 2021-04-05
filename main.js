// Open and close tab
$("#condition_1").click(function() {
    $('#condition_details_1').toggle();
});

$("#condition_2").click(function() {
    $('#condition_details_2').toggle();
});

$("#condition_3").click(function() {
    $('#condition_details_3').toggle();
});

$("#condition_4").click(function() {
    $('#condition_details_4').toggle();
});

$("#condition_5").click(function() {
    $('#condition_details_5').toggle();
});

$("#condition_6").click(function() {
    $('#condition_details_6').toggle();
});

$("#condition_7").click(function() {
    $('#condition_details_7').toggle();
});

//on click scroll top button
$("#scroll-top").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});

//before submit form validation
$("#submitform").validate();

//carousel card 
$('#myCarousel').carousel({
    interval: 5000
});

