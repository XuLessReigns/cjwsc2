function travel(a,e){$(a).click(function(){$.get(e,function(a){var e="";$.each(a,function(a,n){e+='<li><a href="javascript:;" class="img"><img sever-original="'+n.img+'"></a><a href="javascript:;" class="name">'+n.content+'</a><p class="price"><b><i>￥</i>'+n.price+'</b></p><p class="btm"><a href="javascript:;" class="fl">立即购买></a><span>销量：<b class="red">'+n.numb+"</b></span></p></li>"}),$("#ColumnContainer1").html(e),$("img").lazyload({effect:"fadeIn",threshold:20,placeholder:"../images/logo.png"})});var a=$(this).index();console.log(a),$(".displaynone>a").removeClass("page-cur"),$(".displaynone>a:eq("+a+")").addClass("page-cur")})}$(function(){$.get("../sever/cloth.json",function(a){var e="";$.each(a,function(a,n){e+='<li><a href="javascript:;" class="img"><img sever-original="'+n.img+'"></a><div class="info"><a href="javascript:;" class="name">'+n.content+'</a><p class="price">特价：<b>'+n.price+'</b></p><a href="javascript:;" class="btn">立即购买</a></div></li>'}),$("#ColumnContainer").html(e),$("img").lazyload({effect:"fadeIn",threshold:20,placeholder:"../images/logo.png"})})}),travel(".displaynone>a:eq(1)","../sever/cloth1.json"),travel(".displaynone>a:eq(2)","../sever/clothButton2.json"),travel(".displaynone>a:eq(3)","../sever/clothButton3.json"),travel(".displaynone>a:eq(4)","../sever/clothButton4.json"),$(function(){$.get("../sever/cloth1.json",function(a){var e="";$.each(a,function(a,n){e+='<li><a href="javascript:;" class="img"><img sever-original="'+n.img+'"></a><a href="javascript:;" class="name">'+n.content+'</a><p class="price"><b><i>￥</i>'+n.price+'</b></p><p class="btm"><a href="javascript:;" class="fl">立即购买></a><span>销量：<b class="red">'+n.numb+"</b></span></p></li>"}),$("#ColumnContainer1").html(e),$("img").lazyload({effect:"fadeIn",threshold:20,placeholder:"../images/logo.png"})})}),$(function(){$.get("../sever/cloth2.json",function(a){var e="";$.each(a,function(a,n){e+='<li><a href="javascript:;" class="img"><img sever-original="'+n.img+'"></a><a href="javascript:;" class="name">'+n.content+'</a><p class="price"><b>'+n.price+"</b></p></li>"}),$("#ColumnContainer2").html(e),$("img").lazyload({effect:"fadeIn",threshold:20,placeholder:"../images/logo.png"})})});