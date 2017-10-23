function Common(){
    var _self = this;
    /**
     * ajax 调用封装
     * 包括 路径url，请求方式types，数据内容option，成功返回数据后的回调，异步与否
     */
	_self.ajaxFn=function(url,types,option,callback,asyncType){  
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
                alert("请求异常，请重试")
	            console.log(rs)
	        }
	    })
    },
    /**
     * 获取地址栏问号后参数
     * @param {name} 等号前参数
     */
	_self.Geturl=function (name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
    },
    _self.loadMoreFn =function(callback) {
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 0.02) { 
                $(".loadMore").removeClass("none");
                callback? callback() : "";
                
            }
         })
    },
    /**
     * 发送站内信
     * @param {name} receiver
     */
    _self.sendEmailDialog=function(name){
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
