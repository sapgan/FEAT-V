<?php

session_start();
include('dbconnect.php');

$total=$_POST['total'];
$next=$_POST['next'];
$exec="president";

if(isset($_POST['pref0'])) {
	$pref0=$_POST['pref0'];
	$sql="UPDATE nopref SET votes = votes + 1 WHERE post='".$pref0."'";
}
else {

	if(isset($_POST['pref1'])) {
		$pref1=$_POST['pref1'];
	}

	if($pref1==2) {
		$sql="UPDATE ".$exec." SET votes = votes + 1 WHERE id='1'";
	}
	if($pref1==3) {
		$sql="UPDATE ".$exec." SET votes = votes + 1 WHERE id='2'";
	}
}

mysql_query($sql) or die(mysql_error());

header("Location:".$next.".php");
?>