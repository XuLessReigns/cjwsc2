var opeateCookie={createPid:function(n){var i=$.cookie("shangp");if(i){for(var o=i.split("|"),e=n.split("#"),a=0,t=o.length;a<t;a++){var r=o[a],s=r.split("#");if(s[0]==e[0]&&s[6]==e[6]){s[7]=parseInt(s[7])+parseInt(e[7]),o[a]=s.join("#");break}a==t-1&&(o[t]=n)}i=o.join("|"),$.cookie("shangp",i)}else $.cookie("shangp",n)},objChangestr:function(n){var i="";return $.each(n,function(o,e){i+=o!=n.length-1?e+"#":e}),i},addPid:function(n,i,o){var e=$.cookie("shangp"),a=e.split("|");$.each(a,function(t,r){var s=r.split("#");s[0]==n&&s[6]==i&&(o?s[7]=parseInt(s[7])+1:s[7]=parseInt(s[7])-1,a[t]=s.join("#"),e=a.join("|"),$.cookie("shangp",e))})},removePid:function(n,i){var o=$.cookie("shangp"),e=o.split("|");$.each(e,function(a,t){var r=t.split("#");if(r[0]==n&&r[6]==i)return e.splice(a,1),o=e.join("|"),$.cookie("shangp",o),!1})}};