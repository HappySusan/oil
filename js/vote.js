var topicObj = {
    init: function() {
        this.loadMoreFn();
        this.voteTabsFn();
    },
    loadMoreFn: function() {
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 0.02) { 
                $(".loadMore").removeClass("none");
                //去加载更多
            }
         })
    },
    voteTabsFn:function(){
        $("#vote_type_main").on("click","span",function(){
            $(this).addClass("cur").siblings("span").removeClass("cur");
        })
    }
}
topicObj.init();