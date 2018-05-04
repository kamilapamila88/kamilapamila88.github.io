$(document).ready(function(){$(".current").removeAttr('title');});
// stickyNav


$ (window) .scroll (function () { 
var y = $ (window) .scrollTop (); 
//alert(y); 
if (y>10){ 
$("header").css({"height": "29", "border-top": "none", "position": "fixed", "top": "0"}); 
}else $("header").css({"height": "190", "border-top": "11", "position": "relative", "top": "0"});});