function checkUserName(e){var n=window.event||e,t=userName.value,o=document.querySelector(".tipsInfo");return"focus"==n.type&&0==t.length?(o.style.display="none",o.innerHTML="",!1):"blur"==n.type&&0==t.length?(o.style.display="block",o.innerHTML="请输入手机号码",!1):0==t.length?(o.style.display="block",o.innerHTML="请输入手机号码",!1):regExpManger.mobileReg.test(t)?(o.style.display="none",!0):(o.style.display="block",o.innerHTML="手机号码格式错误",!1)}function checkCode(e){var n=window.event||e,t=code.value,o=document.querySelector(".tipsInfo");return"focus"==n.type&&0==t.length?(o.style.display="none",o.innerHTML="",!1):"blur"==n.type&&0==t.length?(o.style.display="block",o.innerHTML="请输入验证码",!1):0==t.length?(o.style.display="block",o.innerHTML="请输入验证码",!1):code.value==code2.value?(o.style.display="none",!0):(o.style.display="block",o.innerHTML="验证码格式错误",!1)}function checkPassword(e){var n=window.event||e,t=tbPassword1.value,o=document.querySelector(".tipsInfo");if("focus"==n.type&&0==t.length)return o.style.display="none",o.innerHTML="",!1;if("blur"==n.type&&0==t.length)return o.style.display="block",o.innerHTML="请输入密码",!1;if(0==t.length)return o.style.display="block",o.innerHTML="请输入密码",!1;if(t.length>=6&&t.length<=20){o.style.display="block",o.innerHTML="可以使用";var r=getLevel(t);switch(r){case 1:o.style.display="block",o.innerHTML="安全强度较弱，但是可以使用";break;case 2:o.style.display="block",o.innerHTML="安全强度适中，可以使用三种以上的组合来提高安全强度";break;default:o.style.display="block",o.innerHTML="你的密码很安全"}return!0}return o.style.display="block",o.innerHTML="密码长度不正确",!1}function checkPassword2(e){var n=window.event||e,t=tbPassword2.value,o=tbPassword1.value,r=document.querySelector(".tipsInfo");return"focus"==n.type&&0==t.length?(r.style.display="none",r.innerHTML="",!1):"blur"==n.type&&0==t.length?(r.style.display="block",r.innerHTML="请输入密码",!1):0==t.length?(r.style.display="block",r.innerHTML="请输入密码",!1):o==t?(r.style.display="block",r.innerHTML="可以使用",!0):(r.style.display="block",r.innerHTML="两次输入不一致，请重新输入",!1)}function getLevel(e){for(var n=0,t=!1,o=!1,r=!1,l=0;l<e.length;l++)if(regExpManger.wordReg.test(e[l])){if(t)continue;t=!0,n+=1}else if(regExpManger.numReg.test(e[l])){if(o)continue;o=!0,n+=1}else{if(r)continue;r=!0,n+=1}return n}var userName=document.getElementById("phone");userName.onfocus=userName.onblur=userName.onkeyup=checkUserName;var code=document.getElementById("phoneCode");code.onfocus=code.onblur=code.onkeyup=checkCode;var code2=document.getElementById("code2"),tbPassword1=document.getElementById("userpwd");tbPassword1.onfocus=tbPassword1.onblur=tbPassword1.onkeyup=checkPassword;var tbPassword2=document.getElementById("userpwd1");tbPassword2.onfocus=tbPassword2.onblur=tbPassword2.onkeyup=checkPassword2;var btn=document.getElementById("btn_reg"),agree=document.getElementById("agree"),tip=document.querySelector(".tipsInfo");btn.onclick=function(){agree.checked?checkPassword()&&checkPassword2()&&checkCode()&&checkUserName()&&(alert("恭喜您成为我们的会员~！"),location.href="login.html"):(tip.style.display="block",tip.innerHTML="请先同意协议")};var hide=document.getElementById("getPhoneCode"),arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];hide.onclick=function(){for(var e="",n=0;n<4;n++){var t=parseInt(Math.random()*arr.length);e+=arr[t]}hide.innerHTML=e,code2.value=hide.innerHTML};