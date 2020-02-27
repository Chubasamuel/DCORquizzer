<?php 
session_start(); 
?>



<!DOCTYPE html> <head><title>DCORquizzer||Login</title>
<link rel="stylesheet" href="DCORhim.css" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>





<center><form method="POST" action="validate_login.php"  class="DCORhim_login">
<fieldset class="DCORhim_login_fieldset">
<center> <span class="label">Welcome To DCORquizzer</span><h2>Login</h2>
<input type="email" class="initiallyFaint" value="Email" name="Username" onmouseout="valT(this,'Email')" onfocus="cF(this,'Email')" required/><br />
<input type="password" class="initiallyFaint" value="Password" id="pwd" name="Password" onmouseout="valT(this,'Password')" onfocus="cF(this,'Password')" required/><br /><b>
Show Password </b><input type="checkbox" onchange="showPw()" id="pwC"/> <br />
<input id="DCORhim_login_loginButton" type="submit"  value="Login" /><br />
<?php echo $_SESSION['adminLoginPDOErr']."<br />";?>
<?php echo $_SESSION['adminLoginErr']. "<br />";?>

<a href="register/">Click Here To Register</a> 

</center></fieldset>




</form></center>










<?php 
try{if(isset($_SESSION['user'])){

session_unset();
session_destroy(); }
else{ }}
catch(Exception $s){echo $s->getMessage();}
?>



<script src="DCORhim.js"></script>
</body>
</html>
