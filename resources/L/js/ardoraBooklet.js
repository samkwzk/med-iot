$(document).ready(function(){
   $.fn.booklet.defaults = {
      name:"Libro sobre IoT",
      width:800,height:550,speed:1000,direction:"LTR",
      startingPage:1,easing:"easeInOutQuad",easeIn:"easeInQuad",easeOut:"easeOutQuad",
      closedFrontTitle:"Beginning",closedFrontChapter:"Beginning of Book",closedBackTitle:"End",closedBackChapter:"End of Book",
      covers:true,
      closed:true,
      autoCenter:true,
      pagePadding:10,pageBorder:0,
	    pageNumbers:true,
	    manual:true,
      hovers:true,hoverWidth:50,hoverSpeed:500,hoverThreshold:0.25,overlays:true,tabs:false,tabWidth:60,tabHeight:20,
      nextControlText:"Next",previousControlText:"Previous",
      nextControlTitle:"Next",previousControlTitle:"Previous",
      arrows:false,
      arrowsHide:false,
      cursor:"pointer",hash:false,hashTitleText:" - Page ",
keyboard:true,
      next:null, prev:null, auto:false, delay:5000, pause:null, play:null, menu:null,pageSelector:false,chapterSelector:false,
shadows:true,shadowTopFwdWidth:166,shadowTopBackWidth:166,shadowBtmWidth:50,before:function(){},after:function(){}
      }
 $("#mybook").booklet();$(".b-prev").attr("tabindex","0");$(".b-next").attr("tabindex","0");
});
function bookgotopage(page){var bookletIndex=page+1;if (page>= 1 && page<=50) {$("#mybook").booklet("gotopage", bookletIndex);}}
function initRead() {var textoParaLeer = obtenerTextoSeleccionado();if (!textoParaLeer) {paginasActivas.forEach(function(numeroDePagina) {$("#mybook .b-page-" + numeroDePagina).each(function() {$(this).find("*").not("#bottomBar, #bottomBar *").each(function() {textoParaLeer += $(this).clone().children().remove().end().text();});});});}
if (!textoParaLeer.trim()) {textoParaLeer="error";};if (speechSynthesis.speaking) {speechSynthesis.cancel();};speech.text = textoParaLeer.trim();speech.lang = document.documentElement.lang || "es-ES";speechSynthesis.speak(speech);isListen=true;}
function obtenerTextoSeleccionado() {var texto="";if (window.getSelection) {texto=window.getSelection().toString();} else if (document.selection && document.selection.type != "Control") {texto = document.selection.createRange().text;};return texto;}
function stopRead() {speechSynthesis.cancel();isListen=false;}
speech.onend = function() {isListen = false;};
function playIt(sound){var sounds=document.getElementsByTagName("audio");for(i=0; i<sounds.length; i++) sounds[i].pause();var file=document.getElementById(sound);file.load();file.play();}
