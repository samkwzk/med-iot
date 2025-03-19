var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD";colorText="#000000";colorSele="#FF8000";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var itemHelp=["El hogar inteligente conectado","Monitoreo de inundación en plantaciones","Sistema de riego en grandes plantaciones","Monitoreo de germinadores en agricultura sostenibl"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_galeria1.jpeg","i_galeria2.jpg","i_galeria3.jpg","i_galeria4.jpeg"];
var altIma=["","","",""];
var fileX=["261","261","278","252"];
var fileY=["160","160","160","160"];
var txt=["Internet de las Cosas (IoT) es una de las tecnologías digitales de nueva generación con un impacto significativo en múltiples sectores, desde la industria a la agricultura. Por ejemplo un hogar inteligente equipado con dispositivos IoT para controlan luces, cerraduras, cámaras de seguridad y electrodomésticos, todo gestionado desde un smartphone o asistente de voz.","Los sensores IoT pueden ser desplegados en una plantación para medir el nivel de agua que se transmiten en tiempo real a una plataforma para prevenir inundaciones y optimizar el uso de recursos hídricos.","Sistemas de riego por aspersión en una vasta plantación utilizan datos de sensores de humedad y clima para ajustar automáticamente la irrigación y maximizar la eficiencia del agua.","Los sensores y cámaras IoT supervisan la humedad, temperatura y crecimiento de germinadores en un invernadero. La plataforma de monitoreo ayuda a garantizar el desarrollo saludable de los plantines con prácticas sostenibles."];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","",""];
var conLink=["","","",""];
