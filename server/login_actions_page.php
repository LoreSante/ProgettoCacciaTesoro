<?php

    	header('Content-Type: text/json');
    	include("configuration.php");
    	$action = $_POST['action'];
    	$query_string = "";



    	switch($action) {
    		case "load" :
    			loadData();
    		break;
    		case "insert" :

    		break;
    		case "update" :

    		break;
    		case "delete" :

    		break;
    	}


    		function loadData() {

        		$query_string = 'SELECT * FROM adminlogin';
        		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

            	// esegui la query
        		$result = $mysqli->query($query_string);
            	$keys = array();


        		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

        			$password = $row['password'];
                    $key = array('password' => $password);
        			array_push($keys, $key);

        		}

            	$response = array('keys' => $keys, 'type' => 'load');

        		// encodo l'array in JSON
        		echo json_encode($response);





        }



?>