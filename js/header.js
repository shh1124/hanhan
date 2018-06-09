(function(){
	$("#header").load("header.html",function(){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/header.css";
		document.head.appendChild(link);
		document.getElementById("header").innerHTML=html;
//		var btnSearch=document.querySelector(
//			"#top_input>[data-trigger=search]");	
//		var txtSearch=document.getElementById("center_input");
//		btnSearch.onclick=function(){
//			if(txtSearch.value.trim()!=="")
//				location.href=
//					"product.html?kw="+txtSearch.value.trim();
//		}
//		$("#btnLogin").click(funct ion(e){
//			e.preventDefault();
//			location.href="login.html?back="+location.href;
//		});
$.ajax({
		type:"get",
		url:"data/users/islogin.php",
		dataType:"json",
		success:function(data){
			if(data.ok==0){
				$("#loginList").show().next().hide();
			}else{
				var {uname}=data;
				$("#loginList").show().next().show()
					.find("#uname").html(uname);
			}
		}
		});
		$("#btnLogin").click(function(e){
			e.preventDefault();
			location.href="login.html?back="+location.href;
		});
		$("#btnSignout").click(function(e){
			e.preventDefault;
			$.ajax({
				type:"get",
				url:"data/users/signout.php",
				success:function(){
					location.reload(true);//reload(true)重新加载的意思
				}
			})
		})
	})	
})();