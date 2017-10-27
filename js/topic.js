var topicObj = {
    loadObj : {
        isRequest: false,
        pageNo: 1,
        totalItems: $('#totalItems').val(),
        currentItems: $('#topic_list').find('.every_topic').length
    },
    init: function() {
        topicObj.successItemFn();
        this.loadMoreFn();
    },
    loadMoreFn: function() {
        //判断是否到底部，继续请求数据
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 0.02) { 
                //去加载更多
                if( topicObj.loadObj.isRequest){
                    topicObj.successItemFn();
                }else{
                    topicObj.loadObj.isRequest = false;
                }
            }
         })
    },
    successItemFn: function(){
        var $topic_list=$("#topic_list");
        var currentItems= $topic_list.find('.every_topic').length;
        if(currentItems == topicObj.loadObj.totalItems){
            topicObj.loadObj.isRequest = false;
            return;
        }
        $(".loadMore").removeClass("none");
        topicObj.loadObj.pageNo ++;
        common.ajaxFn("../js/test.json","POST",{pageNo:topicObj.loadObj.pageNo},function(rs){
            var str="";
            $.each(rs.data,function(i,v){
                str+="<div class='every_topic'>姓名："+v.name+"，年龄："+v.age+"</div>"
            });
            $topic_list.append($(str));
            topicObj.loadObj.isRequest = true;
        });
    }
}
topicObj.init();