$(function(){console.log(1),$("#ls_fastloginfield_ctrl").click(function(){$("#ls_fastloginfield").show()}),$("#qmenu").mouseenter(function(){$("#qmenu_menu").css({borderTop:"none"}),$("#qmenu_menu").show()}),$("#qmenu_menu").mouseleave(function(){$("#qmenu_menu").hide()}),$("#ls_fastloginfield_ctrl").click(function(){$(".xuanze").show()}),$(".xuanze").mouseleave(function(){$(".xuanze").hide()}),$(".xuanze .email").mouseenter(function(){$(this).addClass("active")}),$(".xuanze .email").mouseleave(function(){$(this).removeClass("active")}),$(".xuanze .email").click(function(){$("#ls_fastloginfield_ctrl").html("Email"),$(".xuanze").hide()}),$(".xuanze .username").click(function(){$("#ls_fastloginfield_ctrl").html("用户名"),$(".xuanze").hide()}),$(".slideswitch").click(function(){var s=$(this).index();$(".imgs").eq(s).show();var e=function(s){$.ajax({type:"GET",url:"../sever/json1.json",dateType:"json",success:function(e){var i='<img class="imgs" src='+e[s].img+" title="+e[s].titlt+"/>";$("#slide").html(i)},error:function(s,e,i){console.log(arguments)}})};e(s)}),$(".category_l1").mouseenter(function(){$(".tit_newimg").css({background:"green"}).animate({width:"7px"},300)}),$(".category_l1").mouseleave(function(){$(".tit_newimg").css({background:"green"}).animate({width:"0"},100)}),$(".category_l2").mouseenter(function(){$(".tit_subject1").css({background:"blue"}).animate({width:"7px"},300)}),$(".category_l2").mouseleave(function(){$(".tit_subject1").css({background:"blue"}).animate({width:"0"},100)}),$(".category_l3").mouseenter(function(){$(".tit_subject2").css({background:"green"}).animate({width:"7px"},300)}),$(".category_l3").mouseleave(function(){$(".tit_subject2").css({background:"green"}).animate({width:"0"},100)}),$(".category_l4").mouseenter(function(){$(".tit_subject3").css({background:"orange"}).animate({width:"7px"},300)}),$(".category_l4").mouseleave(function(){$(".tit_subject3").css({background:"orange"}).animate({width:"0"},100)}),$(document).scroll(function(){$(this).scrollTop()>=$(window).height()?$("#scrolltop").fadeIn(200):$("#scrolltop").fadeOut(200)}),$(".scrolltopa").click(function(){$("html,body").animate({scrollTop:0},400)});var s=!0;$("#slide1").click(function(){s?($("#slide11").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),s=!1):($("#slide11").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),s=!0)});var e=!0;$("#slide5").click(function(){e?($("#slide55").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),e=!1):($("#slide55").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),e=!0)});var i=!0;$("#slide2").click(function(){i?($("#slide22").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),i=!1):($("#slide22").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),i=!0)});var t=!0;$("#slide3").click(function(){t?($("#slide33").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),t=!1):($("#slide33").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),t=!0)});var n=!0;$("#slide4").click(function(){n?($("#slide44").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),n=!1):($("#slide44").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),n=!0)});var c=!0;$("#slide6").click(function(){c?($("#onlinelist").css({display:"none"}),$(this).attr({src:"../images/collapsed_yes.gif"}),c=!1):($("#onlinelist").css({display:"block"}),$(this).attr({src:"../images/collapsed_no.gif"}),c=!0)}),$("#tip1,#tip2,#tip3,#tip4,#tip5,#tip6,#tip7,#tip8,#tip9,#tip10").tipso({useTitle:!1})});