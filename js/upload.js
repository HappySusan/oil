var votedetailObj = {
    init: function() {
        this.changeTagsFun()
    },
    changeTagsFun:function(){
        $("#more_tags").on("click","li",function(){
            var vals=$(this).html(),
            data_id=$(this).attr("data_id"),
            str="",
            flag=0,
            len=$("#selected_tag li").length;
            str="<li data_id="+data_id+">"+vals+"<span>×</span></li>";
            if (len!=0) {
                if (len>=10) {
                    alert("最多选择10个标签");
                    return false;
                }
                $.each($("#selected_tag li"),function(i,v){
                    if ($(v).attr("data_id")==data_id) {
                        alert("您已选择此标签！");
                        flag=0;
                        return false;
                    }else if ($(v).attr("data_id")!=data_id) {
                        flag=1;
                    }
                });
                if (flag) {
                    $("#selected_tag").prepend($(str));
                }
            }else if(len==0){
                $("#selected_tag").prepend($(str));
            }
        });
        $("#selected_tag").on("click","span",function(){
            var ele=$(this).parents("li");
            ele.remove();
        });
        $("#custom_tag").keypress(function(event){
            if(event.which == 32) {
                var str="",
                    len=$("#selected_tag li").length,
                    new_tag_val=$("#custom_tag").val("");
                    
                if (new_tag_val=="") {
                    alert("请输入正确标签内容！")
                }else if (new_tag_val!="") {
                    if (len>=10) {
                        alert("最多选择10个标签");
                        return false;
                    }else{
                        common.ajaxFun("url","GET",{"val":new_tag_val},function(res){//走一个接口，然后返回ID，放进新创建的标签里面data_id这里
                            //返回数据格式{
                            //     status:1,
                            //     id:1
                            // }
                            if (res.status==1) {
                                str="<li data_id="+res.id+">"+new_tag_val+"<span>×</span></li>";
                                $("#selected_tag").prepend($(str));
                                $("#custom_tag").val("")
                            }
                        }); 
                        
                    }
                }
                 
            }
        });
        
    }
}
votedetailObj.init();