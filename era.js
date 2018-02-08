$(document).ready(function(){

	$('.link').mouseover(function(){
		var dest = $(this).attr('href');
		if(dest == 'index.html'){
			$('.sub-head').text('Writing');
		}
		else {
			if(dest.charAt(0) == 'e'){
			if(dest.charAt(1) == '1'){
				$('.sub-head').text('15000 BC');
			}
			else if(dest.charAt(1) == '2'){
				$('.sub-head').text('1800 BC');
			}
			else if(dest.charAt(1) == '3'){
				$('.sub-head').text('900 AD');
			}
			else if(dest.charAt(1) == '4'){
				$('.sub-head').text('1750 AD');
			}
			else if(dest.charAt(1) == '5'){
				$('.sub-head').text('1880 AD');
			}
			else {
				$('.sub-head').text('1920 AD');
			}
		}
		else if (dest.charAt(0) == 'a'){
			if(dest.charAt(1) == '2'){
				$('.sub-head').text('Cooking');
			}
			else if(dest.charAt(1) == '3'){
				$('.sub-head').text('War');
			}
			else if(dest.charAt(1) == '4'){
				$('.sub-head').text('Music');
			}
			else if(dest.charAt(1) == '5'){
				$('.sub-head').text('Eating');
			}
			else {
				$('.sub-head').text('Building');
			}
		}
		}
		
	}).mouseout(function(){
		$('.sub-head').text('');
	});
});