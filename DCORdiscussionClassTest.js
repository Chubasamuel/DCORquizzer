/*************** 
Script written by Jeremiah Chuba Samuel.

For academic purposes only.

I will not be responsible for any harm(s)/damage(s) done by the erroneous modification(s) or usage iof this software. 

For advice on how any part of this software works,
refer your request(s) to 
chubasamuel@gmail.com 

 ***************/
 
var conRedP; 

var optionsArray=[];
var MCQidHelperArr=[];
var optionsArrayBOP=[];
var scoreBOP=0; var scoreMCQ=0;
var tyu=document.getElementById("answerRefMCQ").value;
tyu=tyu.split("");
var tyu2=document.getElementById("answerRefBOP").value;
tyu2=tyu2.split("");
 
var score=0; var scoreMcp=0;
var scoreMcm=0;
var qAaMCQ; var qAaBOP;
var qAaMCQ2; var qAaBOP2;

if(multipleChoice=="true"){ 
	
 qAaMCQ=document.getElementById("questionAndAnswerMCQ").innerHTML;

} else{   qAaMCQ=undefined; }
if(bestOption=="true"){ 
 qAaBOP=document.getElementById("questionAndAnswerBOP").innerHTML;}
else{  qAaBOP=undefined; }


if(qAaMCQ!=undefined){ 
	
 qAaMCQ2=qAaMCQ.toString().split("##");
var DCORtempMCQ=qAaMCQ.toString().split("##");
var lagRead=0;
 for(i=0;i<=qAaMCQ.toString().split("##").length-1;i++){
/*var  kk=qAaMCQ.toString().split("##")[i].split("#"); 
var kklen=kk.length;*/
var DCORtempMCQ2=DCORtempMCQ[i].split("#");
var DCORtempMCQ3="<hr />"+DCORtempMCQ2[0]+"<hr /><br />";
for(k=1;k<=DCORtempMCQ2.length-1;k++){
DCORtempMCQ3+=DCORtempMCQ2[k]+"<input type=\"button\" onclick=\"ForMe3(this,\'T\',\'"+i+"Q"+eval(k-1)+"\',"+lagRead+")\" "+" id=\""+"DCORMCQT"+i+"Q"+eval(k-1)+"\""+"value=\"T\""+" />"+" <input type=\"button\" onclick=\"ForMe3(this,\'F\',\'"+i+"Q"+eval(k-1)+"\',"+lagRead+") \""+" id=\""+"DCORMCQF"+i+"Q"+eval(k-1)+"\""+" value=\"F\""+" />" ;
MCQidHelperArr[lagRead]=i+"Q"+eval(k-1);
lagRead+=1;}
qAaMCQ2[i]=DCORtempMCQ3+"<br />";
}

 }

if(qAaBOP!=undefined){

 qAaBOP2=qAaBOP.toString().split("##");
var DCORtempBOP=qAaBOP.toString().split("##");


 for(i=0;i<=qAaBOP.toString().split("##").length-1;i++)
{

var DCORtempBOP2=DCORtempBOP[i].split("#");
var DCORtempBOP3="<br />"+DCORtempBOP[i].split("#")[0];
 for(w=1;w<=DCORtempBOP2.length-1;w++){ 
DCORtempBOP3+="<br />"+"<span id=\"DCORBOPspan"+i+""+eval(w-1)+"\" >"+"<br />"+"<input type=\"radio\" name=\""+"DCORBOP"+i+"\""+"onclick=\"DCORBOPselect("+i+","+eval(w-1)+")\""+ "/>"+DCORtempBOP2[w]+"</span>";

}
qAaBOP2[i]=DCORtempBOP3+"<br />";

}

 }


