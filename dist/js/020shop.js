var $xidingh=$("#navHeight").offset().top;$(window).scroll(function(){$(this).scrollTop()>$xidingh?$(".nav-height").addClass("active"):$(".nav-height").removeClass("active")}),$(".nav-wrap").navScroll({mobileDropdown:!0,mobileBreakpoint:700,scrollSpy:!0}),$(".click-me").navScroll({$xidingh:0}),$(".nav-wrap").on("click",".nav-mobile",function(i){i.preventDefault(),$(".list").slideToggle("fast")}),$(".tit i").hover(function(){$(this).animate({"margin-top":13},100).animate({"margin-top":17},100).animate({"margin-top":15},100)},function(){$(this).animate({"margin-top":15})}),$.get("../sever/020shop.json",function(i){$.each(i,function(i,a){var n="";$.each(a,function(i,a){n+='<li><a href="'+a.lianjie+'" class="bigimg"><img src="'+a.imgSrc+'" alt=""></a><div class="info"> <a href="'+a.connect+'"><img src="'+a.imgsrc+'" alt=""></a><a href="'+a.connect+'" class="goshop">进入店铺&gt;</a></div></li>'}),2==i&&$(".list").children().eq(8).css({"margin-left":0}),$(".list:eq("+i+")").html(n)})});