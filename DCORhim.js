function showPw(){ 
if(document.getElementById("pwC").checked){ document.getElementById("pwd").setAttribute("type","text"); }
else{ document.getElementById("pwd").setAttribute("type","password"); }


}

 function valT(a, b) { if(a.value==''||a.value=='    '||a.value==null||a.value==0) {a.value=b; a.style.color="#acccaa";} else {} }
function cF(a, b) {  if(a.value== b) { a.value=''; a.style.color="#669999";} else {a.value=a.value;} }

function changeBgForBtnOver(a){
a.style.backgroundColor="#33cc99"
           }
function changeBgForBtnOut(a){
a.style.backgroundColor="#33dbcc"
           }