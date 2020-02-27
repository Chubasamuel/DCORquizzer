
var DCORanim; var DCORanimI;
var DCORanimtT; var DCORanimcC=0; 
var DCORanimT=[]; var DCORanimC;
var DCORanimR=0; var DCORanimL;
var DCORanimL2;
function doAnimate(){ try{
var B=document.getElementById(DCORanimI).value;
B+=(DCORanimT[DCORanimR])[DCORanimcC]; document.getElementById(DCORanimI).value=B;
 document.getElementById(DCORanim).innerHTML="<center><font style='color:"+DCORanimC+"; font-weight:bold; font-size:25px'>"+B+"</font></center>"; DCORanimcC+=1; 
if(document.getElementById(DCORanimI).value.length>=DCORanimT[DCORanimR].length){document.getElementById(DCORanimI).value=""; 
	//document.getElementById(DCORanim).innerHTML=""; 
	DCORanimcC=0;
if(DCORanimL>0){DCORanimR+=1; DCORanimL-=1;}
if(DCORanimL==0){DCORanimR=0; DCORanimL=DCORanimL2; }
 }  
}  catch(e){alert(e) }}


function doAssistAnim(DCORt,DCORc,DCORaT,a){
if(DCORt.match("###")){ DCORt=DCORt.split("###"); DCORanimT=DCORt} else{
DCORanimT[0]=DCORt;  }
DCORanimC=DCORc;
DCORanim=a; DCORanimI=a+"I";
DCORanimcC=0;DCORanimR=0;
DCORanimL=DCORanimT.length-1;
DCORanimL2=DCORanimL;
DCORanimtT=setInterval(doAnimate,DCORaT); }


var datAnim="Welcome To###DCORquizzer###Choose Test To Take###";
doAssistAnim(datAnim,"#ada",300,"DCORanim1");

function goToLoc(a){try{
window.location=a;}
	catch(e){alert(e);}}
