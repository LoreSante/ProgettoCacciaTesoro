<?php

	header('Content-Type: text/json');
	include("configuration.php");
	$action = $_POST['action'];
	$query_string = "";

	switch($action) {
		case "load" :
			//loadData();
		break;
		case "insert" :
			insertPainting();
		break;
		case "update" :
	   		//updateData();
		break;
		case "delete" :
			//deleteData();
		break;
	}

	function insertPainting() {
    	if (isset($_POST['title']) && isset($_POST['author']) && isset($_POST['year']) && isset($_POST['technique']) && isset($_POST['position'])&& isset($_POST['description']) && isset($_POST['url']) && isset($_POST['riddle'])) {
    		$title = $_POST['title'];
    		$author = $_POST['author'];
    		$year = $_POST['year'];
    		$technique= $_POST['technique'];
    		$position = $_POST['position'];
    		$description = $_POST['description'];
    		$url = $_POST['url'];
    		$riddle = $_POST['riddle'];
    	} else {
    		echo "you didn't specify an attribute";
    		return;
    	}
    	$mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
    	$query_string = 'INSERT INTO  paintings(title, author, year, technique, position, description, url, riddle) VALUES ("' .$title .'", "' .$author .'", "' .$year .'", "' .$technique .'","' .$position .'","' .$description.'", "' .$url.'", "' .$riddle.'")';
    	$result=$mysqli->query($query_string);
       	$query_string = 'SELECT * FROM paintings WHERE id="' . $mysqli->insert_id .'"';
   		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
   		$result=$mysqli->query($query_string);
   	}
?>