$(function(){$.get("../sever/household01.json",function(a){var i="";$.each(a,function(a,s){i+='<ul class="clearfix" id="g_c_b_1s"><li><a href="javascript:void(0);">'+s.b1+'</a></li><li><a href="javascript:void(0);">'+s.b2+'</a></li><li><a href="javascript:void(0);">'+s.b3+'</a></li><li><a href="javascript:void(0);">'+s.b4+'</a></li><li><a href="javascript:void(0);">'+s.b5+'</a></li><li><a href="javascript:void(0);">'+s.b6+'</a></li><li><a href="javascript:void(0);">'+s.b7+'</a></li><li><a href="javascript:void(0);">'+s.b8+'</a></li><li><a href="javascript:void(0);">'+s.b9+"</a></li></ul>"}),$(".m_filter .sys_list_brand_bd .cont").html(i)}),$.get("../sever/household02.json",function(a){var i="";$.each(a,function(a,s){i+="<li><a href='javascript:;' class='img'><img src='"+s.img+"'><i></i></a><a href='javascript:;' class='name'>"+s.name+"</a><p class='price'><b><i>￥</i>"+s.price+"</b></p><p class='btm'><a href='javascript:;' class='fl'>立即购买></a><span>销量：<b class='red'>"+s.soldcont+"</b><span></p></li>"}),$("#artical #ColumnContainer").html(i)}),$.get("../sever/household03.json",function(a){var i="";$.each(a,function(a,s){i+="<li><a href='javascript:;' class='img'><img src='"+s.img+"'><i></i></a><a href='javascript:;' class='name'>"+s.name+"</a><p class='price'><b>￥"+s.price+"</b></p></li>"}),$("#J_L_Rcom_ColumnContainer").html(i)}),$.get("../sever/household04.json",function(a){var i="";$.each(a,function(a,s){i+="<li><a href='javascript:;' class='img'><img src='"+s.img+"'><i></i></a><a href='javascript:;' class='name'>"+s.name+"</a><p class='price'><b>￥"+s.price+"</b></p></li>"}),$("#J_L_Sale_ColumnContainer").html(i)})});