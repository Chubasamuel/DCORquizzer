 <!DOCTYPE html> <head><title> DCORquizzer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta charset="utf-8">
<link rel="stylesheet" href="index.css" ></head>
<body> <div id="ovAll" style="display:none"> 
<div id="timerP" style="width:50%;border:6px solid blue;background-color:black; position:fixed; display:none; border-radius:80px; border-bottom:6px solid orange; border-right:6px solid red; border-left:6px solid red; top:2%; left:25%"></div>
<div id="DCORanim2" style="position:fixed; height:25px"></div><input type="text" style="display:none" value="" id="DCORanim2I" />
<br /><!-- <br /> <br /><br />-->
 <h1> <center> <br />   
   <div id="heading"> 
<span id="discussionGroupName" style="color:#60f0f9"></span> <br /><span id="whichQuiz"></span><br /></div></center></h1>

<font style="font-weight:bold">DEDICATION: To the most Holy One <br />that giveth Wisdom and <br />every good 
<font style="font-weight:bold;color:#33dbcc;" >success</font>, Almighty God.</font><br /><br />

<style="font-weight:bold">QUIZ DETAILS: </font><br /><br />
 <b> Courses:</b><span id="courses"></span><br />
 
 <b> Time allowed:    </b>               <span id="timeAllowed"></span><br />
 <b> Test date:     </b>                     <span id="testDate"></span><br />
  
<b>  Test format:  </b>                    <span id="testFormat"></span><br />
  <b>Marking format:    </b>           <span id="markingFormat"></span><br />
 <b> Instructor:        </b>                 <span id="instructorName"></span><br /><br />


<font style="font-weight:bold">INSTRUCTIONS:</font><br ><br />
 (i) Attempt all questions<br /><br />
 (ii) Any malpractice renders the participant 
      scoring zero <br /><br />
(iii) Test is multiple choice; answer true or false for
       each options provided<br /><br />
(iv) After clicking the submit button,<br />  options marked<font style="color:#f90039"> red </font> mean that you<br /> selected the option but it was the wrong option.<br />  Options marked <font style="color:#33dbcc">green </font>are correct;<br /> while for options you did not answer,<br /> the correct options are marked in <font style="color:#3fc9f9">blue</font>.
<br /><br /> <span style="white-space:pre"><span id="instructionV">(v) When in doubt about any option,
 please <b>leave blank</b> because wrong<br /> answer attracts 
negative marking</span></span><br /><br />
<style>
body{position:absolute; }
</style>
<?php
$file_ques=fopen("./quesAns/mock.ques.txt","r");

echo(fread($file_ques,filesize("./quesAns/mock.ques.txt")));
fclose($file_ques);

?>

<div id="mainPMCQ" style="display:none"></div> 
<div id="mainPBOP" style="display:none"></div> 
<script src="DCORdiscussionClassTestSettings.js"></script>
<script src="DCORdiscussionClassTestSettingsHandler.js"></script>  
<?php

$file_ans=fopen("./quesAns/mock.ans.txt","r");
echo(fread($file_ans,filesize("./quesAns/mock.ans.txt")));
fclose($file_ans);


?>


<button onclick="markIt()" id="submitButton" style="display:none">Submit</button>
<button onclick="startTest()" id="startButton"> Start test </button>
<div id="scoreBoard" style="display:none"></div>
<div id="incompatible" style="font-weight:bold;color:red; position:relative;left:25%; top:50%"> Device not compatible. <br /> (1) Go to settings to enable javascript or, <br />
(2) Use a supported browser or<br />
(3)Use an up-to-date smartphone. 
</div>
<a name="scoreBoard"></a>
<div id="footer" style="text-align:center;margin-top:4%"></div>


</div>
<script src="DCORdiscussionClassTest.js"></script>
</body>
</html>  
