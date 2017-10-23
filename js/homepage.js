var homepageObj = {
    init: function() {
        this.loadMore();
        this.waterFallFn("#search_result",".lis");
        this.personalTypeFn();
        this.sendEmailFn();
    },
    loadMore: function() {
        var winH = $(window).height(); //页面可视区域高度 
        $(window).scroll(function() {
            var pageH = $(document.body).height();  
            var scrollT = $(window).scrollTop(); //滚动条top  
            var aa = (pageH - winH - scrollT) / winH;  
            if (aa < 0.02) { 
                $(".loadMore").removeClass("none");
                //去加载更多
            }
         })
    },
    sendEmailFn:function(){
        $(".send_email").on("click",function(){
            var names=$(".personal_name").html();
            common.sendEmailDialog(names)
        });
    },
    personalTypeFn:function(){
        $("#personal_type").on("click","li",function(){
            var dataId = $(this).data("id"),
                $fansList = $("#follow_fans_list"),
                $worksLists = $("#search_list");
            $(this).addClass("current").siblings("li").removeClass("current");
            if (dataId==0||dataId==1||dataId==2) {
                $fansList.addClass("none");
                $worksLists.removeClass("none");
            }else if(dataId==3||dataId==4){
                $worksLists.addClass("none");
                $fansList.removeClass("none");
            }   
        });
    },
    waterFallFn:function(parent,clsName){
        var oParent=$(parent);
        // 获取wrapper下所有class为box的元素
        var boxs=$(clsName);
        // 计算总列数=页面宽/每一列的宽
        var w=boxs.eq(0).outerWidth(true);   // 每一列的宽
        var pagew=oParent.outerWidth(true);
        var cols=Math.floor(pagew/w);
        var len=boxs.length;
        // 计算wrapper的宽且让wrapper这个div在页面中居中显示
        oParent.css({
            'width':+w*cols+'px',
            'margin':'0 auto'
        });
        var arr=[];  // 存储每一列的高
        // 遍历每一个盒子
        
        for(var i=0;i<len;i++){
          if(i<cols){
             arr[i]=boxs.eq(i).outerHeight(true);
          }else{
            // 求出数组中的最小值
            var minH=Math.min.apply(this,arr);
            // 求出最小值在数组中的索引
            var index=homepageObj.getIndexFn(minH,arr);
            // 定位盒子
            boxs.eq(i).css({
                'position':'absolute',
                'top':minH+'px',
                'left':index*w+'px'
            });
            arr[index]+=boxs.eq(i).outerHeight(true);
            // arr.push(boxs.eq(i).outerHeight(true));
          }
        }
        var maxH=Math.max.apply(this,arr);
        oParent.css({
            'height':maxH+'px'
        });
    },
    // 获取值在数组中的索引
    getIndexFn:function (val,arr){
        var index = arr.indexOf(val)
        if(index != -1){
            return index;
        }
    }
}
homepageObj.init();