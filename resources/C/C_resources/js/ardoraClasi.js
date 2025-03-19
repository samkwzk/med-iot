//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
paintBoard();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){calcCan();paintButtonTime();}
}
function paintQuestion() {$("#ardoraQuest").css("opacity",0);var newHtml = "";if (img_G[ram_G[indexGame]]){newHtml=newHtml+"<img alt='"+alt_G[ram_G[indexGame]]+"' src='"+dirMedia+img_G[ram_G[indexGame]]+ "'/>"}
if ((mp4_G[ram_G[indexGame]].length > 0)||(ogv_G[ram_G[indexGame]].length > 0)){var src_mp4="";var src_ogv="";
if (mp4_G[ram_G[indexGame]].length > 0){src_mp4= " <source src='"+ dirMedia+mp4_G[ram_G[indexGame]]+"' type='video/mp4'>"}
if (ogv_G[ram_G[indexGame]].length > 0){src_ogv= " <source src='"+ dirMedia+ogv_G[ram_G[indexGame]]+"' type='video/ogg'>"}
newHtml=newHtml+"<video width='200' controls>"+src_mp4+src_ogv+"</video>";}
newHtml=newHtml+"<p>";newHtml = newHtml+clasiWords(txt_G[ram_G[indexGame]])+"</p>";
$("#ardoraQuest").html(newHtml);
if (mp3_G[ram_G[indexGame]] || ogg_G[ram_G[indexGame]]){silenceAll();document.getElementById("audioQuest"+ram_G[indexGame].toString()).play(); tiAudio=true;
$("#ardoraQuest").css("cursor","pointer");$("#ardoraQuest").click(function () {silenceAll();
document.getElementById("audioQuest"+ram_G[indexGame].toString()).play();
tiAudio=true;});}else{$("#ardoraQuest").css("cursor","default");}
$("#ardoraQuest").animate({opacity: 1}, {queue: true,duration: 3000,complete: function () {}});
calcCan();
$("#ardoraQuest img").css({width:imaW[ram_G[indexGame]]+"px",height:imaH[ram_G[indexGame]]+"px",maxWidth:"100%",maxHeight:"100%",cursor: "pointer",display:"block"});
$("#ardoraQuest img").on("touchstart click", function() {var iu = $(this).attr("src").split(".");var newDivBig = $('<div id="imaForTagBig"  tabindex="0"><span class="background-image" role="img" aria-label="' + $(this).attr("alt") + '"></span></div>);');
newDivBig.css({height: "100%",width: "100%",position: "fixed",padding: "0px",margin: "0px",backgroundColor: "rgba(255,253,253,0.5)",top: "0",left: "0",display: "flex",alignItems: "center",justifyContent: "center",zindex: 500});
newDivBig.html("<img id='imaBig' alt='" + $("#ardoraAct img").attr("alt") + "' src="+$("#ardoraAct img").attr("src")+" height='auto' width='auto'>");
newDivBig.mousedown(function(e) {$("#imaForTagBig").remove();});$("body").append(newDivBig);if (info[ram_G[indexGame]].localeCompare("") != 0) {$("#imaForTagBig").append('<button id="ifbut" tabindex="0">🛈</button>');$("#imaForTagBig").append('<div id="infoText" class="infoText">' + info[ram_G[indexGame]] + '</div>');
document.getElementById("ifbut").addEventListener("click", toggleInfoText);document.getElementById("ifbut").addEventListener("keydown", function(e) {if (e.key !== "Tab") {e.preventDefault();toggleInfoText();}});$("#ifbut").mousedown(function(e) {e.stopPropagation();});
function toggleInfoText(event) {if (event) {event.stopPropagation();};var textDiv=document.getElementById("infoText");var infoButton = document.getElementById("ifbut");if (textDiv.style.display === "none" || textDiv.style.display === "") {textDiv.style.display = "block";infoButton.style.bottom = 'calc(5px + ' + textDiv.offsetHeight + 'px)';} else {textDiv.style.display = "none";infoButton.style.bottom = "0px";}}}
$("#imaForTagBig img").css({maxWidth: "90vw",maxHeight: "90vh",margin: "5px",display: "block"});$("#imaBig").css({backgroundColor:"white",display:"inline-block",position: "relative"});
$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e) {if (e.which == 27) {newDivBig.mousedown();}});});
}
function silenceAll(){if (tiAudio){$("audio").each(function(ind, e) {$(e)[0].pause();$(e)[0].currentTime=0;});tiAudio=false;}}
function paintBoard(){var newHtml = "<ul>";for (i = 0; i < txtGr.length; i++) {newHtml=newHtml+"<li id='cellG" + i.toString() + "' class='bGame'>";
newHtml=newHtml+"<div class='backbGame'><span aria-label='"+altGr[i]+"'></span> <p>"+txtGr[i]+"</p></div>";newHtml=newHtml+"</li>";}newHtml = newHtml + "</ul>";
$("#ardoraBoard").html(newHtml);$(".bGame").css("border-color", colorButton);for (i=0; i<txtGr.length;i++) {
if (imgGr[i]){var bckIma = "url('"+dirMedia+imgGr[i]+"')";$("#cellG" + i.toString()).css("background-image", bckIma);}
$("#cellG" + i.toString()).keydown(function(e) {if (e.which!=9){$(this).css("box-shadow", "inset 4px 4px 4px rgba(50,50,50,0.5)");$(this).css("border-color", colorSele);$(this).css("border-style", "solid");var idNum = this.id.substring(this.id.length-1,this.id.length);isCorrect(idNum);}});
$("#cellG" + i.toString()).click(function () {
$(this).css("box-shadow","inset 4px 4px 4px rgba(50,50,50,0.5)");
$(this).css("border-color", colorSele);
$(this).css("border-style", "solid");
var idNum=this.id.substring(this.id.length-1,this.id.length);isCorrect(idNum);});}
for (j=0; j<txtGr.length;j++) {if (mp3Gr[j] || oggGr[j]){$("#cellG" + j.toString()).mouseenter(function (){
silenceAll();idAudio="audio"+$(this).attr("id").replace("cellG","");document.getElementById(idAudio).play(); tiAudio=true;});}}
$(".bGame").mouseenter(function () {$(this).css("border-color", colorSele);$(this).css("border-style", "solid");});
$(".bGame").mouseleave(function () {$(this).css("border-color", colorButton);
$(this).css("box-shadow","4px 4px 4px rgba(50,50,50,0.5)");
$(this).css({borderColor: colorButton,borderStyle: "dashed"});});
$(".backbGame").css("background-color", colorBack);$(".backbGame p").css("color", colorText);paintQuestion();
  $(".bGame").attr("tabindex","0");$(".bGame").focus(function() {$(this).css("border-color", colorSele);$(this).css("border-style", "solid");});$(".bGame").blur(function() {$(this).css("border-color", colorButton);$(this).css("box-shadow", "4px 4px 4px rgba(50,50,50,0.5)");$(this).css({borderColor: colorButton,borderStyle: "dashed"});});
}
function randomSort() {for (i=0;i<ram_G.length;i++) {var ind=Math.floor(Math.random()*ram_G.length);
while (ram_G[ind]>-1){ind++;if (ind>=ram_G.length){ind=0;}}ram_G[ind]=i;}}
function calcCan(){var canWidth=$("#ardoraAct").css("width").replace("px", "");
var canHeight=$("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height":canHeight});}
function isCorrect(num) {calcCan();if (parseInt(clasiWords(n_G[ram_G[indexGame]]))==parseInt(num)+1){score=score+scoreInc;timeAct=timeAct+timeBon;
successes++;indexGame++;if (indexGame >=ram_G.length) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {paintBoard();}}
else{attempts++;score=score-scoreDec;if (e_G[ram_G[indexGame]]){messageError=e_G[ram_G[indexGame]];}
else{messageError=messageErrorG;}if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function clasiWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
