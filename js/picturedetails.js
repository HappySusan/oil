var advancedsearchObj = {
    init: function() {
        this.likeFn();
        this.clickRightBtnFn($("#people_list"),$("#next_people"),1)
        this.clickRightBtnFn($("#similar_pictures"),$("#next_picture"),2)
        this.sendEmailFn();
        this.shareFn();
        this.downloadFn();
    },
    shareFn:function(){
        var $share_btn=$("#share_btn");
            $share_btn.click(function(){
                common.commonDialog("是否分享此作品？","这个作品不错，我要分享给我的粉丝们","分享","取消",function(){
                    alert("确定分享处理！")
                })
            });
    },
    downloadFn:function(){
        var $download_btn=$("#download_sample,#download_artwork");
            $download_btn.click(function(){
                common.commonDialog("是否申请授权？","原图下载需要作者的授权，如果您确认喜欢此作品，会给作者发送授权申请","申请","取消",function(){
                    alert("确定下载处理！")
                },function(){
                    alert("取消下载处理！")}
                )
            });

    },
    likeFn: function() {
        $("#dislike").on("click",function(){
            if ($(this).hasClass("like")) {
                $(this).removeClass("like");
            }else if(!$(this).hasClass("like")){
                $(this).addClass("like");
            }
        });
    },
    clickRightBtnFn: function($Lists, $Btn,Distinguish){
        var wid=0;
            $.each($Lists.find("li"),function(){
                wid+=$(this).outerWidth(true);
            });
            $Lists.css("width",wid+"px");
            $Btn.on("click",function(){
                $Btn.off("click");
                var omveDistance=$Lists.find("li:first").outerWidth(true);
                advancedsearchObj.moveFn($Btn,$Lists,omveDistance,Distinguish);
            });
    },
    moveFn:function(ele,object,omveDistance,Distinguish){
        object.animate({"left":-omveDistance+"px"},500,function(){
            object.append(object.find("li:first"));
            object.css({"left":0});
            if (Distinguish==1) {
                advancedsearchObj.clickRightBtnFn($("#people_list"),$("#next_people"),1)
            }else if (Distinguish==2) {
                advancedsearchObj.clickRightBtnFn($("#similar_pictures"),$("#next_picture"),2)
            }
        });
    },
    sendEmailFn:function(){
        $(".send_email").on("click",function(){
            common.sendEmailDialog($("#friend_name a").html())
        });
    }

}
advancedsearchObj.init();