function startTest(){ 
try{
clearInterval(DCORanimtT);
document.getElementById("DCORanim2").style.display="none";





var serC=/\,/gi; 



/** make this statement conditional 

document.getElementById("mainP").innerHTML=qAa2.join("");


 **/
if( qAaBOP!=undefined){
	if(qAaMCQ!=undefined) {
var btnShM="<br /><button onclick= \"showMCQ()\"> GO TO MULTIPLE CHOICE QUESTIONS</button><br />"; }
	else{ var btnShM=""; }
	document.getElementById("mainPBOP").innerHTML=qAaBOP2.join("")+btnShM;
	
	}
 if(qAaMCQ!=undefined) {
		if(qAaBOP!=undefined) {
var btnShB="<br /><button onclick= \"showBOP()\"> GO TO BEST OPTIONS</button><br />"; }
	else{ var btnShB=""; }
		document.getElementById("mainPMCQ").innerHTML=qAaMCQ2.join("")+btnShB;
	
		}
		else{ alert("Sorry... \n Couldn't start test successfully"); 
		
}

if(qAaBOP!=undefined){document.getElementById("mainPBOP").style.display="block";
	}
	else{document.getElementById("mainPMCQ").style.display="block";}
 

document.getElementById("timerP").style.display="block";
document.getElementById("submitButton").style.display="block";  

document.getElementById("startButton").style.display="none";
timeTest2(); 
doingTest=1; 
} 
catch(e){alert(e); } }

 function valT(a, b) { if(a.value==''||a.value=='    '||a.value==null||a.value==0) {a.value=b; a.style.color="#CCCCCC";} else {} }
function cF(a, b) {  if(a.value== b) { a.value=''; a.style.color="black";} else {a.value=a.value;} }

; 
var XMPP="DCORquizData"+quizCode; 
 //alert(shaC[235]+""+shaC[56]+""+shaC[92]);

function hScc(){ document.getElementById("ovAll").style.display="block"; 

/*var CFC="Welcome, "+document.getElementById("Uname").value+"   ### "+"  ###God inspired, and DCOR did it!  ### "; doAssistAnim(CFC,'green',200,'DCORanim2'); */

if(typeof(Storage)!=undefined){
if(localStorage.getItem(XMPP+"BOP")!=undefined||localStorage.getItem(XMPP+"MCQ")!=undefined){confirmRedisplay(); if(conRedP==true){startTest(); reDisplayPast();} }
}

else{ if(unescape(document.cookie).length>0){ if(unescape(document.cookie).match("quizDetail")||unescape(document.cookie).match("quizDetailBOP")){confirmRedisplay(); if(conRedP==true){startTest(); reDisplayPast(); }} }}
}

/*
var Uname=document.getElementById("Uname").value;
sUn=Uname;*/


function showPw(){ 
if(document.getElementById("pwC").checked){ document.getElementById("pwd").setAttribute("type","text"); }
else{ document.getElementById("pwd").setAttribute("type","password"); }
}

function markIt(){try{ score=0; insistSubmit();doingTest=0;} catch(e){alert(e); }}



function markIt2(){
try{ 

multipleChoiceNegative*=1; multipleChoicePositive*=1;

 scoreMcm=0; scoreMcp=0; 
for(i=0;i<=tyu.length-1;i++){    var cn=i;
if(optionsArray[i]!=="F"&&optionsArray[i]!=="T"){optionsArray[i]=""; }

  if(tyu[i]==optionsArray[i]) {
score+=1; scoreMcp=eval(scoreMcp+multipleChoicePositive); 
if(optionsArray[i]=="T"){ document.getElementById("DCORMCQT"+MCQidHelperArr[cn]).style.backgroundColor="green";}

if(optionsArray[i]=="F"){document.getElementById("DCORMCQF"+MCQidHelperArr[cn]).style.backgroundColor="green";  } 
}
 


 if(tyu[i]!==optionsArray[i]&&optionsArray[i]!==""&&optionsArray[i]!==undefined) { scoreMcm=eval(scoreMcm-multipleChoiceNegative); 
if(optionsArray[i]=="T"){  document.getElementById("DCORMCQT"+MCQidHelperArr[cn]).style.backgroundColor="red";}
if(optionsArray[i]=="F"){document.getElementById("DCORMCQF"+MCQidHelperArr[cn]).style.backgroundColor="red";  }
} 

if(optionsArray[i]==undefined||optionsArray[i]==""){ if(tyu[i]=="T"){ document.getElementById("DCORMCQT"+MCQidHelperArr[cn]).style.backgroundColor="blue";}
if(tyu[i]=="F"){document.getElementById("DCORMCQF"+MCQidHelperArr[cn]).style.backgroundColor="blue"}  
}  

  
}
scoreMCQ=eval(scoreMcp+scoreMcm);
scoreMCQ=eval(((scoreMCQ/(tyu.length))*1)*100);
scoreMCQ=scoreMCQ.toFixed(2);
  } 
catch(e){alert(e) }  }





