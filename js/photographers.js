var photographersObj = {
    init: function() {
        this.loadMore();
        this.sendEmail();
        
        
    },
    loadMore: function() {
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
    sendEmail:function(){
        $(".send_email").on("click",function(){
            var names=$(this).parents(".character_introduction").find($(".photographer_name a")).html();
            common.sendEmailDialog(names)
        });
    }
}
photographersObj.init();