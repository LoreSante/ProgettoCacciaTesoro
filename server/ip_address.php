<?php
        session_start();
    	header('Content-Type: text/json');
    	include("configuration.php");
    	$action = $_POST['action'];
    	$query_string = "";

    	switch($action) {
    		case "load" :
    			loadIp();
    		break;
    		case "insert" :

    		break;
    		case "update" :

    		break;
    		case "delete" :

    		break;
    	}

    		function loadIp() {

        		$ip = getenv('HTTP_CLIENT_IP')?:
                getenv('HTTP_X_FORWARDED_FOR')?:
                getenv('HTTP_X_FORWARDED')?:
                getenv('HTTP_FORWARDED_FOR')?:
                getenv('HTTP_FORWARDED')?:
                getenv('REMOTE_ADDR');

            	$response = $ip;

        		echo json_encode($response);

        }

?>