var fansObj = {
    init: function() {
        this.typeStatesFn();
        this.loadMoreFn();
        $('.agree').click(function(){
            common.commonDialog("是否同意获得授权？","","确定","取消",function(){
                alert("确定分享处理！")
            })
        })
        $('.refuse').click(function(){
            common.commonDialog("是否拒绝获得授权？","","确定","取消",function(){
                alert("确定分享处理！")
            })
        })
    },
    typeStatesFn:function(){
        $("#type_states").on("click","li",function(){
            var ind=$(this).index();
            $(this).addClass("current").siblings("li").removeClass("current");
            $("#letter_container").children("div").eq(ind).removeClass("none").siblings("div").addClass("none")
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