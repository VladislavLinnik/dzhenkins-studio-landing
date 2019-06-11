$(document).ready(function(){

    $('.stats-list').viewportChecker({
        callbackFunction: function(){
            $('.spincrement').spincrement({
                duration: 3000
            });
        }
    });
    

});
