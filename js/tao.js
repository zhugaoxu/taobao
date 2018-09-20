var num = 0;
var timer = setInterval(next, 2000);

function next() {
	num++;
	if(num > 4) {
		num = 1;
		$('.zhong-111').css('left', '0px');
	}
	animate(num);
}

function prev() {
	num--;
	if(num < 0) {
		num = 3;
		$('.zhong-111').css('left', '-2080px');
	}
	animate(num);
}
$('.zhong-11>ul>li').eq(0).css('background', 'red');

function animate(index) {
	if(index == 4) {
		$('.zhong-11>ul>li').eq(0).css('background', 'red').siblings().css('background', 'white');
	}
	$('.zhong-11>ul>li').eq(index).css('background', 'red').siblings().css('background', 'white');
	$('.zhong-111').stop(true, true).animate({
		left: -520 * index
	}, 1000)
}
$('.zhong-11 li').click(function() {
	var index = $(this).index();
	animate(index);
	num = index;
})
$('.zhong-11').hover(function() {
	clearInterval(timer);
	$('.sp,.sp1').fadeIn(1000);

}, function() {
	timer = setInterval(next, 2000);
	$('.sp,.sp1').fadeOut(1000);
})
$('.sp').click(function() {
	prev();
});
$('.sp1').click(function() {
	next();
})





var nu = 0;
var timer1 = setInterval(next1, 2000);

function next1() {
	nu++;
	if(nu > 5) {
		nu = 1;
		$('.xi-1').css('left', '0px');
	}
	animate1(nu);
}

function prev1() {
	nu--;
	if(nu < 0) {
		nu = 4;
		$('.xi-1').css('left', '-2600px');
	}
	animate1(nu);
}
$('.xi-3>ul>li').eq(0).css('background', 'red');

function animate1(index) {
	$('.zhong-3>ul>li').eq(index).css('background','black').siblings().css('background','red');
	if(index == 5) {
		$('.xi-3>ul>li').eq(0).css('background', 'red').siblings().css('background', 'white');
		$('.zhong-3>ul>li').eq(0).css('background','black').siblings().css('background','red');
	}
//	$('#nn').text(1);
	
	$('#nn').text(index+1);
	if(index == 5) {
		$('.xi-3>ul>li').eq(0).css('background', 'red').siblings().css('background', 'white');
		$('#nn').text(1);
	}
	
	$('.xi-3>ul>li').eq(index).css('background', 'red').siblings().css('background', 'white');
	$('.xi-1').stop(true, true).animate({
		left: -520 * index
	}, 1000)
}
$('.xi-3 li').click(function() {
	var index = $(this).index();
	animate1(index);
	nu = index;
})
$('.xi').hover(function() {
	clearInterval(timer1);
	$('.spp,.spp1').fadeIn(1000);

}, function() {
	timer1 = setInterval(next1, 2000);
	$('.spp,.spp1').fadeOut(1000);
})
$('.spp').click(function() {
	prev1();
});
$('.spp1').click(function() {
	next1();
})