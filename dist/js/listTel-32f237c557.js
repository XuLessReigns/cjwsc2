$.get("../server/listTel.json",function(a){console.log(a);var s="";$.each(a,function(a,e){s+='<li><a href="#" class="img"><img src="'+e.img+'"><i></i></a><a href="#" class="name">'+e.name+'</a><p class="price"><b>'+e.price+'</b></p><p class="btm"><a href="#" class="fl">立即购买&gt;</a><span>销量：<b class="red">'+e.count+"</b></span></p></li>"}),$(".ColumnContainerCON").html(s)}),$.get("../server/listTel2.json",function(a){console.log(a);var s="";$.each(a,function(a,e){s+='<li><a href="#" class="img"><img src="'+e.img+'"><i></i></a><a href="#" class="name">'+e.name+'</a><p class="price"><b>'+e.price+"</b></p></li>"}),$(".J_L_Rcom_ColumnContainer").html(s)});