var topicObj = {
    loadObj : {
        pageNo: 1,
        totalItems: $('#totalItems').val(),
        currentItems: $('#topic_list').find('.every_topic').length
    },
    init: function() {
        topicObj.successItemFn();
        common.loadMoreFn(topicObj.successItemFn);
    },
    successItemFn: function(){
        var $topic_list=$("#topic_list");
        var currentItems= $topic_list.find('.every_topic').length;
        if(currentItems >= topicObj.loadObj.totalItems){
            $(".loadMore").addClass("none");
            isRequest = false;
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
            isRequest = true;
        });
    }
}
topicObj.init();