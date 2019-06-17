$(window).on('load', function(){

    setTimeout(function(){
        $('.preloader').addClass('preloader--hidden');
    }, 1000);
    
});

$(document).ready(function(){

    $('.stats-list').viewportChecker({
        callbackFunction: function(){
            $('.spincrement').spincrement({
                duration: 3000
            });
        }
    });

    $('.js-reviewsSlider').slick({
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
    });
    
    $('.js-startProject').click(function(){
        $('.popup, .popup_overlay').fadeIn(400); //показываем всплывающее окно
    });
    $('.popup-close, .popup_overlay').click(function(){
        $('.popup, .popup_overlay').fadeOut(400); //скрываем всплывающее окно
    });
});
