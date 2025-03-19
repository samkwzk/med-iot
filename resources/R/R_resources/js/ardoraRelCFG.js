//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Muy bien!! Has superado el desafío"; messageTime=""; messageError="No has superado el desafío. Puedes volver a jugar."; messageErrorG="No has superado el desafío. Puedes volver a jugar."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Ug=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img alt='' src='R_resources/media/camion.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/camion.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/electricidad.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/electricidad.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/agua.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/agua.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/maquina.jpg'></div>","<div  align='center'><img alt='' src='R_resources/media/maquina.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Sensores de calidad que miden niveles de oxígeno y contaminantes.</p>","<p>Sensores de combustible que detectan niveles bajos y envían alertas a los operadores</p>","<p>Actuadores que ajustan la presión de los neumáticos según el peso de la carga transportada</p>","<p>Actuadores de corte automático para prevenir daños en caso de picos de voltaje</p>","<p>Sensores de humedad que monitorean condiciones climáticas para proteger los tableros</p>","<p>Sensores ultrasónicos detectan cambios en el nivel y emiten alertas tempranas de crecidas</p>","<p>Sensores de vibración monitorean el estado de los motores para anticipar fallos</p>","<p>Sensores de temperatura protegen los equipos al detectar sobrecalentamiento</p>"]; ansRL=["Mg==","MQ==","Mw==","NA==","MA==","NQ==","Ng==","Nw=="];
var iR=["","","","","","","",""];
var auR=[5,2,1,3,4,6,7,8];
