//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien! has logrado el desafío"; messageTime="";messageError="No es la respuesta correcta";messageErrorG="No es la respuesta correcta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="S_resources/media/";
var quest=[["¿Qué solución IoT permite optimizar rutas y reducir costos de combustible?","",""],["¿Qué solución IoT podría beneficiar a los inquilinos de un edificio?","",""],["¿Qué solución IoT podría prevenir enfermedades en la población?","",""],["¿Qué solución IoT beneficiaría a los técnicos de una fábrica?","",""]];
var altQuest=["","","",""];
var media=[["MQ==","UmFzdHJlYWRvcmVzIGVuIGNhbWlvbmVzIHBhcmEgbW9uaXRvcmVhciBydXRhcw==","0_camion.jpg","X"],["Mg==","TWVkaWNpw7NuIGRlIGNvbnN1bW8gZW5lcmfDqXRpY28gZW4gZWRpZmljaW9z","0_electricidad.jpg","X"],["Mw==","TW9uaXRvcmVvIGRlIGNhbGlkYWQgZGVsIGFndWE=","0_agua.jpg","X"],["NA==","U2Vuc29yZXMgZGUgdmlicmFjacOzbiBlbiBtw6FxdWluYXMgaW5kdXN0cmlhbGVz","0_maquina.jpg","X"]];
var alt=["Una empresa logística instala rastreadores IoT en sus camiones para optimizar rutas y reducir costos de combustible.","","",""];
var dat=[["NA==","MQ==","MA==","MQ==","MQ==","MQ=="],["NA==","Mg==","MA==","MQ==","MQ==","MQ=="],["NA==","Mw==","MA==","MQ==","MQ==","MQ=="],["NA==","NA==","MQ==","MQ==","MQ==","MQ=="],["MQ==","MQ==","MQ==","MQ==","MQ==","MQ=="],["MQ==","Mg==","MA==","MQ==","MQ==","MQ=="],["MQ==","Mw==","MA==","MQ==","MQ==","MQ=="],["MQ==","NA==","MA==","MQ==","MQ==","MQ=="],["Mg==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mg==","Mg==","MQ==","MQ==","MQ==","MQ=="],["Mg==","Mw==","MA==","MQ==","MQ==","MQ=="],["Mg==","NA==","MA==","MQ==","MQ==","MQ=="],["Mw==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mw==","Mg==","MA==","MQ==","MQ==","MQ=="],["Mw==","Mw==","MQ==","MQ==","MQ==","MQ=="],["Mw==","NA==","MA==","MQ==","MQ==","MQ=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="Uw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4];var in_act=0;
var imaW=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var info=["","","","","","","","","","","","","","","","","","","","","","","","",""];
