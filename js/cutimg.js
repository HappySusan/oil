
var cutImgObj = {
    init: function(formId, fileId, preWrapClass,previewId, radio){
        $('#'+fileId).change(function(){
            var oFile = $('#'+fileId)[0].files[0];
            var rFilter = /^(image\/jpeg|image\/png|image\/jpg|image\/bmp|image\/gif|image\/webp)$/i;//图片格式限JPEG、PNG、BMP、GIF、Webp

            if (!rFilter.test(oFile.type)) {// check for file type
                alert('选择的图片格式未符合要求')
                return;
            };
            
            if (oFile.size > 12000 * 1024) {// check for file size
                alert('请上传小于12M的图片')
                return;
            };
            var oImage = document.getElementById(previewId);//img preview
            var oReader = new FileReader();
            oReader.onload= function(e){
                oImage.src = e.target.result;
                oImage.onload = function(){
                    $('#'+formId).find("."+preWrapClass).fadeIn(500);
                    var jcropApi;
                    $('#'+previewId).Jcrop({
                        allowSelect: true,
                        baseClass: 'jcrop',
                        bgOpacity: 0.3,
                        bgFade: true,
                        aspectRatio: radio,
                        minSelect: [30,30],
                        // boxWidth:850,
                        boxHeight:400,
                        onChange: function(){
                        },
                        onDblClick: function(){
                            $('#'+formId).submit();// console.log(jcropApi.tellSelect())
                        },
                        onSelect: function(e){
                            $('#'+formId).find('.left_x').val(e.x);
                            $('#'+formId).find('.left_y').val(e.y);
                            $('#'+formId).find('.preview_w').val(e.w);
                            $('#'+formId).find('.preview_h').val(e.h);
                        },
                        onRelease: function(){
                            cutImgObj.clearData(formId);
                            oImage.src='';
                            $('#'+formId).find("."+preWrapClass).fadeOut(500);
                
                        }
                    }, function() {
                        jcropApi = this;
                    });
                }
            }
            oReader.readAsDataURL(oFile);
        });
    },
    clearData: function(formId){
        $('#'+formId).find('.left_x').val('');
        $('#'+formId).find('.left_y').val('');
        $('#'+formId).find('.preview_w').val('');
        $('#'+formId).find('.preview_h').val('');
    },
    checkForm: function(formId) {
        if (parseInt($('#'+formId).find('.preview_w').val()))
            return true;
        alert('请先选择图片，并且截图');
        return false;
    },
    maskCloseFn(){
        $("#bg_close").click(function(){
            $("#bg_mask").hide();
        })
    }
};
cutImgObj.init('upload_iconform','image_file','step2','preview_header',1);
cutImgObj.init('upload_bgform','bg_file', 'bg_mask', 'preview_bg',3);
cutImgObj.maskCloseFn();