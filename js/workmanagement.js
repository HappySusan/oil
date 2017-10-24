var fansObj = {
    init: function() {
        this.worksStatusFn();
        this.loadMoreFn();
    },
    worksStatusFn:function(){
        $("#type_states").on("click","li",function(){
            $(this).addClass("current").siblings("li").removeClass("current")
        });
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
    }
}
fansObj.init();