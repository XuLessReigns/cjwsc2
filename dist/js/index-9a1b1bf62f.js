$(function(){!function(){$.get("../sever/nav.json",function(i){var l="";$.each(i,function(i,a){var e="",s="";$.each(a.dl,function(i,l){var a="";$.each(l.aa,function(i,l){a+='<a href="javascript:;" target="_blank">'+l.a+"</a>"}),s+='<dl><dt><a href="javascript:;" target="_blank">'+l.dl+'</a><i></i></dt><dd class="aa">'+a+"</dd></dl>"}),$.each(a.dda,function(i,l){e+='<dd><a href="javascript:;" target="_blank" title="简布秀姿">'+l.a+"</a></dd>"}),l+='<li class="m1" sever-id="'+a.pid+'"><h3><span style="position:relative;padding-left:25px"><i class="shen_li pic_'+a.pid+'"></i><a href="'+a.url+'" target="_blank">'+a.name+'</a></span></h3><div class="menu_i" id="cat_item_1" style="display: none;"><div class="thb clearfix"><div class="wh50"><span class="ht"><a href="javascript:;" target="_blank">'+a.name+'</a></span></div><div class="wh50 rht"><a href="javascript:;" target="_blank">更多</a><i></i></div></div><div class="dlDiv dumascroll clearfix  " id="dumaScrollAreaId_42" style="position: relative;"><div id="dumaScrollAreaId_42Area" class="dumascroll_area"><div class="fl scroll">'+s+'</div></div></div><div class="bn_w clearfix" id="bn_w1"><div class="banner" id="banner_1"><div class="img"><a href="javascript:;" target="_blank"><img src="'+a.img+'" style="display: inline" index="0" alt="1"></a></div><div class="ico"><ol class="fl"><li class="cur" style="width: 34px;">0</li></ol></div></div></div><div id="adtextDiv1" class="adtextDiv"><p class="tht">品牌推荐</p><dl class="clearfix">'+e+"</dl></div></div></li>"}),$("#menu").html(l),$("#menu>li").hover(function(){$(this).children().eq(1).show()},function(){$(this).children().eq(1).hide()})})}(),function(){$.get("../sever/lunbo.json",function(i){function l(i){$(".lunBo_list_item").hide(),$(".num_list li").removeClass("on"),$(".lunBo_list_item").eq(i).fadeIn(400),$(".num_list li").eq(i).addClass("on")}function a(){t=setInterval(function(){$(".rBtn").click()},6e3)}var e="",s="";$.each(i,function(i,l){0==i?(e+='<div class="lunBo_list_item active"><a href="javascript:;"><img src="'+l.img+'"></a></div>',s+='<li class="on"><a href="javascript:;">'+(i+1)+"</a></li>"):(e+='<div class="lunBo_list_item"><a href="javascript:;"><img src="'+l.img+'"></a></div>',s+='<li class=""><a href="javascript:;">'+(i+1)+"</a></li>")}),$(".num_list").html(s),$(".lunBo_list").html(e);var t,n=0;$(".lBtn").click(function(){n--,n<0&&(n=5),l(n)}),$(".rBtn").click(function(){n++,n>=$(".lunBo_list_item").length&&(n=0),l(n)}),$(".num_list li").click(function(){n=$(this).index(),l(n)}),a(),$(".lunBo").hover(function(){clearInterval(t)},function(){a()})})}(),$.get("../sever/huiLife.json",function(i){var l="";$.each(i,function(i,a){var e="";$.each(a.img,function(i,l){e+='<dd><div class="borderDiv"><div class="Adimg"><a href="details.html" target="_blank"><img width="142" height="142" src="'+l.imgSrc+'" alt=""></a></div><div class="hd-Text"><p class="hdTitle"><a href="details.html" target="_blank">'+l.pName+'</a></p><div class="clearfix"><div class="price"><p class="jiage"><span>¥&nbsp;</span><span class="fontSize_22">'+l.price+'</span>.00</p><p class="yanjia">￥'+l.yuanjia+'</p></div><div class="dazhe">'+l.dazhe+'折</div></div></div><div class="border-left" style="overflow: hidden;"></div><div class="border-bottom" style="overflow: hidden;"></div><div class="border-top" style="overflow: hidden;"></div><div class="border-right" style="overflow: hidden;"></div></div></dd>'}),l+='<li sever-trigger="1" style="position: absolute; width: 603px; left: 0px; top: 0px; display: none;"><dl class="clearfix">'+e+"</dl></li>"}),$("#J_TModule .bd>.clearfix").html(l),function(){function i(){a=setInterval(function(){$("#J_TModule .next").click()},6e3)}var l=0;$("#J_TModule .bd>.clearfix>li").eq(l).show(),$("#J_TModule .next").click(function(){$("#J_TModule .bd>.clearfix>li").eq(l).hide(),l++,l>4&&(l=0),$("#J_TModule .bd>.clearfix>li").eq(l).fadeIn(400)}),$("#J_TModule .prev").click(function(){$("#J_TModule .bd>.clearfix>li").eq(l).hide(),l--,l<0&&(l=4),$(".bd>.clearfix>li").eq(l).fadeIn(400)});var a;i(),$("#J_TModule .banner-box").hover(function(){clearInterval(a)},function(){i()})}()}),function(){function i(i){function l(){e=setInterval(function(){$(i+" .next").click()},4e3)}$(i+" .bd>ul>li").eq(0).show();var a=0;$(i+" .next").click(function(){$(i+" .bd>ul>li").eq(a).hide(),$(i+" .hd>ul>li").eq(a).removeClass("on"),a++,a>2&&(a=0),$(i+" .bd>ul>li").eq(a).show(),$(i+" .hd>ul>li").eq(a).addClass("on")}),$(i+" .prev").click(function(){$(i+" .bd>ul>li").eq(a).hide(),$(i+" .hd>ul>li").eq(a).removeClass("on"),a--,a<0&&(a=2),$(i+" .tshop-um-sys_floor_1 .bd>ul>li").eq(a).show(),$(i+" .hd>ul>li").eq(a).addClass("on")});var e;l(),$(i+" .banner-box_small .bd").hover(function(){clearInterval(e)},function(){l()}),$(i+" #titleList443 li").mouseover(function(){$(i+" #titleList443 li").removeClass("tab"),$(this).addClass("tab"),$(i+" .rightContent").hide(),$(i+" .rightContent").eq($(this).index()).show();var l=120*parseInt($(this).index());$(i+" #scrollbanner443").css("left",l)})}i("#shopModuleId6"),i("#shopModuleId7"),i("#shopModuleId8"),i("#shopModuleId9"),i("#shopModuleId10"),i("#shopModuleId11"),i("#shopModuleId12"),i("#shopModuleId13")}(),function(){$("#backTop").click(function(){$("body,html").animate({scrollTop:0},400)}),$(document).scroll(function(){parseInt($(document).scrollTop())>parseInt($(window).height())?$("#zt_wrap #floatNav").show():$("#zt_wrap #floatNav").hide()})}()});