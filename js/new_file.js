window.onload = function() {
	var duration = 3000;
	var playTime = 1000;
	
	slide(duration, playTime);
    dong(2000,1000);
    zhu(2000,1000);
}

function slide(duration, playTime) {
	var $ul = $('.h341');
	var $cc = $('.h341 img').eq(0).clone();
	$ul.append($cc);
	var li = $ul.children();

	var imglength = li.length - 1;
	var index = 0;

	function next() {
		index++;

		animate(index);
		if(index > imglength) {
			index = 1;
			$ul.css('left', 0 + 'px');
		}
		animate(index);
	}

	var timer = setInterval(next, duration);

	clearTimer($ul);

	function clearTimer(ele) {
		ele.hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(next, duration);
			});

	}

	$('.lun3 li').click(function() {
		var index2 = $(this).index();
		index = index2;
		animate(index + 1);
	})

	function animate(index) {
		$('.lun3 li').css('background', 'white')
 		$('.lun3 li').eq(index - 1).css('background', 'red');
		$ul.stop().animate({
			'left': index * (-540) + 'px'
		}, playTime);

	}
}
function dong(duration, playTime) {
	var $ul = $('.h381');
	var $cc = $('.h381 div').eq(0).clone();
	$ul.append($cc);
	var li = $ul.children();

	var imglength = li.length - 1;
	var index = 0;

	function next() {
		index++;

		animate(index);
		if(index > imglength) {
			index = 1;
			$ul.css('left', 0 + 'px');
		}
		animate(index);
	}

	var timer = setInterval(next, duration);

	clearTimer($ul);

	function clearTimer(ele) {
		ele.hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(next, duration);
			});

	}

	

	function animate(index) {
		$('.h37 li').css('background','red');
		$('.h37 li').eq(index-1).css('background','black');
		$ul.stop().animate({
			'left': index * (-540) + 'px'
		}, playTime);

	}
}
function zhu(duration, playTime) {
	var $ul = $('.h53');
	var $cc = $('.h53 .h54').eq(0).clone();
	$ul.append($cc);
	var li = $ul.children();

	var imglength = li.length - 1;
	var index = 0;

	function next() {
		index++;

		animate(index);
		if(index > imglength) {
			index = 1;
			$ul.css('top', 0 + 'px');
		}
		animate(index);
	}

	var timer = setInterval(next, duration);

	clearTimer($ul);

	function clearTimer(ele) {
		ele.hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(next, duration);
			});

	}

	

	function animate(index) {
		
		$ul.stop().animate({
			'top': index * (-100) + 'px'
		}, playTime);

	}
}