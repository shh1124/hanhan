

//1.验证用户名是否已存在用异步方式
function check_uname(){
	 var xhr=createXhr();
 xhr.onreadystatechange=function(){
	 if(xhr.readyState==4&&xhr.status==200){
		 var str=xhr.responseText;
		 if(str=="1"){
			$("#uname-show").html("用户名可用");
			$(function(){
	$("#btn-1").click(function(){
		var $btn=$(this);
		$.ajax({
			type:"post",
			url:"data/register.php",
			data:$btn.parent().parent().serialize(),
			success:function(data){
				console.log(data);
				if(data=="注册成功"){
					alert(data);
					location.href="login.html";
					//?back=http://xxx/products.html?kw=i5
//					var i=location.search.indexOf("=");
				}else if(data=="注册失败"){
					alert(data);
					location.href=
						"register.html";
				}
			}
		})
	})
});
		 }else if(str=="0"){
			$("#uname-show").html("用户名已存在");

		 }
 }
 }
//获取用户名输入框的值
var uname=$("#uname").val();
xhr.open("get","data/checkUname.php?uname="+uname,true);

xhr.send(null);
}

	//验证登录密码框不能为空
	function check_upwd(){
 var upwd=$("#upwd").val();
 if(upwd==""){
	 $("#upwd-show").html("密码不能为空！");
 }else{
	 $("#upwd-show").html("通过");
 }
}
//验证重复密码和登录密码必须一致
function check_cpwd(){
 var upwd=$("#upwd").val();
	 var cpwd=$("#cpwd").val();
	 if(upwd==cpwd){
		$("#cpwd-show").html("通过");
 }else{
		$("#cpwd-show").html("两次密码不一致");
 }
}
