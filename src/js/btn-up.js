$(function() {
    console.log('btn-up on')
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#btnup').fadeIn();
        } else {
            $('#btnup').fadeOut();
            }
        });

    $('#btnup').click(function() {

    $('body,html').animate({scrollTop:0},700);

    });
});