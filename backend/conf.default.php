<?php 
	$mysql_server 	= ""; 
	$mysql_user 	= ""; 
	$mysql_password = ""; 
	$mysql_database = ""; 

	$conn = mysql_connect($mysql_server, $mysql_user, $mysql_password); 
	mysql_select_db($mysql_database); //, $conn); 
