<?php /*session_start();*/ ?>
<!DOCTYPE html><html>
<head><title> DCORquizzer|List</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" /> <meta charset="utf-8" />
<link rel="stylesheet" href="index.css" />
<link rel="stylesheet" href="list.css" /></head>
<body>
<div id="ovAll">
<center>
<h1 id="DCORanim1"> DCORquizzer
</h1>
<input type="text" style="display:none" value="" id="DCORanim1I" />
</center>
	<div id="quizList"> 
<?php
$somePath="./quesAns";
$directories = glob($somePath . '/*' , GLOB_ONLYDIR);
$c=count($directories);
for($i=0;$i<=$c-1;$i++){
	$dir=str_replace("./quesAns/","",$directories[$i]);
	$quizName="Basic Web Concepts";
	$quizCode=$dir;
	$quizFormat="Multiple Choice and Best Option";
	$courses="Anatomy,Medicine,Paediatrics";
	$quizInstructor="Jeremiah Chuba Samuel";
	$quizDateTime="29-02-2020";

$divOut="<div class=\"list_main_div\" onclick='goToLoc(\"quesAns/$quizCode/index.php\")'\">"."<span class=\"list_quizName\">".$quizName."</span> <span class=\"list_quizCode\"><span class=\"list_label\">Quiz Code: </span>".$quizCode."</span><span class=\"list_quizFormat\"><span class=\"list_label\">Format: </span>".$quizFormat."</span><span class=\"list_courses\"><span class=\"list_label\">Courses: </span>".$courses."</span><span class=\"list_creation\"><span class=\"list_label\">Creation: </span>".$quizDateTime."</span><span class=\"list_instructor\"><span class=\"list_label\">Instructor: </span>".$quizInstructor."</span></div>";
echo $divOut;
}
 
?>

</div>
	<br /><br /><br /><center><div id="footer">&copy; n000dl LLC<br />&copy; DCORsoft Inc<br />&copy; Jeremiah Chuba Samuel</div></center>
</div>	
<script src="list.js"></script>
</body>



</html>
