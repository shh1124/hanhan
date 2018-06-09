$(function(){
	$("#btn").click(function(){
//		var $btn=$(this);
		var uname = $("#uname").val();
		var upwd = $("#upwd").val();
		$.ajax({
			type:"post",
			url:"data/users/signin.php",
			data:{uname:uname,upwd:upwd},
			success:function(msg){
				if(msg=="登录成功!"){
					alert(msg);
					location.href="index.html";
					//?back=http://xxx/products.html?kw=i5
//					var i=location.search.indexOf("=");
				}else if(msg=="用户名或密码错误，请重新输入"){
					alert(msg);
					location.href="login.html";
				}
			}
		})
	})
})