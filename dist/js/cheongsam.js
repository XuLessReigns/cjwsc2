$(function(){$("#container #ColumnContainer .item").hover(function(){console.log("123"),$("#container .item .supp").removeClass("hide"),$("#container .item .supp").addClass("show")},function(){$("#container .item .supp").removeClass("show"),$("#container .item .supp").addClass("hide")}),$.get("../sever/cheongsam.json",function(i){var a="";$.each(i,function(i,s){a+='<li class="item"><div class="box"><div class="img"><a href="javascript:;"><i></i><img src="'+s.img+'" alt=""></a></div><div class="name"><a href="javascript:;">'+s.name+'</a></div><div class="price"><i>￥</i>'+s.price+'</div><p class="supp hide"><a href="javascript:;">'+s.supp+'</a><em class="follow J_BrandFollow"><i></i>关注</em></p></div></li>'}),$("#ColumnContainer").html(a)})});