function markIt3(){
	bestOptionPositive*=1;bestOptionNegative*=1;
scoreBOP=0;
for(j=0;j<=qAaBOP2.length-1;j++){
if(optionsArrayBOP[j]==tyu2[j]){ 
score+=1; scoreBOP=eval(scoreBOP+bestOptionPositive);
document.getElementById("DCORBOPspan"+j+""+tyu2[j]).style.backgroundColor="green"; }
else if(optionsArrayBOP[j]!=tyu2[j]&&optionsArrayBOP[j]!=undefined&&optionsArrayBOP[j]!=null){scoreBOP=eval(scoreBOP-bestOptionNegative);
document.getElementById("DCORBOPspan"+j+""+optionsArrayBOP[j]).style.backgroundColor="red"; document.getElementById("DCORBOPspan"+j+""+tyu2[j]).style.backgroundColor="blue";

}
else{document.getElementById("DCORBOPspan"+j+""+tyu2[j]).style.backgroundColor="blue"; } }

scoreBOP=eval((scoreBOP/(qAaBOP2.length))*100);
scoreBOP=scoreBOP.toFixed(2);

 }

function DCORBOPselect(a,b){
optionsArrayBOP[a]=b; 
;
}

var yrT=new Date();
var yrT2=yrT.getFullYear();
var yr2;
;
if(yrT2>2017){yr2=" - "+yrT2;}
else{yr2="";} 
var devN="<font style=\"color: white;font-family:serif;font-size:20px;\">Jeremiah Chuba Samuel, &copy; 2017"+yr2+"</font>";
var devNn="<font style=\"color: white;font-family:serif;font-size:20px;\">";
var devNm=", &copy; 2017"+yr2+"</font>";
var devNod=devN.replace(devNn,"").replace(devNm,"");
function ForMe3(a,b,c,d){try{ 
optionsArray[d]=b; 
if(b=="T"){ document.getElementById("DCORMCQF"+c).style.backgroundColor="#110044"; 
document.getElementById(a.id).style.backgroundColor="#a9c"
}
if(b=="F"){ document.getElementById("DCORMCQT"+c).style.backgroundColor="#110044"; 
document.getElementById(a.id).style.backgroundColor="#a9c"
}

} catch(e){alert(e); } }

var doingTest=0; 
justifyDev();
function insistSubmit(){ if(doingTest==1){ 
document.getElementById("submitButton").style.display="none"; 
document.getElementById("startButton").style.display="none"; 
clearInterval(timeTestTime);
document.getElementById("timerP").style.display="none";
var scoreMCQX=""; var scoreBOPX="";
if(multipleChoice=="true"){saveCurrent(); 
markIt2();
scoreMCQX="<hr />Multiple Choice score: "+scoreMCQ+"%";
} if(bestOption=="true"){ saveCurrent2();markIt3(); scoreBOPX="<hr />Best Option score: "+scoreBOP+"%";}


var colorP="black";
var scoreA;
var scoreB;
if(bestOption=="true"&&multipleChoice=="true"){scoreB=eval(((scoreMCQ*1)+(scoreBOP*1))/2).toFixed(2); scoreA=((score/((tyu.length)+(tyu2.length*1)))*100).toFixed(2);}
else if(bestOption=="true"&&multipleChoice!="true"){scoreB=scoreBOP;
scoreA=((score/(tyu2.length*1))*100).toFixed(2)
 }
else if(bestOption!="true"&&multipleChoice=="true"){scoreB=scoreMCQ;  
scoreA=((score/(tyu.length))*100).toFixed(2)
}
else{}
;
if(scoreB<0){ scoreB="less than zero"; }
if(scoreB>=70){colorP="green";}
else if(scoreB<70&&scoreB>=50){ colorP="blue"; }
else if(scoreB<50&&scoreB>=40){ colorP="orange"}
else if(scoreB<40){colorP="red"}
 else{}



document.getElementById("scoreBoard").style.display="block";

document.getElementById("scoreBoard").innerHTML="<div id=\"progress\" style=\"width:80%;height:5%;background-color:white;color:green;\"><center><span id=\"progress_display\"></span></center></div>";

//upload_score with progress bar
var progressBar = document.getElementById("progress");

var  display_p = document.getElementById("progress_display");
function upload_score(data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../../upload_score.php", true);
  if (xhr.upload) {
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        progressBar.style.width = Math.floor((e.loaded/e.total)*100)+"%";
        display_p.innerHTML = Math.floor((e.loaded / e.total) * 100) + '%';
      }
    }
    xhr.upload.onloadstart = function(e) {
      progressBar.style.width = 0;
	    uploaded_prog=0;
      display_p.innerHTML = '0%';
    }
    xhr.upload.onloadend = function(e) {
      progressBar.style.width = e.loaded;
document.getElementById("scoreBoard").innerHTML="<br />"+" Your scores are:<br /><hr />"+"<font style=\"color:"+colorP+"\">"+scoreMCQX+scoreBOPX+"<hr />Score [no negative marking] : "+scoreA+"%<hr />Overall score :"+scoreB+"%";

    }
  }
  xhr.send(data);
}

