var n=1;
$(function(){
$("#bfullscreen").on("click touchstart", function () {toggleFullScreen();});
$("#plus").on("click touchstart", function () {n+=0.1;$("#contedorTotal").css("transform","scale("+n+")");$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});
$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$("#equal").on("click touchstart", function () {n=1;$("#contedorTotal").css("transform","scale("+n+")");
$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$("#minus").on("click touchstart", function () {n-=0.1;$("#contedorTotal").css("transform","scale("+n+")");$(".fg-button").each(function() {var nu=$(this).attr("id").substring(4,12).trim();if ($("#search-engines"+nu).length>0) {$(this).trigger("click");}});
$(".positionHelper").each(function(){$(this).css("transform","scale("+n+")");});});
$(".fg-button").hover(function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); });
   $("#flat3").menu({
       content: $("#flat3").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat8").menu({
       content: $("#flat8").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat17").menu({
       content: $("#flat17").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
$("body",top.window.frames[0].document).html("<html><head></head><body><img src="+url+"></img)</body></html>");
$("#showIframe").on("load",function() {$(this).contents().find("body").css({"text-align":"center"});});
}
function toggleFullScreen() {if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen();} else if (document.documentElement.msRequestFullscreen) {document.documentElement.msRequestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) {document.documentElement.mozRequestFullScreen();} else if (document.documentElement.webkitRequestFullscreen) {document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}
} else {if (document.exitFullscreen) {document.exitFullscreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}}}
$( document ).ready(function() {do_responsive();$(window).on("resize",function(){do_responsive();});});
function do_responsive(){var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var isTablet = /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);var deviceType = "PC";if (isMobile && !isTablet) {deviceType = "Mobile";} else if (isTablet) {deviceType = "Tablet";}if (deviceType=="PC"){do_responsivePC()}if (deviceType=="Mobile"){do_responsiveMobile()}if (deviceType=="Tablet"){do_responsiveMobile()}}
function do_responsiveMobile() {$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale(1)");$("#contedorTotal").css("margin-left","-475px");$("#contedorTotal").css("left","50%");n=1;
if ($(window).height() > $(window).width()) { //V E R T I C A L == M O B I L E
$("#contedorTotal").ready(function() {$("#contedorTotal").css("margin-left","5px");$("#contedorTotal").css("left","0%");while($("#contedorTotal").width()*n>$(window).width()-10){n=n-0.001;}; $("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale("+n.toString()+")");});
} else { //H O R I Z O N T A L == M O B I L E
$("#contedorTotal").ready(function() {$("#areaMenuV").hide();$("#areaMenu").show();while($("#contedorTotal").width()*n>$(window).width()-20 || $("#contedorTotal").height()*n> $(window).height()-20){n=n-0.001;};$("#contedorTotal").css("margin-left","-"+$("#contedorTotal").width()*n/2+"px");$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale("+n.toString()+")");});
}}
function do_responsivePC() {$("#contedorTotal").width("950px");$("#ArdoraIframe").height("480px");$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale(1)");
if ($(window).height() > $(window).width()) { //V E R T I C A L
$("#contedorTotal").ready(function() {$("#contedorTotal").css("margin-left","5px");$("#contedorTotal").css("left","0%");while($("#contedorTotal").width()*n>$(window).width()-10){n=n-0.001;};$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale("+n.toString()+")");});
} else { //H O R I Z O N T A L
$("#contedorTotal").ready(function() {n=1;$("#contedorTotal").css("margin-left","-"+$("#contedorTotal").width()*n/2+"px");$("#contedorTotal").css("left","50%");
if ($("#contedorTotal").width() >= $(window).width() + 10 || $("#contedorTotal").height() >= $(window).height()) { //R E D U C I R
$("#contedorTotal").ready(function() {$("#areaMenuV").hide();$("#areaMenu").show();while($("#contedorTotal").width()*n>$(window).width()-20 || $("#contedorTotal").height()*n> $(window).height()-20){n=n-0.001;};$("#contedorTotal").css("margin-left","-"+$("#contedorTotal").width()*n/2+"px");$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale("+n.toString()+")");});
} else { // A M P L I A R
$("#contedorTotal").ready(function() {$("#areaMenu").show();while($("#contedorTotal").width()*n < $(window).width() - 20 && $("#contedorTotal").height()*n < $(window).height()-20){n=n+0.001;};$("#contedorTotal").css("margin-left","-"+$("#contedorTotal").width()*n/2+"px");$("#contedorTotal").css("transform-origin", "0 0");$("#contedorTotal").css("transform", "scale("+n.toString()+")");});}})
}}
