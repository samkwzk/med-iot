//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Resolver Sopa de Letras";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien! Has logrado"; messageTime="Has alcanzado el tiempo límite"; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["RElTUE9TSVRJVk9T","R0FURVdBWQ==","U0VOU09SRVM=","Q0xPVUQ=","REFUT1M=","QU5BTElTSVM=","U0VHVVJJREFE","QVVUT01BVElaQUNJT04=","Q09ORVhJT04=","QVBMSUNBQ0lPTkVT"];
var c=[12,7,8,5,5,8,9,14,8,12];
var defs=["Objetos físicos conectados a Internet, como sensores, actuadores o electrodomésticos inteligentes, que recopilan y envían datos.","Puerta de enlace que conecta los dispositivos IoT a la red principal y permite la comunicación entre ellos y la nube.","Dispositivos que detectan cambios en el entorno, como temperatura, humedad o movimiento, y los convierten en datos digitales.","Infraestructura de computación remota utilizada para almacenar, procesar y analizar datos de IoT.","Información recopilada por los dispositivos IoT y utilizada para análisis, toma de decisiones o automatización.","Proceso de examinar los datos recolectados para obtener información útil, patrones o predicciones.","Prácticas y tecnologías para proteger dispositivos IoT, redes y datos frente a accesos no autorizados o ciberataques.","Uso de tecnología IoT para ejecutar tareas o procesos de manera automática, sin intervención humana constante.","Comunicación entre dispositivos IoT, gateways y sistemas en la nube, habilitada por redes como WiFi, Bluetooth o 5G.","Software que utiliza los datos y capacidades de IoT para ofrecer funcionalidades a los usuarios, como controlar dispositivos o visualizar métricas."];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="U08="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=14; numRows=14; sizeCell=20;
var direction=["HD","VD"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
