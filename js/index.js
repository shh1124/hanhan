//js/index.js
//轮播图效果
$(function(){
	var $ul=$(".banner-img");
	var $ulIds=$(".indicators");
	var LIWIDTH=1200,interval=500,wait=3000,moved=0,timer=null;
	$.ajax({//向php文件请求轮播图片
		type:"get",
		url:"data/index/getcarousel.php",
		dataType:"json",
		success:function(data){
				var html="";
				for(var c of data){
					var{img,href,title}=c;
					html+=`<li>
              <a href="${href}" title="${title}">
                <img src="${img}">
              </a>
            </li>`;
			}
			var {img,href,title}=data[0];
			html+=`<li>  
              <a href="${href}" title="${title}">
                <img src="${img}">
              </a>
            </li>`;
			$ul.html(html).css("width",LIWIDTH*(data.length+1));
			$ulIds.html("<li></li>".repeat(data.length))
				.children(":first").addClass("hover");
			AutoMove();//调用自动播放函数
		}
	})
		function AutoMove(){
			timer=setInterval(function(){
				move();
			},wait);//播放时间
	}
	function move(){//封装move函数 因为多次使用
		moved++;
			$ul.animate({
				left:-moved*LIWIDTH//改变它的left为负的
			},interval,function(){//等待时间
				if(moved==$ul.children().length-1){
					$ul.css("left",0);
					moved=0;
				}
				$ulIds.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
				})
	}
	$("#banner").mouseenter(function(){//进入banner范围内暂停图片移动
		clearInterval(timer);
		timer=null;
	}).mouseleave(function(){
		AutoMove();//调用自动播放函数
	});
	$ulIds.on("click","li",function(){//绑定li单击事件
		var $li=$(this);
		var i=$li.index();
		moved=i;
		$ul.stop(true).animate({
			left:-moved*LIWIDTH//改变它的left为负的
				},interval,function(){
					$ulIds.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
		})
	});
	var $aLeft=$(".ck-left"),
		$aRight=$(".ck-right");
	$aRight.click(function(){
		if(!$ul.is(":animated")){
		move();
		}
	});
	$aLeft.click(function(){
		if(!$ul.is(":animated")){
		if(moved==0){
			moved=$ul.children().length-1;
			$ul.css("left",-moved*LIWIDTH);
		}
		moved--;
		$ul.animate({
				left:-moved*LIWIDTH//改变它的left为负的
			},interval,function(){
				$ulIds.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
				})
		}
	})

});