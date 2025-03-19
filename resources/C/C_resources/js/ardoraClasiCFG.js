//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=11; attempts=0; attemptsMax=1;
var score=0; scoreMax=11; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente!! Has superado el desafío"; messageTime=""; messageError="Uuuh será necesario que vuelvas a intentar"; messageErrorG="Uuuh será necesario que vuelvas a intentar"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["U2Vuc29yIGRlIHRlbXBlcmF0dXJh","Q8OhbWFyYSBkZSBzZWd1cmlkYWQ=","VGVybW9zdGF0bw==","Um91dGVy","QW50ZW5hIFdpRmk=","SG9zdGluZyBkZSBpbcOhZ2VuZXM=","U2Vydmlkb3IgcmVtb3Rv","QW7DoWxpc2lzIHByZWRpY3Rpdm8gZGUgbWFudGVuaW1pZW50bw==","SW50ZXJmYXogcGFyYSBnZXN0aW9uYXIgbyBtb25pdG9yZWFyIHJlZ2Fkb3Jlcw==","QWxnb3JpdG1vIGRlIGRldGVjY2nDs24gZGUgcGF0cm9uZXM=","Q2hhdGJvdCBwYXJhIHJlY2liaXIgYWxlcnRhcyBzb2JyZSBjcmVjaWVudGUgZGVsIHLDrW8="];
var img_G=["","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","",""];
var n_G=["Mg==","Mg==","Mg==","NA==","NA==","MQ==","MQ==","Mw==","NQ==","Mw==","NQ=="];
var e_G=["","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","",""];
var alt_G=["","","","","","","","","","",""];
var txtGr=["Cloud","Dispositivos","Análisis de datos","Gateway","Aplicaciones de usuarios"];
var imgGr=["0_server.jpg","0_device.png","0_analisis.png","0_router.jpg","0_app.jpg"];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var altGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Uuuh será necesario que vuelvas a intentar";
var dirMedia="C_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Qw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["0","0","0","0","0","0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0","0","0","0","0","0"];
var info=["","","","","","","","","","",""];
