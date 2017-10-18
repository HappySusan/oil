var advancedsearchObj = {
    init: function() {
        this.optionMore();
    },
    optionMore: function() {
        $(".lis").on("click","span",function(){
            $(this).addClass("active").siblings("span").removeClass("active");
            var activeVal= $(this).html(),
            ind=$(this).parents("li").index();
            console.log($("<i>"+activeVal+"</i>；"))
            $("#screen_wrapper span em").eq(ind).show().children("i").html(activeVal);
        });
    }   
}
advancedsearchObj.init();