function buildFormData() {	
  var f_data=new FormData();

	f_data.append("quizCode",quizCode);
	f_data.append("bestOption",bestOption);
	f_data.append("multipleChoice",multipleChoice);

	f_data.append("scoreBOP",scoreBOP);
	f_data.append("scoreMCQ",scoreMCQ);
	f_data.append("scoreOverall_n",scoreA);
	f_data.append("scoreOverall",scoreB);
	f_data.append("optionBOP",optionsArrayBOP);
	f_data.append("optionMCQ",optionsArray);
  return f_data;
}

window.location="#scoreBoard";
try{
upload_score(buildFormData());}
catch(e){alert(e);}

}}
function justifyDev(){try{ if(devNod!=="Jeremiah Chuba Samuel"){document.body.innerHTML="<center><font color=\"red\">"+"We are sorry!<br />Change of developer\'s name unsuccessful...</font></center>";} } catch(e){alert(e)}}
var tTimet=timeAllowed.toString().split("#");
var hr=tTimet[0]; var min=tTimet[1]; var sec=tTimet[2];
var colorT="white";
var timeTestTime;



function writeTime(){
if(hr==0&&min<=10){ colorT="red"; }
hrH=hr;minH=min;secH=sec;
if(hr.toString().length==1){hrH="0"+hr;}
if(min.toString().length==1){minH="0"+min;}
if(sec.toString().length==1){secH="0"+sec;}
var timeData=hrH+":"+minH+":"+secH;
document.getElementById("timerP").innerHTML="<center><span style=\"font-weight:bold;\"><font color=\"green\" >D</font><font color=\"magenta\">C</font><font color=\"cyan\">O</font><font color=\"orange\">R</font></span><br /><font style=\"color:"+colorT+";font-weight:bold\">"+timeData+"</center>";
}

function timeTest(){ 
var hrH=hr;var minH=min;var secH=sec;
if(sec>0){sec-=1}
writeTime();
if(sec<=0&&min>0){sec=60; min-=1; }
if(min<=0&&hr>0&&sec<=0){ min=59;sec=59; hr-=1; }
if(sec<=0&&min<=0&&hr<=0){clearInterval(timeTestTime); 
markIt();}
}

function timeTest2(){
writeTime();
timeTestTime=setInterval(timeTest,1000); }


function saveCurrent(){ var t=XMPP+"MCQ";
 var nowD= new Date();
nowD.setDate(nowD.getDate()+14); 
var cookievalue=escape(optionsArray.toString())+";"
var LSvalue=escape(optionsArray.toString());
if(typeof(Storage)!=undefined){localStorage.setItem(t,LSvalue); }
else{ 
document.cookie="quizDetail="+cookievalue+";expires="+nowD.toUTCString(); }
}



function saveCurrent2(){

var t=XMPP+"BOP";
 var nowD= new Date();
nowD.setDate(nowD.getDate()+14); 
var cookievalue=escape(optionsArrayBOP.toString())+";"
; var LSvalue=escape(optionsArrayBOP.toString());
if(typeof(Storage)!=undefined){localStorage.setItem(t,LSvalue); }
else{ 
document.cookie="quizDetailBOP="+cookievalue+";expires="+nowD.toUTCString(); }
}



function confirmRedisplay(){conRedP=confirm("Do you want to display the previous quiz session? \n\nThis may take a few seconds to complete.");  }




