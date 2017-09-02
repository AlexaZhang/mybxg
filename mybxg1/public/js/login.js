define(['jquery','cookie'],function($){
	//实现登录功能
    $('#login').click(function(){
        var formdata=$('#loginForm').serialize();
        $.ajax({
            type:'post',
            url:"/api/login",
            data: formdata,
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    //先保存cookie
                      console.log(JSON.stringify(data.result));
                     $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/main/index'
                }else{
                    alert('用户名或者密码错误');
                }
            }
        });
        return false;
    });
});