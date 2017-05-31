

var wuzunState=0;
var gameState=1;


function noVolume(){
	$('video').get(0).defaultMuted=true;
	$('video').get(0).load();
}
function open(){
	$('.ban_open').bind('mouseenter',function(){
		$(this).children('div').stop(true).animate({'margin-bottom':'10px'},200);
	});
	$('.ban_open').bind('mouseleave',function(){
		$(this).children('div').stop(true).animate({'margin-bottom':'7px'},200);
	});
	$('.ban_open').bind('click',function(){
		$(this).stop(true).animate({'right':'-40px'},400,'easeOutExpo');
		$('.ban_mask').stop(true).animate({'right':'0%'},400,'easeOutExpo');
	});
	$('.mask2>div').bind('mouseenter',function(){
		$(this).css({'transform':'rotate(90deg)'});
	});
	$('.mask2>div').bind('mouseleave',function(){
		$(this).css({'transform':'rotate(0deg)'});
	});
	$('.mask2>div').bind('click',function(){
		$('.ban_mask').stop(true).animate({'right':'-28%'},600,'easeOutQuint');
		$('.ban_open').stop(true).animate({'right':'80px'},600,'easeOutQuint');
	});
	$('.ban_mask').bind('mouseleave',function(){
		$('.ban_mask').stop(true).animate({'right':'-28%'},600,'easeOutQuint');
		$('.ban_open').stop(true).animate({'right':'80px'},600,'easeOutQuint');
	});
}
function titleGo(){
	$('.mask1_con1 .c1').css('color','#C7A462');
	$('.mask1_con0 .c2').bind("mouseenter",function(){
		$(this).stop(true).css({'color':'#C7A462','margin-left':'-10px'});
	});
	$('.mask1_con0 .c2').bind("mouseleave",function(){
		$(this).css({'color':'#111','margin-left':'0px'});
	});
	$('.mask1_con1 .c2').bind("click",function(){
		$('body').stop(true).animate({'scrollTop':'700'},600,'easeInOutExpo',function(){
			$('.mask1_con0 .c1').css('color','#111');
			$('.mask1_con1 .c1').css('color','#C7A462');
		});
	});
	$('.mask1_con2 .c2').bind("click",function(){
		$('body').stop(true).animate({'scrollTop':'1350'},600,'easeInOutExpo',function(){
			$('.mask1_con0 .c1').css('color','#111');
			$('.mask1_con2 .c1').css('color','#C7A462');
		});
	});
	$('.mask1_con3 .c2').bind("click",function(){
		$('body').stop(true).animate({'scrollTop':'2040'},600,'easeInOutExpo',function(){
			$('.mask1_con0 .c1').css('color','#111');
			$('.mask1_con3 .c1').css('color','#C7A462');
		});
	});
	$('.mask1_con4 .c2').bind("click",function(){
		$('body').stop(true).animate({'scrollTop':'2660'},600,'easeInOutExpo',function(){
			$('.mask1_con0 .c1').css('color','#111');
			$('.mask1_con4 .c1').css('color','#C7A462');
		});
	});
	$('.mask1_con5 .c2').bind("click",function(){
		$('body').stop(true).animate({'scrollTop':'3700'},600,'easeInOutExpo',function(){
			$('.mask1_con0 .c1').css('color','#111');
			$('.mask1_con5 .c1').css('color','#C7A462');
		});
	});
}
function gameGo(){
	$('.content_game>div').bind("mouseenter",function(){
		$(this).children('div:last').stop(true).animate({'opacity':'0'},400);
	});
	$('.content_game>div').bind("mouseleave",function(){
		$(this).children('div:last').stop(true).animate({'opacity':'1'},400);
	});
	$('.content_game>div').bind("click",function(){
		gameState=gameState==0?1:0;
	});
	$('.game0').bind("click",function(){
		if(gameState==0){
			$('.game1').stop(true).delay(70).animate({'top':'460px'},800,'easeInOutExpo');
			$('.game5').stop(true).delay(90).animate({'top':'440px'},800,'easeInOutExpo');
			$('.game6').stop(true).delay(150).animate({'top':'440px'},800,'easeInOutExpo');
			$(this).stop(true).animate({'height':'440px'},800,'easeInOutExpo');
		}else{
			$(this).stop(true).animate({'height':'268px'},800,'easeInOutExpo');
			$('.game1').stop(true).delay(70).animate({'top':'288px'},800,'easeInOutExpo');
			$('.game5').stop(true).delay(90).animate({'top':'556px'},800,'easeInOutExpo');
			$('.game6').stop(true).delay(150).animate({'top':'556px'},800,'easeInOutExpo');
		}
		
	});
	$('.game1').bind("click",function(){
		if(gameState==0){
			$(this).stop(true).animate({'width':'100%','height':'550px'},800,'easeInOutExpo');
			$('.game4,.game5,.game6,.game7').stop(true).delay(90).animate({'top':'856px'},800,'easeInOutExpo');
			$('.game2,.game3').stop(true).animate({'top':'680px'},800,'easeInOutExpo');
		}else{
			$(this).stop(true).animate({'width':'260px','height':'268px'},800,'easeInOutExpo');
			$('.game4,.game5,.game6').stop(true).delay(90).animate({'top':'556px'},800,'easeInOutExpo');
			$('.game7').stop(true).delay(90).animate({'top':'820px'},800,'easeInOutExpo');
			$('.game2,.game3').stop(true).animate({'top':'288px'},800,'easeInOutExpo');
		}
	});
	$('.game5').bind("click",function(){
		if(gameState==0){
			$(this).stop(true).animate({'width':'545px','height':'500px','left':'-25px'},800,'easeInOutExpo');
			$('.game4').css('z-index','2').stop(true).animate({'left':'360px'},800,'easeInOutExpo');
		}else{
			$(this).stop(true).animate({'width':'260px','height':'268px','left':'260px'},800,'easeInOutExpo');
			$('.game4').css('z-index','2').stop(true).animate({'left':'0'},800,'easeInOutExpo');
		}
	});
	$('.game6').bind("click",function(){
		if(gameState==0){
			$(this).stop(true).animate({'width':'545px','height':'500px'},800,'easeInOutExpo');
			$('.game7').stop(true).animate({'top':'580px'},800,'easeInOutExpo');
			$('.game5').stop(true).delay(100).animate({'left':'-25px'},800,'easeInOutExpo');
		}else{
			$(this).stop(true).animate({'width':'260px','height':'268px'},800,'easeInOutExpo');
			$('.game7').stop(true).animate({'top':'820px'},800,'easeInOutExpo');
			$('.game5').stop(true).delay(100).animate({'left':'260px'},800,'easeInOutExpo');
		}
	});
}
function detailsGo(){
	$('.shift1').bind("mouseenter",function(){$(this).children().animate({'left':'-15px'},200);});
	$('.shift1').bind("mouseleave",function(){$(this).children().animate({'left':'0px'},200);});
	$('.shift2').bind("mouseenter",function(){$(this).children().animate({'right':'-15px'},200);});
	$('.shift2').bind("mouseleave",function(){$(this).children().animate({'right':'0px'},200);});
	$('.shift2').bind("click",function(){
		$('.product_img .l3').stop(true).animate({'left':'0'},600,'easeInOutExpo',function(){
			$('.l3').attr('class','l9').css('left','');
			$('.l2').attr('class','l3');
			$('.l1').attr('class','l2');
			$('.l4').attr('class','l1');
			$('.l9').attr('class','l4');
		});
	});
	$('.shift1').bind("click",function(){
		$('.l3').attr('class','l9');
		$('.product_img .l4').stop(true).animate({'left':'771px'},600,'easeInOutExpo',function(){
			$('.l4').css('left','');
			$('.l2').attr('class','l3');
			$('.l1').attr('class','l2');
			$('.l4').attr('class','l1');
			$('.l9').attr('class','l4');
		});
	});
	$('.product_img').bind('mouseenter',function(){
		$('.product_number').stop(true).animate({'left':'-105px'},800,'easeInOutExpo');
		$('.product_shift').stop(true).animate({'right':'-75px'},800,'easeInOutExpo');
		$('.product_side').stop(true).animate({'right':'0'},800,'easeInOutExpo');
		$('.product_img ul').stop(true).delay(100).animate({'right':'20%'},800,'easeInOutExpo');
		$('.side2').stop(true).delay(600).animate({'margin':'20px 0 35px'},800,'easeOutExpo');
	});
	$('.product_img').bind('mouseleave',function(){
		$('.side2').stop(true).animate({'margin':'0px'},600,'easeOutExpo');
		$('.product_number').stop(true).animate({'left':'0'},800,'easeInOutExpo');
		$('.product_shift').stop(true).animate({'right':'0'},800,'easeInOutExpo');
		$('.product_side').stop(true).animate({'right':'-40%'},800,'easeInOutExpo');
		$('.product_img ul').stop(true).delay(200).animate({'right':'0'},800,'easeInOutExpo');
	});
}
function bannerGo(){
	$('.banner').animate({'top':'0'},1000,'easeInOutExpo');
	$('.ban4').animate({'top':'380px'},1000,'easeInOutExpo');
	$('.ban2').delay(50).animate({'top':'410px'},1000,'easeInOutExpo');
	$('.ban5').delay(100).animate({'top':'478px'},1000,'easeInOutExpo');
	$('.ban3').delay(150).animate({'top':'500px'},1000,'easeInOutExpo',function(){
		$('.ban1').animate({'opacity':'1','top':'230px'},1200);
	});
}
function windowGo(){
	window.onscroll=function(){
		if($('body').scrollTop()>=1100){
			$('.hot_title').animate({'left':'0'},1000,'easeInOutExpo');
			$('.hot_img').delay(200).animate({'right':'40px'},1000,'easeInOutExpo');
			$('.hot_title>*').delay(300).animate({'margin-left':'30px'},800,'easeInOutExpo');
		}
		if($('body').scrollTop()>=1700){
			$('.product_number').animate({'left':'0'},1000,'easeInOutExpo');
			$('.product_shift').animate({'right':'0'},1000,'easeInOutExpo');
		}
	}
}
function zunGo(){
	$('.hot_img').bind("mouseenter",function(){
		$('.hot_img2').stop(true).animate({'opacity':'0'},400);
	});
	$('.hot_img').bind("mouseleave",function(){
		$('.hot_img2').stop(true).animate({'opacity':'1'},400);
	});
	$('.hot_img').bind("click",function(){
		if(wuzunState==0){
			$('.hot_img').stop(true).animate({'width':'770px','height':'550px'},600,'easeInOutExpo');
			$('.hot_title').stop(true).delay(200).animate({'top':'100px'},600,'easeInOutExpo');
			wuzunState=1;
		}else{
			$('.hot_img').stop(true).animate({'width':'350px','height':'497px'},600,'easeInOutExpo');
			$('.hot_title').stop(true).delay(200).animate({'top':'0px'},600,'easeInOutExpo');
			wuzunState=0;
		}
		
	});
}
function peopleGo(){
	$('.people_img .p1').bind("mouseenter",function(){
		$(this).attr('class','trans4 p1').css('border','1px solid #C7A462');
	});
	$('.people_img .p1').bind("mouseleave",function(){
		$(this).css('border','1px solid #050505');
	});
	$('.people_img .p1').bind("click",function(){
		var tt=$(this);
		$('.people_details2 img').attr('src',tt.children('img').attr('src'));
		$('.people_details2').css('left','1035px').stop(true).animate({'left':'535px'},1000,'easeInOutExpo',function(){
			$('.people_details img').attr('src',tt.children('img').attr('src'));
		});
	});
}
function boss(){
	$('.boss2>div').stop(true).animate({'width':'90%'},1500,'easeInOutExpo',function(){
		$('.boss').css('display','none');
		bannerGo();
	});
}






window.onload=function(){
	
	noVolume();
	
	
	open();
	titleGo();
	windowGo();
		
		
	zunGo();
	detailsGo();
	peopleGo();
	gameGo();
	
	
	boss();
	
}
















