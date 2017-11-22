var votedetailObj = {
    init: function() {
        this.originalTagFn();
        this.delCheckedTagFn();
        this.pressBlankFn();
        this.uploadFn();
        this.submitFn();
    },
    submitFn: function(){
        $("#submitBtn").click(function(){
            var title = $.trim($("#title").val());
            if($("#change_works").val() == ""){
                alert('请上传图片');
                return;
            };
            if(title == "" || title == " "){
                alert('请填写标题');
                return;
            };
            if($("#selected_tag li").length==0){
                alert('请选择图片对应的标签');
                return;
            }
            //此处写提交代码
            
        });
    },
    uploadFn: function(){
        $("#change_works").on('change',function(){
            var file = $(this).val();
            file == ""? $("#filePath").text('未上传任何文件').css('color','#ccc') : $("#filePath").text(getFileName(file)).css('color','#000');
            $("#filePath").attr('title',getFileName(file));
            function getFileName(o){
                var pos=o.lastIndexOf("\\");
                return o.substring(pos+1);  
            }
        })
    },
    originalTagFn:function(){
        $("#more_tags").on("click","li",function(){
            var vals=$(this).html(),
                dataId=$(this).data("id"),
                str="",
                flag=0,
                len=$("#selected_tag li").length + $("#selected_tag_input li").length;
                str="<li data-id="+dataId+">"+vals+"<span>×</span></li>";
            if (len!=0) {
                if (len>=10) {
                    alert("最多选择10个标签");
                    return false;
                }
                flag=1;
                $.each($("#selected_tag li"),function(i,v){
                    if ($(v).attr("data-id")==dataId) {
                        alert("您已选择此标签！");
                        flag=0;
                        return false;
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
        $("#selected_tag,#selected_tag_input").on("click","span",function(){
            var ele=$(this).parents("li");
            ele.remove();
        });
    },
    pressBlankFn:function(){
        $("#custom_tag").keypress(function(event){
            if(event.which == 32) {
                var str="",
                    inputStr="",
                    len=$("#selected_tag li").length + $("#selected_tag_input li").length,
                    new_tag_val=$.trim($("#custom_tag").val()),
                    canCreate = false;
                    
                if (new_tag_val=="") {
                    alert("请输入正确标签内容！")
                    return false;
                };
                if (len>=10) {
                    alert("最多选择10个标签");
                    $("#custom_tag").val("")
                    return false;
                };
                canCreate = true;
                $.each($("#selected_tag_input li i"),function(i,v){
                    console.log($(v).text())
                    console.log(new_tag_val)
                    if ($(v).html()== new_tag_val) {
                        alert("您已创建此标签！");
                        canCreate = false;
                    }
                });
                console.log(canCreate)
                inputStr="<li><i>"+new_tag_val+"</i><span>×</span></li>";
                if(canCreate){
                    console.log(11231)
                    $("#selected_tag_input").append($(inputStr));
                    $("#custom_tag").val("");
                }
            
                 
            }
        });
        
    }
}
votedetailObj.init();