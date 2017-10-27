var topicObj = {
    init: function() {
        this.loadMoreFn();
        this.TabsChangeFn();
        this.initAxajFn();
    },
    isRequest:false,
    TabsChangeFn:function(){
        $("#works_type").on("click","a",function(){
            $(this).addClass("current").siblings("a").removeClass("current")
        })
    },
    initAxajFn:function(){
        common.ajaxFn("../js/test.json","POST","",topicObj.successFn)
    },
    successFn:function(res){
        topicObj.isRequest=true;
        var $test_more=$("#test_more"),
            str="";
        $.each(res.data,function(i,v){
            str+="<div>姓名："+v.name+"，年龄："+v.age+"</div>"
        });
        $test_more.append($(str));
    },
    ErrorFn:function(){
        $(".loadMore").removeClass("none");
        topicObj.isRequest=false;
    },
    loadMoreFn: function() {
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 1) { 
                if (topicObj.isRequest) {
                    topicObj.isRequest=false;
                    common.ajaxFn("../js/test.json","POST","",topicObj.successFn,topicObj.ErrorFn)
                }
            }
         })
    }
}
topicObj.init();