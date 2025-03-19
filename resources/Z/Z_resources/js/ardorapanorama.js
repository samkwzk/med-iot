//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var incre=0; timerMove=0;$(document).ready(function () {
$("#area_1").on("click touchstart", function (e) {});
$("#area_1").keydown(function(e){if (e.which!=9){$("#area_1").click();}});
$('<div class="tooltip" id="tt_1">La seguridad del IoT es crítica debido a la gran cantidad de dispositivos conectados que manejan datos sensibles.<div class="arrow"></div></div>').appendTo("body");
$("#area_6").on("click touchstart", function (e) {});
$("#area_6").keydown(function(e){if (e.which!=9){$("#area_6").click();}});
$('<div class="tooltip" id="tt_6">Son dispositivos inteligentes que combinan conectividad a internet con sistemas de bloqueo avanzados, permitiendo un control remoto y seguro del acceso a puertas y recintos.<div class="arrow"></div></div>').appendTo("body");
$("#area_5").on("click touchstart", function (e) {});
$("#area_5").keydown(function(e){if (e.which!=9){$("#area_5").click();}});
$('<div class="tooltip" id="tt_5">Estas cámaras recopilan imágenes y videos que, a través de algoritmos avanzados de procesamiento, permiten identificar patrones, detectar anomalías o eventos específicos, como intrusiones, accidentes o situaciones de riesgo.<div class="arrow"></div></div>').appendTo("body");
$("#area_2").on("click touchstart", function (e) {});
$("#area_2").keydown(function(e){if (e.which!=9){$("#area_2").click();}});
$('<div class="tooltip" id="tt_2">El monitoreo en IoT permite supervisar dispositivos conectados en tiempo real, asegurando su correcto funcionamiento y optimizando recursos.<div class="arrow"></div></div>').appendTo("body");
$("#area_4").on("click touchstart", function (e) {});
$("#area_4").keydown(function(e){if (e.which!=9){$("#area_4").click();}});
$('<div class="tooltip" id="tt_4">Los routers y repetidores LAN desempeñan un papel fundamental en la infraestructura de IoT al garantizar la conectividad estable y eficiente entre dispositivos en red<div class="arrow"></div></div>').appendTo("body");
paintpoints();$( window ).resize(function() {paintpoints();});
jQuery.event.special.touchstart = {setup: function( _, ns, handle ) {this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault")});}};
jQuery.event.special.touchmove = {setup: function( _, ns, handle ) {this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault")});}};
});
function paintpoints(){var offset = $("#ima").offset();var offsetzoomer=$("#zoomer").offset();
$("#pt_1").remove();
var newpoint='<svg role="img" aria-label="point 1" id="pt_1" class="ctt_1" width="10" height="10" viewBox="0 0 5.292 5.292" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.226 -136.726)"><circle cx="95.872" cy="139.372" r="2.185" opacity=".923" fill="#FF8000" fill-rule="evenodd" stroke="#FF8000" stroke-width=".237"/><circle cx="95.872" cy="139.372" r="2.51" opacity=".923" fill="none" stroke="#91962F" stroke-width=".272"/></g></svg>';
$("#zoomer").append(newpoint);
$("#pt_1").css("position", "fixed");$("#pt_1").css("top",(offset.top+124).toString()+"px");
$("#pt_1").css("left",(offset.left+127).toString()+ "px");$("#pt_1").css("cursor","pointer");$("#pt_1").attr("alt","");
if (offset.left+127<offsetzoomer.left || offset.left+127>offsetzoomer.left+601 || offset.top+124<offsetzoomer.top || offset.top+124>offsetzoomer.top+400){$("#pt_1").remove();}
$("#pt_1").attr("tabindex","0");
$("#pt_1").on("click touchstart", function(e) {$("#area_1").click();});
$(".ctt_1").hover(function() {var linkPosition = $("#pt_1").position();$tooltip=$("#tt_1");$tooltip.css({top: linkPosition.top-$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");
}, function() {$tooltip = $("#tt_1").addClass("out");setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);});
$("#area_1").focus(function(e){$(".tooltip").removeClass("active").removeClass("out");var linkPosition = $("#pt_1").position();$tooltip=$("#tt_1");$tooltip.css({top: linkPosition.top -$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");});
$("#area_1").blur(function(e){$tooltip = $("#tt_1").addClass("out");});
$("#pt_1").keydown(function(e){if (e.which!=9){$("#area_1").click();}});
$("#pt_6").remove();
var newpoint='<svg role="img" aria-label="point 6" id="pt_6" class="ctt_6" width="10" height="10" viewBox="0 0 5.292 5.292" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.226 -136.726)"><circle cx="95.872" cy="139.372" r="2.185" opacity=".923" fill="#FF8000" fill-rule="evenodd" stroke="#FF8000" stroke-width=".237"/><circle cx="95.872" cy="139.372" r="2.51" opacity=".923" fill="none" stroke="#91962F" stroke-width=".272"/></g></svg>';
$("#zoomer").append(newpoint);
$("#pt_6").css("position", "fixed");$("#pt_6").css("top",(offset.top+334).toString()+"px");
$("#pt_6").css("left",(offset.left+350).toString()+ "px");$("#pt_6").css("cursor","pointer");$("#pt_6").attr("alt","");
if (offset.left+350<offsetzoomer.left || offset.left+350>offsetzoomer.left+601 || offset.top+334<offsetzoomer.top || offset.top+334>offsetzoomer.top+400){$("#pt_6").remove();}
$("#pt_6").attr("tabindex","0");
$("#pt_6").on("click touchstart", function(e) {$("#area_6").click();});
$(".ctt_6").hover(function() {var linkPosition = $("#pt_6").position();$tooltip=$("#tt_6");$tooltip.css({top: linkPosition.top-$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");
}, function() {$tooltip = $("#tt_6").addClass("out");setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);});
$("#area_6").focus(function(e){$(".tooltip").removeClass("active").removeClass("out");var linkPosition = $("#pt_6").position();$tooltip=$("#tt_6");$tooltip.css({top: linkPosition.top -$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");});
$("#area_6").blur(function(e){$tooltip = $("#tt_6").addClass("out");});
$("#pt_6").keydown(function(e){if (e.which!=9){$("#area_6").click();}});
$("#pt_5").remove();
var newpoint='<svg role="img" aria-label="point 5" id="pt_5" class="ctt_5" width="10" height="10" viewBox="0 0 5.292 5.292" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.226 -136.726)"><circle cx="95.872" cy="139.372" r="2.185" opacity=".923" fill="#FF8000" fill-rule="evenodd" stroke="#FF8000" stroke-width=".237"/><circle cx="95.872" cy="139.372" r="2.51" opacity=".923" fill="none" stroke="#91962F" stroke-width=".272"/></g></svg>';
$("#zoomer").append(newpoint);
$("#pt_5").css("position", "fixed");$("#pt_5").css("top",(offset.top+87).toString()+"px");
$("#pt_5").css("left",(offset.left+285).toString()+ "px");$("#pt_5").css("cursor","pointer");$("#pt_5").attr("alt","");
if (offset.left+285<offsetzoomer.left || offset.left+285>offsetzoomer.left+601 || offset.top+87<offsetzoomer.top || offset.top+87>offsetzoomer.top+400){$("#pt_5").remove();}
$("#pt_5").attr("tabindex","0");
$("#pt_5").on("click touchstart", function(e) {$("#area_5").click();});
$(".ctt_5").hover(function() {var linkPosition = $("#pt_5").position();$tooltip=$("#tt_5");$tooltip.css({top: linkPosition.top-$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");
}, function() {$tooltip = $("#tt_5").addClass("out");setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);});
$("#area_5").focus(function(e){$(".tooltip").removeClass("active").removeClass("out");var linkPosition = $("#pt_5").position();$tooltip=$("#tt_5");$tooltip.css({top: linkPosition.top -$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");});
$("#area_5").blur(function(e){$tooltip = $("#tt_5").addClass("out");});
$("#pt_5").keydown(function(e){if (e.which!=9){$("#area_5").click();}});
$("#pt_2").remove();
var newpoint='<svg role="img" aria-label="point 2" id="pt_2" class="ctt_2" width="10" height="10" viewBox="0 0 5.292 5.292" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.226 -136.726)"><circle cx="95.872" cy="139.372" r="2.185" opacity=".923" fill="#FF8000" fill-rule="evenodd" stroke="#FF8000" stroke-width=".237"/><circle cx="95.872" cy="139.372" r="2.51" opacity=".923" fill="none" stroke="#91962F" stroke-width=".272"/></g></svg>';
$("#zoomer").append(newpoint);
$("#pt_2").css("position", "fixed");$("#pt_2").css("top",(offset.top+119).toString()+"px");
$("#pt_2").css("left",(offset.left+203).toString()+ "px");$("#pt_2").css("cursor","pointer");$("#pt_2").attr("alt","");
if (offset.left+203<offsetzoomer.left || offset.left+203>offsetzoomer.left+601 || offset.top+119<offsetzoomer.top || offset.top+119>offsetzoomer.top+400){$("#pt_2").remove();}
$("#pt_2").attr("tabindex","0");
$("#pt_2").on("click touchstart", function(e) {$("#area_2").click();});
$(".ctt_2").hover(function() {var linkPosition = $("#pt_2").position();$tooltip=$("#tt_2");$tooltip.css({top: linkPosition.top-$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");
}, function() {$tooltip = $("#tt_2").addClass("out");setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);});
$("#area_2").focus(function(e){$(".tooltip").removeClass("active").removeClass("out");var linkPosition = $("#pt_2").position();$tooltip=$("#tt_2");$tooltip.css({top: linkPosition.top -$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");});
$("#area_2").blur(function(e){$tooltip = $("#tt_2").addClass("out");});
$("#pt_2").keydown(function(e){if (e.which!=9){$("#area_2").click();}});
$("#pt_4").remove();
var newpoint='<svg role="img" aria-label="point 4" id="pt_4" class="ctt_4" width="10" height="10" viewBox="0 0 5.292 5.292" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-93.226 -136.726)"><circle cx="95.872" cy="139.372" r="2.185" opacity=".923" fill="#FF8000" fill-rule="evenodd" stroke="#FF8000" stroke-width=".237"/><circle cx="95.872" cy="139.372" r="2.51" opacity=".923" fill="none" stroke="#91962F" stroke-width=".272"/></g></svg>';
$("#zoomer").append(newpoint);
$("#pt_4").css("position", "fixed");$("#pt_4").css("top",(offset.top+304).toString()+"px");
$("#pt_4").css("left",(offset.left+424).toString()+ "px");$("#pt_4").css("cursor","pointer");$("#pt_4").attr("alt","");
if (offset.left+424<offsetzoomer.left || offset.left+424>offsetzoomer.left+601 || offset.top+304<offsetzoomer.top || offset.top+304>offsetzoomer.top+400){$("#pt_4").remove();}
$("#pt_4").attr("tabindex","0");
$("#pt_4").on("click touchstart", function(e) {$("#area_4").click();});
$(".ctt_4").hover(function() {var linkPosition = $("#pt_4").position();$tooltip=$("#tt_4");$tooltip.css({top: linkPosition.top-$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");
}, function() {$tooltip = $("#tt_4").addClass("out");setTimeout(function() {$tooltip.removeClass("active").removeClass("out");}, 300);});
$("#area_4").focus(function(e){$(".tooltip").removeClass("active").removeClass("out");var linkPosition = $("#pt_4").position();$tooltip=$("#tt_4");$tooltip.css({top: linkPosition.top -$tooltip.outerHeight()-13,left: linkPosition.left - ($tooltip.width()/2)});$tooltip.addClass("active");});
$("#area_4").blur(function(e){$tooltip = $("#tt_4").addClass("out");});
$("#pt_4").keydown(function(e){if (e.which!=9){$("#area_4").click();}});
}
function playIt(sound){$("audio").each(function(){this.pause();}); var file = document.getElementById(sound);file.load();file.play();}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
