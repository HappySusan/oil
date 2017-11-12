
var cutImgObj = {
    init: function(){
        $('#image_file').change(function(){
            var oFile = $('#image_file')[0].files[0];
            var rFilter = /^(image\/jpeg|image\/png|image\/jpg|image\/bmp|image\/gif|image\/webp)$/i;//图片格式限JPEG、PNG、BMP、GIF、Webp

            if (!rFilter.test(oFile.type)) {// check for file type
                alert('选择的图片格式未符合要求')
                return;
            };
            
            if (oFile.size > 1000 * 1024) {// check for file size
                alert('请上传小于12M的图片')
                return;
            };
            var oImage = document.getElementById("preview_header");//img preview
            var oReader = new FileReader();
            oReader.onload= function(e){
                oImage.src = e.target.result;
                oImage.onload = function(){
                    $(".step2").fadeIn(500);
                    var jcropApi;
                    $('#preview_header').Jcrop({
                        allowSelect: true,
                        baseClass: 'jcrop',
                        bgOpacity: 0.3,
                        bgFade: true,
                        aspectRatio: 1,
                        minSelect: [100,100],
                        boxWidth:750,
                        boxHeight:300,
                        onChange: function(){
                        },
                        onDblClick: function(){
                            // console.log(jcropApi.tellSelect())
                        },
                        onSelect: cutImgObj.selectedData,
                        onRelease: cutImgObj.clearData
                    }, function() {
                        jcropApi = this;
                    });
                }
            }
            oReader.readAsDataURL(oFile);
        });
    },
    selectedData: function(e){
        $('.left_x').val(e.x);
        $('.left_y').val(e.y);
        $('.preview_w').val(e.w);
        $('.preview_h').val(e.h);
    },
    clearData(){
        $('.left_x').val('');
        $('.left_y').val('');
        $('.preview_w').val('');
        $('.preview_h').val('');
    },
    checkForm: function() {
        if (parseInt($('.preview_w').val()))
            return true;
        alert('请先选择图片，并且截图');
        return false;
    }
};
cutImgObj.init();
