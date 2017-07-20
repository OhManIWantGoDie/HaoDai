$(function(){
	
	$.fn.duang=function(span,up,ul,down){
		$(this).click(function(){
			$(span).val(parseInt($(this).text()))
			$(up).text($(this).children().text())
			$(ul).css('display','none')
			$(down).text('▼')
		})
	}
	
	$('.uul li').duang('.yiqi','.twoOne','.uul','.twoTwo')
	$('.ull li').duang('.ni','.threeOne','.ull','.threeTwo')
	
//	$('.uul li').click(function(){
//		$('.yiqi').val($(this).text())
//		$('.twoOne').text($(this).children().text())
//		$('.uul').css('display','none')
//		$('.twoTwo').text('▼')
//	})
	
//	$('.ull li').click(function(){
//		$('.ni').val(parseInt($(this).text()));
//		$('.threeOne').text($(this).children().text())
//		$('.ull').css('display','none')
//		$('.threeTwo').text('▼')
//	})
	
	$('.twoTwo').click(function(){
			$(this).text('▲');
//			$('.uul').slideToggle();
			$('.uul').css('display','block');
	})
	
	$('.threeTwo').click(function(){
		$(this).text('▲');
//		$('.ull').slideToggle();
		$('.ull').css('display','block');
	})
})
