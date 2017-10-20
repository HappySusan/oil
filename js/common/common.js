function Common(){
	this.ajaxFun=function(url,types,option,callback,asyncType){  //  路径，数据，正确的回调，
	    var async=asyncType?asyncType:true;
	    $.ajax({
	        url:url,
	        type:types,
	        dataType:"json",
	        data:option,
	        async:async,
	        success:function(rs){
	            if($.isFunction(callback)) callback(rs)
	        },
	        error:function(rs){
	            console.log(rs)
	        }
	    })
	},
	this.Geturl=function (name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
    },
    this.sendEmailDialog=function(name){
        var str='<div class="send_email_mask" id="send_email_mask">'+
                '<div class="send_email_dialog">'+
                '<div class="send_email_header">'+
                '发送站内信给 <span>'+name+'</span>'+
                '<div class="close_send_email fr" id="close_send_email"></div>'+
                '</div>'+
                '<textarea name="" id="" cols="" rows="" placeholder="说点什么吧～" class="tend_email_are"></textarea>'+
                '<div class="send_email_btn fr" id="send_email_btn">发送</div>'+  //on 类表示按钮可以发送消息
                '</div>'+
                '</div>';
        $("body").append(str);  
        $(".tend_email_are").on("keyup",function(){
            if ($(this).val()!="") {
                $("#send_email_btn").addClass("on");
            }else if ($(this).val()==""){
                $("#send_email_btn").removeClass("on");
            }
        }); 
        $("#close_send_email").on("click",function(){
            $("#send_email_mask").remove();
        });
        $("#send_email_btn").on("click",function(){
            if ($(".tend_email_are").val()!="") {
                alert("去请求接口");
                $("#send_email_mask").remove();
            }else if ($(".tend_email_are").val()==""){
                return false;
            }
            
        });
    }
}
common=new Common();
