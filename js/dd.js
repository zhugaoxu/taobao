(function(){
$.fn.lun=function(){
	$(this).each(function(index,ele){
		show(ele);
	})
	return this;
}
function show(ele){
	//前面的准备工作，，，
	var num=0;	
	var width=$(ele).find('.imgbox>li').width();
//	alert(width);
	var length=$(ele).find('.imgbox>li').length+1;
	$(ele).find('.imgbox').width(width*length);
//	alert($('.imgbox').width());
	
	var $next=$(ele).find('.next');
	var $prev=$(ele).find('.prev');
	var $ul=$(ele).find('.imgbox');
	var $button=$(ele).find('.za li');
	
	var li=$ul.children().first().clone();
	$ul.append(li);
	$button.eq(0).css('background','red');
	
	
	
	//创建的点击事件
	function next(){
		num++;
		if(num>length-1){
			$ul.css('left','0px');
			num=1;
		}
		animate(num);
		
	}
	function prev(){
		num--;
		if(num<0){
			$ul.css({
				left:-width*(length-1)
			})
			num=length-1;
		}
		animate(num);
	}
	$next.click(function(){
		next();
	})
	$prev.click(function(){
		prev();
	})
	$button.click(function(){
		var index=$(this).index();
		animate(index);
		num=index;
	})
	//设置时钟，让其每隔几秒执行一次，鼠标放在上面自动动画停止，，鼠标离开动画继续
	var timer=setInterval(next,2000);
	$(ele).hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,2000);
	})
	
	
	//动画的具体操作
	function animate(index){
		if(index==length-1){
			$button.eq(0).css('background','red').siblings().css('background','white');
		}
		$button.eq(index).css('background','red').siblings().css('background','white');
		$ul.stop(true,true).animate({
			left:-width*index
		},1000)
	}
}
})();