function valT(a, b) { if(a.value==''||a.value=='    '||a.value==null||a.value==0) {a.value=b; /*a.style.color="#acccaa"*/;} else {} }
function cF(a, b) {  if(a.value== b) { a.value=''; a.style.color="#669999";} else {a.value=a.value;} }
function showPw(){ 
if(document.getElementById("pwC").checked){ document.getElementById("pwd").setAttribute("type","text");
document.getElementById("cpwd").setAttribute("type","text"); }
else{ document.getElementById("pwd").setAttribute("type","password");
document.getElementById("cpwd").setAttribute("type","password"); }


}