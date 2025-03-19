//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var cssLineSty="solid";
var cssShadow="0px -4px 2px 0px rgba(50, 50, 50, 0.3)";
var indexMedia=0
var fileMp4=["A_resources/media/voz_para_investigacion.mp3#t="];
var fileOgv=[""];
var fileTxt=[""];
var fileAutoPlay=[""];
var fileLoop=[""];
var fileLabel=["Invitación a la reflexión"];
$(document).ready(function(){showVideo(indexMedia);
$("#ButTxt").click(function (){if (parseInt($("#txtBar").css("marginBottom"))<0){$("#bottomBar").css("borderTopStyle","dashed");$("#bottomBar").css("box-shadow","2px -1px 2px 0px rgba(50, 50, 50, 0.3)");$("#txtBar").animate({ "marginBottom":$("#bottomBar").css("height") });}else{$("#bottomBar").css("borderTopStyle",cssLineSty);$("#bottomBar").css("box-shadow",cssShadow);$("#txtBar").animate({ "marginBottom": "-230px"});}});
$("#goLeftBut").click(function () {if (indexMedia>0){indexMedia--;showVideo(indexMedia)}});$("#goRightBut").click(function () {if (indexMedia<fileMp4.length-1){indexMedia++;showVideo(indexMedia)}});
$("#ButTxt, #goLeftBut, #goRightBut, #buttonUp").attr("tabindex","0");
$("#ButTxt, #goLeftBut, #goRightBut, #buttonUp").focus(function(e){$(this).css("border-color","orange");});
$("#ButTxt, #goLeftBut, #goRightBut, #buttonUp").blur(function(e){$(this).css("border-color","#000000"); });
$("#ButTxt").keydown(function(e) {if (e.which!=9){$(this).trigger("click");}});
$("#goLeftBut").keydown(function(e) {if (e.which!=9){$(this).trigger("click");}});
$("#goRightBut").keydown(function(e) {if (e.which!=9){$(this).trigger("click");}});
$("#buttonUp").keydown(function(e) {if (e.which == 27) {$("#nav li ul").css("margin-left", "-999em");};if (e.which != 9 && e.which != 13 && e.which != 40 && e.which != 38) {$("#nav li ul").css("margin-left", "0");$(".submenu:first a").focus();$(".submenu:last a").blur(function() {$("#nav li ul").css("margin-left", "-999em");})}});
$(".submenu a").keydown(function(e) {if (e.which!=9){$(this).trigger("click");$("#nav li ul").css("margin-left", "-999em");}});
});
function showVideo(num){var vMute="";var vPoster="";
$("#goLeftBut").css("visibility", "visible"); $("#goRightBut").css("visibility", "visible"); if (num==0){$("#goLeftBut").css("visibility", "hidden");} if (num==fileMp4.length-1){$("#goRightBut").css("visibility","hidden");}
$("#bottomBar").css("borderBottomStyle", cssLineSty);$("#bottomBar").css("box-shadow", cssShadow);
$("#txtBar").animate({ "marginBottom": "-230px"});
if (fileTxt[num].localeCompare("")==0){$("#ButTxt").css("visibility","hidden");}else{$("#ButTxt").css("visibility","visible");}
var code="<div id='idVideo'><audio preload='auto' controls "+fileAutoPlay[num]+" "+fileLoop[num]+">";
if (fileMp4[num].localeCompare("")!=0) {code=code+"<source src='"+fileMp4[num]+"' type='audio/mpeg'/>"}
if (fileOgv[num].localeCompare("")!=0) {code=code+"<source src='"+fileOgv[num]+"' type='audio/ogg'/>"}code=code+"</audio><p>"+fileLabel[num]+"</p></div>"
$("#ardoraAct").html(code);$("#txtBar").html("<p>"+fileTxt[num]+"</p>");}
function MRVideoWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
