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
            console.log(9999)
            var ele=$(this).parents("li");
            ele.remove();
        });
        $("#custom_tag").keypress(function(event){
            if(event.which == 13) {//这里应该添加一个标签走一个接口，然后返回ID，防盗data_id这里
                var str="",
                    len=$("#selected_tag li").length;
                    str="<li data_id="+"data_id"+">"+$(this).val()+"<span>×</span></li>";
                if ($("#custom_tag").val("")=="") {
                    alert("请输入正确标签内容！")
                }else if ($("#custom_tag").val("")!="") {
                    if (len>=10) {
                        alert("最多选择10个标签");
                        return false;
                    }else{
                        $("#selected_tag").prepend($(str));
                        $("#custom_tag").val("")
                    }
                }
                 
            }
        });
        
    }
}
votedetailObj.init();