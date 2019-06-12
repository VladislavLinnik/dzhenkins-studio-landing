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
    

});
