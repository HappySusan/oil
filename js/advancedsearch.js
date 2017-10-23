var advancedsearchObj = {
    init: function() {
        this.optionMoreFn();
    },
    optionMoreFn: function() {
        $(".lis").on("click","span",function(){
            $(this).addClass("current").siblings("span").removeClass("current");
            var activeVal= $(this).html(),
            ind=$(this).parents("li").index();
            // console.log($("span.active").html());
            $("#screen_wrapper span em").eq(ind).show().children("i").html(activeVal);
        });
    }   
}
advancedsearchObj.init();