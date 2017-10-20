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
	}
}
common=new Common();
