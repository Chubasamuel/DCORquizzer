<?php 
session_start();
require_once "dbconfig.php";
$_SESSION['adminLoginErr'] ="";
$dbuser=DB_USER; $dbpass=DB_PASS;$dbname=DB_NAME;
 $dbhost=DB_HOST;$dbtable=DB_TABLE;
try{
$db= new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
$stmm=$db->prepare("SELECT * FROM $dbtable WHERE email=:usernm");
$stmm->bindParam(':usernm',$_POST['Username']);
$stmm->execute();
$stmm->setFetchMode(PDO::FETCH_ASSOC); 
$retPwdV="";$retUsnm="";
while ($r = $stmm->fetch()){
$retPwdV=$r['password'];
$retUsnm=$r['email'];
}

/*echo password_verify($_POST['Password'],$retPwdV);*/

if(password_verify($_POST['Password'],$retPwdV)){//echo "logged in";

$_SESSION['user']=$retUsnm;
$db=null;
$location="quiz.php";
$_SESSION['adminLoginErr'] = "Logged In"; 	header("Location:$location");


}
else{$_SESSION['adminLoginErr'] = "<font style='color:red'><br />Not logged In<br />Credentials could not be verified"."<br /></font>"; 
$location="/quizzer";
header("Location:$location");
}
}
catch(PDOException $er){
$_SESSION['adminLoginPDOErr']= $er->getMessage();$location="/quizzer";
header("Location:$location"); }

?>
