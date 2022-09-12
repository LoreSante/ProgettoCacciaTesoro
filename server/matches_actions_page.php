<?php
    session_start();
	header('Content-Type: text/json');
	include("configuration.php");
	$action = $_POST['action'];
	$query_string = "";



	switch($action) {
		case "load" :
			loadGame();
		break;
		case "insert" :
			insertGame();
		break;
		case "updateStatus" :
            updateStatus();
		break;
		case "delete" :
			deleteData();
		break;
        case "search":
            searchById();
        break;
        case "deleteById":
            deleteById();
        break;
	}



	function loadGame() {
		$query_string = 'SELECT * FROM matches ORDER BY id DESC';
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
		$result = $mysqli->query($query_string);
		$keys = array();

        while ($row = $result->fetch_array(MYSQLI_ASSOC))
        {
        $id = $row['id'];
        $status = $row ['status'];
        $key = array('id' => $id, 'status'=>$status);
        array_push($keys, $key);
        }

        $response = array('keys' => $keys, 'type' => 'load');

        // encodo l'array in JSON
        echo json_encode($response);

    }

    function updateStatus() {
        if (isset($_POST['id'])) $id = $_POST['id'];
        if (isset($_POST['status'])) $status = $_POST['status'];

        $query_string = 'UPDATE matches SET status="'. $status . '" WHERE id="' . $id .'"';
        $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
        $result = $mysqli->query($query_string);
        if($mysqli->affected_rows > 0) {
            // encodo l'array in JSON

            $response = array('updated' => true, 'id' => $id, 'status' => $status, 'type' => 'update');
        } else {
            $response = array('updated' => false, 'id' => $id,  'status' => $status,  'type' => 'update');
        }
        echo json_encode($response);
    }

	function insertGame() {
	    $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
	    $query_string = 'INSERT INTO matches(id) VALUES("0") ';
	    $result=$mysqli->query($query_string);
    	$query_string = 'SELECT * FROM matches WHERE id="' . $mysqli->insert_id .'"';
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
		$result=$mysqli->query($query_string);
		$query_string = 'SELECT * FROM matches ORDER BY id DESC';
		$result=$mysqli->query($query_string);
        // cicla sul risultato
        $keys = array();
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $id = $row['id'];
            $key = array('id' => $id);
            array_push($keys, $key);
        }
        $response = array('keys' => $keys, 'type' => 'load');
        // encodo l'array in JSON
        echo json_encode($response);
	}

    function searchById() {
        if(isset($_POST["id"]))
            $idGame=$_POST["id"];

        $query_string = 'SELECT * FROM matches WHERE id="'.$idGame.'"';
        $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
        $result = $mysqli->query($query_string);


        if ($row = $result->fetch_array(MYSQLI_ASSOC))
        {
            $id = $row['id'];
            $status = $row ['status'];
            $game = array('id' => $id, 'status'=>$status);

        }

        $response = array('game' => $game, 'type' => 'search');

        // encodo l'array in JSON
        echo json_encode($response);

    }

    function deleteById() {
    if(isset($_POST["id"])) $id=$_POST["id"];

    $query_string = 'DELETE FROM matches WHERE id="'.$id.'"';
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    $result = $mysqli->query($query_string);
    if($mysqli->affected_rows > 0) {
        $response = array('deleted' => true, 'id' => $id, 'type' => 'deleteById');
    }
    else {
        $response = array('deleted' => false, 'id' => $id, 'type' => 'deleteById');
    }
    echo json_encode($response);

    }


?>