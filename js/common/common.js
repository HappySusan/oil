var isRequest=false;

function Common(){
    var _self = this;
    /**
     * ajax 调用封装
     * 包括 路径url，请求方式types，数据内容option，成功返回数据后的回调，异步与否
     */
	_self.ajaxFn=function(url,types,option,callback,errorcallback,asyncType){  
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
                if ($.isFunction(errorcallback)) {
                    errorcallback()
                }else{
                    alert("请求异常，请重试")
                    console.log(rs)
                }
                
	        }
	    })
    },
     /**
     * 下载，分享的弹框
     * @param {tit} 弹框标题
     * @param {content} 弹框内容
     * @param {lBtn} 左边按钮内容
     * @param {rBtn} 右边按钮内容
     * @param {leftCallback} 左边按钮的回调
     * @param {rightCallback} 右边按钮的回调，传回调走回调，没传就默认关闭
     */
    _self.commonDialog=function(tit,content,lBtn,rBtn,leftCallback,rightCallback){
        var str='<div class="dialog" id="dialog">'
                +'<h3>'+tit+'</h3>'
                +'<p>'+content+'</p>'
                +'<div>'
                +'<button id="left_btn">'+lBtn+'</button>'
                +' <button class="cancle" id="cancle">'+rBtn+'</button>'
                +'</div>'
                +'</div>'
                +'<div class="common_mask" id="common_mask"></div>'
        $("body").append(str); 
        $("#left_btn").click(function(){
            leftCallback();
        });
        $("#cancle").click(function(){
            if (rightCallback) {
                rightCallback()
            }else{
                $("#dialog,#common_mask").remove();
            }
        });
        
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
    },
    /**
     * 加载更多
     * 根据本文件中的全局变量 isRequest来判断是否需要加载更多
     * callback：滚动条滚到底部的回调（回调需在每个页面初始化调用一次）
     * 需要在原页面设置totlePage，详情案例参考topic.js
     */
    _self.loadMoreFn= function(callback) {
        //判断是否到底部，继续请求数据
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 0.02) { 
                //去加载更多
                if(isRequest){
                    callback?callback():"";
                }else{
                    isRequest = false;
                }
            }
         })
    }
}
common=new Common();
