var indexObj = {
    typesFn: function(){
        $("#hotType li").click(function(){
            var $index = $(this).index();
            $("#hotType li").removeClass("type_clicked")
            $(this).addClass("type_clicked")
        })
    }
}
indexObj.typesFn()