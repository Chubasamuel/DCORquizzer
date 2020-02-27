<?php session_start(); ?>
<!DOCTYPE html><html>
<head><title> DCORquizzer||Prospective Members Registration</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta charset="utf-8">
<link rel="stylesheet" href="index.css"></head>

	<body><center> <h3> DCORquizzer<br />
	<sub>Prospective&nbsp;Members&nbsp; Registration</sub>
	</h3>
       	<div id="errDiv"><?php if(isset($_SESSION["err"])){echo $_SESSION["err"]; unset($_SESSION["err"]);
}?> </div>
	<div id="successDiv"><?php if(isset($_SESSION["successMsg"])){echo $_SESSION["successMsg"];
unset($_SESSION["successMsg"]); }?> </div>
	<form method="POST" action="register.php">
		<input type="text" name="surname" placeholder="Surname.." required />
		<input type="text" name="otherNames" placeholder="First Name, Other name" required />
		<input type="email" name="email" placeholder="Email.." required/>
		<input type="Tel" name="phone" placeholder="Phone" required/>
		<select name="level" required>
		<optgroup label="Select Your Level">
			<option selected disabled hidden> Select Your Level</option>
        <option> 600L</option>
		<option> 500L</option>
		<option> 400L</option>
		<option> 300L</option>
		<option> 200L</option>
		<option> 100L</option>
			
			</optgroup>
			</select>		<input type="password" name="password" placeholder="password" id="pwd" required />
		<input type="password" name="confirmPassword" placeholder="confirm password" id="cpwd" required  />
		 <b>
Show Password </b><input type="checkbox" onchange="showPw()" id="pwC" style="display:inline-block"/> <br />
	
		<input type="submit" value="Submit" />
		</form> </center>

	<br /><br /><br /><center><div id="footer">&copy; DCORsoft Inc<br />&copy; Jeremiah Chuba Samuel</div></center>
	<script src="valTcF.js"></script>
</body>



</html>
