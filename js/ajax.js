//封装ajax
function ajax({type,url,data,dataType}){
	return new Promise(function(success){
		
		//1.创建xhr
		var xhr=new XMLHttpRequest();
		//2.监听
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var res=xhr.responseText;
				if(dataType==="json")
					res=JSON.parse(res);
				success(res);
			}
		}
		if(type==="get"&&data!==undefined)
			url+="?"+data;
		//3.打开连接
		xhr.open(type,url,true);
		//如果是post请求，还需要增加：设置请求头信息
		if(type==="post")
			xhr.setRequestHeader(
				"Content-Type",
				"application/x-www-form-urlencoded"
			);
		//4.发送请求
		if(type==="get")
			xhr.send(null);
		else if(data!==undefined)
			xhr.send(data);
	});
}