function reDisplayPast(){try{
var hat; var hatBOP; 

var MCQXMPP=XMPP+"MCQ"; var BOPXMPP=XMPP+"BOP";

if(typeof(Storage)!==undefined){
if(multipleChoice=="true"){
 hat=(unescape(localStorage.getItem(MCQXMPP))).split(","); }
if(bestOption=="true"){hatBOP=(unescape(localStorage.getItem(BOPXMPP))).split(",");}

} 
else{ 
hat=unescape(document.cookie); if(multipleChoice=="true"){
if(hat.length>0&&hat.match("quizDetail")){
hat=hat.split(";");
var hat2=hat[0].split("=")[1];
hat=hat2.split(","); } 
} 
if(bestOption=="true"){
if(hatBOP.length>0&&hatBOP.match("quizDetailBOP")){
hatBOP=hatBOP.split(";");
var hatBOP2=hatBOP[0].split("=")[1];
hatBOP=hatBOP2.split(","); } 
}
}
var doOrDont; var doOrDontBOP;

if(multipleChoice=="true"){
for(h=0;h<=hat.length-1;h++){
if(hat[h]!=="T"&&hat[h]!=="F"&&hat[h]!==""&&hat[h]!==undefined){doOrDont=0;}

else{ doOrDont=1; doingTest=1; }
 

 
} 
};
if(bestOption=="true"){
for(k=0;k<=hatBOP.length-1;k++){
if(hatBOP[k]==""||hatBOP[k]==undefined){doOrDontBOP=0;}

else{ doOrDontBOP=1; doingTest=1; }
 


}
}; 

if(doOrDont==1||doOrDontBOP==1){
if(doOrDontBOP==1){
optionsArrayBOP=hatBOP;
 document.getElementById("mainPBOP").style.display="block"
} else{}

if(doOrDont==1){
optionsArray=hat;
 document.getElementById("mainPMCQ").style.display="block"
} else{}


;markIt(); } 


}catch(e){alert(e); } } 




document.getElementById("incompatible").style.display="none";
document.getElementById("footer").innerHTML=devN;
var DCORanim; var DCORanimI;
var DCORanimtT; var DCORanimcC=0; 
var DCORanimT=[]; var DCORanimC;
var DCORanimR=0; var DCORanimL;
var DCORanimL2;
function doAnimate(){ try{
var B=document.getElementById(DCORanimI).value;
B+=(DCORanimT[DCORanimR])[DCORanimcC]; document.getElementById(DCORanimI).value=B;
 document.getElementById(DCORanim).innerHTML="<center><font style='color:"+DCORanimC+"; font-weight:bold; font-size:25px'>"+B+"</font></center>"; DCORanimcC+=1; 
if(document.getElementById(DCORanimI).value.length>=DCORanimT[DCORanimR].length){document.getElementById(DCORanimI).value=""; document.getElementById(DCORanim).innerHTML=""; DCORanimcC=0;
if(DCORanimL>0){DCORanimR+=1; DCORanimL-=1;}
if(DCORanimL==0){DCORanimR=0; DCORanimL=DCORanimL2; }
 }  
}  catch(e){alert(e) }}


function doAssistAnim(DCORt,DCORc,DCORaT,a){
if(DCORt.match("###")){ DCORt=DCORt.split("###"); DCORanimT=DCORt} else{
DCORanimT[0]=DCORt;  } DCORanimC=DCORc;
DCORanimC=DCORc;
DCORanim=a; DCORanimI=a+"I";
DCORanimcC=0;DCORanimR=0;
DCORanimL=DCORanimT.length-1;
DCORanimL2=DCORanimL;
DCORanimtT=setInterval(doAnimate,DCORaT); }


/*var datAnim="You must login to take test "+"###Enter your login details below: ###'"+discussionGroupName.toString()+"' discussion group  ###";
doAssistAnim(datAnim,"green",200,"DCORanim1");*/
if(typeof(Storage)!==undefined){ if(sessionStorage.getItem("DCORUD")!==undefined&&sessionStorage.getItem("DCORUD")!==""&&sessionStorage.getItem("DCORUD")!==null){ sUn=(sessionStorage.getItem("DCORUD")).split("@@")[0];   /*document.getElementById("Uname").value=sUn; */
hScc();  } }
 


function showMCQ(){document.getElementById("mainPBOP").style.display="none"; document.getElementById("mainPMCQ").style.display="block";}

function showBOP(){document.getElementById("mainPMCQ").style.display="none"; document.getElementById("mainPBOP").style.display="block";
	}
	
hScc();

