var advancedsearchObj = {
    init: function() {
        this.likeFun();
    },
    likeFun: function() {
        $("#dislike").on("click",function(){
            if ($(this).hasClass("like")) {
                $(this).removeClass("like");
            }else if(!$(this).hasClass("like")){
                $(this).addClass("like");
            }
        });
    }   
}
advancedsearchObj.init();