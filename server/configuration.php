<?php
	$db_host = 'localhost';
    $db_user = 'CacciaTesoro';
    $db_pass = 'CacciaTesoro';
    $db_name = 'caccia_al_tesoro';
	$db_connect= mysql_connect($db_host, $db_user ,$db_pass);
	if (!$db_connect) {
    die('Not connected : ' . mysql_error());
    }
    if (! mysql_select_db($db_name) ) {
    die ('Can\'t use foo : ' . mysql_error());
    }
?>

