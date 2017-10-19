var advancedsearchObj = {
    init: function() {
        this.likeFun();
        this.nextFun();
        // this.nextFun($("#next_picture"),$("#similar_pictures"));
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
    nextFun:function(){
        //$("#next_people"),$("#people_list")
        var omveDistance=$("#people_list").find("li").outerWidth(true),
            len=$("#people_list").find("li").length;
            $("#people_list").css("width",omveDistance*len+"px");
            $("#next_people").on("click",function(){
                $("#next_people").off("click");
                advancedsearchObj.moveFun($("#next_people"),$("#people_list"),omveDistance)
            });

            var omveDistance2=$("#similar_pictures").find("li").outerWidth(true),
            len2=$("#similar_pictures").find("li").length;
            $("#similar_pictures").css("width",omveDistance2*len2+"px");
            $("#next_picture").on("click",function(){
                $("#next_picture").off("click");
                advancedsearchObj.moveFun($("#next_picture"),$("#similar_pictures"),omveDistance2)
            })

    },
    moveFun:function(ele,object,omveDistance){
        object.animate({"left":-omveDistance+"px"},500,function(){
            object.append(object.find("li:first"));
            object.css({"left":0});
            advancedsearchObj.nextFun(ele,object);
        });
    }
}
advancedsearchObj.init();