var advancedsearchObj = {
    init: function() {
        this.likeFn();
        this.nextUserFn();
        this.nextPicturesFn();
        this.sendEmailFn();
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
    nextUserFn:function(){
        var wid=0,
            $FavUsers = $("#people_list"),
            $FavBtn = $("#next_people");
            $.each($FavUsers.find("li"),function(){
                wid+=$(this).outerWidth(true);
            });
            $FavUsers.css("width",wid+"px");
            $FavBtn.on("click",function(){
                $FavBtn.off("click");
                var omveDistance=$FavUsers.find("li:first").outerWidth(true);
                advancedsearchObj.moveFn($FavBtn,$FavUsers,omveDistance,1);
                
            });
    },
    nextPicturesFn:function(){
        var wid2=0;
            $.each($("#similar_pictures").find("li"),function(){
                wid2+=$(this).outerWidth(true);
            });
            $("#similar_pictures").css("width",wid2+"px");
            $("#next_picture").on("click",function(){
                $("#next_picture").off("click");
                var omveDistance2=$("#similar_pictures").find("li:first").outerWidth(true);
                advancedsearchObj.moveFn($("#next_picture"),$("#similar_pictures"),omveDistance2,2)
               
            })
    },
    moveFn:function(ele,object,omveDistance,Distinguish){
        object.animate({"left":-omveDistance+"px"},500,function(){
            object.append(object.find("li:first"));
            object.css({"left":0});
            if (Distinguish==1) {
                advancedsearchObj.nextPeopleFun();
            }else if (Distinguish==2) {
                advancedsearchObj.nextPicturesFun();
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