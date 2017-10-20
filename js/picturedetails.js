var advancedsearchObj = {
    init: function() {
        this.likeFun();
        this.nextPeopleFun();
        this.nextPicturesFun();
    },
    likeFun: function() {
        $("#dislike").on("click",function(){
            if ($(this).hasClass("like")) {
                $(this).removeClass("like");
            }else if(!$(this).hasClass("like")){
                $(this).addClass("like");
            }
        });
    },
    nextPeopleFun:function(){
        var wid=0;
            $.each($("#people_list").find("li"),function(){
                wid+=$(this).outerWidth(true);
            });
            $("#people_list").css("width",wid+"px");
            $("#next_people").on("click",function(){
                $("#next_people").off("click");
                var omveDistance=$("#people_list").find("li:first").outerWidth(true);
                advancedsearchObj.moveFun($("#next_people"),$("#people_list"),omveDistance,1);
                
            });
    },
    nextPicturesFun:function(){
        var wid2=0;
            $.each($("#similar_pictures").find("li"),function(){
                wid2+=$(this).outerWidth(true);
            });
            $("#similar_pictures").css("width",wid2+"px");
            $("#next_picture").on("click",function(){
                $("#next_picture").off("click");
                var omveDistance2=$("#similar_pictures").find("li:first").outerWidth(true);
                advancedsearchObj.moveFun($("#next_picture"),$("#similar_pictures"),omveDistance2,2)
               
            })
    },
    moveFun:function(ele,object,omveDistance,Distinguish){
        object.animate({"left":-omveDistance+"px"},500,function(){
            object.append(object.find("li:first"));
            object.css({"left":0});
            if (Distinguish==1) {
                advancedsearchObj.nextPeopleFun();
            }else if (Distinguish==2) {
                advancedsearchObj.nextPicturesFun();
            }
            
            
        });
    }
}
advancedsearchObj.init();