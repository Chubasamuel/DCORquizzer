<?php 
session_start();

require "dbconfig.php";

if((isset($_SESSION["user"]))&&(isset($_POST["quizCode"]))){
$quizCode=$_POST["quizCode"];
$dbuser=DB_USER; $dbpass=DB_PASS;$dbname=DB_NAME;
$dbtable=$_POST["quizCode"]; $dbhost=DB_HOST;
try{
$db= new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
$db->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmm=$db->prepare("CREATE TABLE IF NOT EXISTS $dbtable(sn INT NOT NULL AUTO_INCREMENT,user VARCHAR(200) NOT NULL,quizTime VARCHAR(200) NOT NULL,bestOption VARCHAR(5) NOT NULL,multipleChoice VARCHAR(5) NOT NULL,scoreBOP VARCHAR(100),scoreMCQ VARCHAR(100),scoreOverall_n VARCHAR(100),scoreOverall VARCHAR(100),optionBOP LONGTEXT,optionMCQ LONGTEXT,PRIMARY KEY(sn))");
//$stmm->bindParam(':table_name',$dbtable);
$stmm->execute();
$db=null;

$db= new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
$db->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmm=$db->prepare("INSERT INTO $dbtable(user,quizTime,bestOption,multipleChoice,scoreBOP,scoreMCQ,scoreOverall_n,scoreOverall,optionBOP,optionMCQ)VALUES(:user,NOW(),:bestOption,:multipleChoice,:scoreBOP,:scoreMCQ,:scoreOverall_n,:scoreOverall,:optionBOP,:optionMCQ)"); 


$stmm->bindParam(':user',$_SESSION["user"]);
$stmm->bindParam(':bestOption',$_POST["bestOption"]);
$stmm->bindParam(':multipleChoice',$_POST["multipleChoice"]);
$stmm->bindParam(':scoreBOP',$_POST["scoreBOP"]);
$stmm->bindParam(':scoreMCQ',$_POST["scoreMCQ"]);
$stmm->bindParam(':scoreOverall_n',$_POST["scoreOverall_n"]);
$stmm->bindParam(':scoreOverall',$_POST["scoreOverall"]);
$stmm->bindParam(':optionBOP',$_POST["optionBOP"]);
$stmm->bindParam(':optionMCQ',$_POST["optionMCQ"]);

$stmm->execute();
$db=null;
}
catch(PDOException $er){
$errtime=date("d-m-Y , h:i:s a");
	$fi=fopen("db_err_log.txt","a+");
	fwrite($fi,"**User**: ".$_SESSION["user"]."\n"."**Error**:  ".$er->getMessage()."\n"."**Time**:".$errtime."\n\n");
	fclose($fi);

	echo($er->getMessage());
}

} 
?>
