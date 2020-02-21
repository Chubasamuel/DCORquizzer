function DCORw2(a,b){try{document.getElementById(a).innerHTML="<font color=\"#60f0f9\">"+b+"</font>"; }
catch(e){alert(e); }}
function DCORw(a,b){try{document.getElementById(a).innerHTML=b; }
catch(e){alert(e); }}

DCORw("discussionGroupName",discussionGroupName);
var dateNow=new Date();
DCORw2("testDate",dateNow.getDate()+"/"+eval(dateNow.getMonth()+1)+"/"+dateNow.getFullYear());
DCORw2("courses",courses);
DCORw2("testFormat",testFormat);
DCORw2("markingFormat",markingFormat);
DCORw2("instructorName",instructorName);
DCORw("whichQuiz",whichQuiz);
var DCORtAl=timeAllowed.split("#");
DCORtAl=DCORtAl[0]+"hr "+DCORtAl[1]+"min "+DCORtAl[2]+"sec";
DCORw2("timeAllowed",DCORtAl);
document.title=whichQuiz;
document.getElementById("mainPBOP").style.color=questionsAndOptionsColor;
document.getElementById("mainPMCQ").style.color=questionsAndOptionsColor;
var bhnM=markingFormat.toString().toLowerCase();
if(!bhnM.match("negative")){
document.getElementById("instructionV").style.display="none";
}