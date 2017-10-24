var votedetailObj = {
    init: function() {
        this.originalTagFn();
        this.delCheckedTagFn();
        this.pressBlankFn()
    },
    originalTagFn:function(){
        $("#more_tags").on("click","li",function(){
            var vals=$(this).html(),
                dataId=$(this).data("id"),
                str="",
                flag=0,
                len=$("#selected_tag li").length;
                console.log(dataId)
                str="<li data-id="+dataId+">"+vals+"<span>×</span></li>";
            if (len!=0) {
                if (len>=10) {
                    alert("最多选择10个标签");
                    return false;
                }
                $.each($("#selected_tag li"),function(i,v){
                    if ($(v).attr("data-id")==dataId) {
                        alert("您已选择此标签！");
                        flag=0;
                        return false;
                    }else if ($(v).attr("data-id")!=dataId) {
                        flag=1;
                    }
                });
                if (flag) {
                    $("#selected_tag").append($(str));
                }
            }else if(len==0){
                $("#selected_tag").append($(str));
            }
        });
    },
    delCheckedTagFn: function(){
        $("#selected_tag").on("click","span",function(){
            var ele=$(this).parents("li");
            ele.remove();
        });
    },
    pressBlankFn:function(){
        $("#custom_tag").keypress(function(event){
            if(event.which == 32) {
                var str="",
                    len=$("#selected_tag li").length,
                    new_tag_val=$("#custom_tag").val();
                    
                if (new_tag_val=="") {
                    alert("请输入正确标签内容！")
                }else if (new_tag_val!="") {
                    if (len>=10) {
                        alert("最多选择10个标签");
                        return false;
                    }else{
                        common.ajaxFn("url","GET",{"val":new_tag_val},function(res){//走一个接口，然后返回ID，放进新创建的标签里面data-id这里
                            //返回数据格式{
                            //     status:200,
                            //     id:1
                            // }
                            if (res.status==200) {
                                str="<li data-id="+res.id+">"+new_tag_val+"<span>×</span></li>";
                                $("#selected_tag").append($(str));
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