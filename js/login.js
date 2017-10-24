var searchObj = {
    init: function() {
        this.loginFn();
        this.hidePromptFn();
    },
    loginFn:function(){
        $login_btn=$("#login_btn"),
        $error_prompt=$("#error_prompt"),
        $username=$("#username"),
        $pwd=$("#pwd"),
        reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        $login_btn.click(function(){
            var usernameV=$username.val(),
                pwdV=$pwd.val();
            if (!reg.test(usernameV) || usernameV=="") {
                $error_prompt.html("•邮箱错误！");
                return false;
            }else if (pwdV==""){
                $error_prompt.html("•秘密不能为空！");
                return false;
            }else{
                $error_prompt.html("");
                common.ajaxFn("ewq","POSt",{},function(){//ajax提交

                });
            }
        });
    },
    hidePromptFn:function(){
        var $error_prompt=$("#error_prompt"),
            ele=$("#username,#pwd");
            ele.on("focus",function(){
                $error_prompt.html("");
            });
    }
    
}
searchObj.init();