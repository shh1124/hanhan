function $(id){//根据id获取页面指定元素
	return document.getElementById(id);
}
function createXhr(){ //创建异步对象，判断创建的异步对象是否支持标准创建异步
	var xhr=null;
	if(window.XMLHttpRequest){ 
		xhr=new XMLHttpRequest();
	}else{
		xhr=new 
		ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}