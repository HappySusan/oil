var advancedsearchObj = {
    init: function() {
        this.optionMoreFn();
        this.searchWidthFn();
    },
    optionMoreFn: function() {
        $(".lis").on("click","span",function(){
            $(this).addClass("current").siblings("span").removeClass("current");
            var activeVal= $(this).html(),
                ind=$(this).parents("li").index();
            $("#screen_wrapper .search_item li").eq(ind).show().children("em").text(activeVal);
            if(activeVal == "全部"){
                $("#screen_wrapper .search_item li").eq(ind).hide();
            };
            advancedsearchObj.searchWidthFn();
        });
        $("#screen_wrapper .search_item li").on("click","i",function(){
            var _ind = $(this).parents('li').index();
            $(this).parents('li').hide().find('em').text('');
            $("#advancedsearch_list .lis").eq(_ind).find('span').removeClass("current");
            advancedsearchObj.searchWidthFn();
        });
    },
    searchWidthFn: function(){
        var btn_w = $('.search_btn').outerWidth(),
            tag_w = $('.search_item').outerWidth(),
            search_outer_w = $('#screen_wrapper').width(),
            search_dis = search_outer_w - tag_w-btn_w-1;
        $('.search_input').width(search_dis+'px');
    } 
}
advancedsearchObj.init();