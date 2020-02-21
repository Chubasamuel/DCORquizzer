<?php
session_start();
require_once "dbconfig.php";
$_SESSION["err"]=" ";
if(!isset($_POST['surname'])||strlen($_POST['surname'])<3){
	$_SESSION["err"].="Please type in a valid surname..<br /><br />";
}
if(!isset($_POST['otherNames'])||strlen($_POST['otherNames'])<3){
	$_SESSION["err"].="Please type in a valid Firstname..<br /><br />";
}
if(!isset($_POST['email'])||!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
	$_SESSION["err"].="Please type in a valid email..<br /><br />";
}
if(!isset($_POST['phone']) ||strlen($_POST['phone'])<11){
	$_SESSION["err"].="Please type in a valid phone number..<br /><br />";
}

if(!isset($_POST['level'])){
	$_SESSION["err"].="Please select your level..<br /><br />";
}
if(!isset($_POST['password'])||strlen($_POST['password'])<8){
	$_SESSION["err"].="Please enter password not less than 8 characters..<br /><br />";
}
if($_POST['password']!=$_POST['confirmPassword']){
$_SESSION["err"].="Passwords do not match..<br /><br />";
}



if($_SESSION["err"]==" "){
$_SESSION["err"]="";
try{
	$dbuser=DB_USER; $dbpass=DB_PASS; $dbname=DB_NAME;
	$dbhost=DB_HOST;$dbtable=DB_TABLE;
 $db= new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



}
catch(PDOException $e){
echo $e->getMessage();
die();
}
$stmt = $db->prepare("SELECT email FROM $dbtable WHERE email = :email");
		$stmt->execute(array(':email' => $_POST['email']));
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		if(!empty($row['email'])){
			$_SESSION["err"] = 'Email provided is already registered.';
		header("Location:index.php"); 
exit;}

try{ 
$stmt=$db->prepare("INSERT INTO $dbtable (surname,otherNames,email,phone,level,password,RegTime) VALUES(:surname,:otherNames,:email,:phone,:level,:password,NOW())");

$stmt->bindParam(":surname",$_POST['surname']); 
$stmt->bindParam(":otherNames",$_POST['otherNames']); 
$stmt->bindParam(":email",$_POST['email']); 
$stmt->bindParam(":phone",$_POST['phone']); 
$stmt->bindParam(":level",$_POST['level']); 
$stmt->bindParam(":password",password_hash($_POST['password'],PASSWORD_DEFAULT)); 


$stmt->execute();

$db=null;
$_SESSION["successMsg"]="Dear ". $_POST['otherNames'].", <br />Your Data has been successfully saved.<br /> Thanks for registering with us.<br />[ <a href='../' style='color:blue' >Click here to Login</a>]";
header("Location:index.php");
}
catch(PDOException $e){
$_SESSION["err"].=$e->getMessage();
header("Location:index.php");
}

}
else{
$_SESSION["err"]="Sorry, we could not register you..<br />".$_SESSION["err"]; 
header("Location:index.php");
}

?>
