<?php
	/* setta il formato di risposta */
	header('Content-Type: text/json');
	include("configuration.php");

	$action = $_POST['action'];
	echo($action);
	/* conterrà la stringa di query al database */
	$query_string = "";
	/* smista secondo il tipo di richiesta */

	switch($action) {

		case "load" :
			loadData();
		break;
		case "insert" :
			echo($action);
			insertName();
		break;
		case "update" :
	   		updateData();
		break;
		case "delete" :
			deleteData();
		break;
	}
/*
	function loadData() {
		$query_string = 'SELECT * FROM to_do ORDER BY date DESC';
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query
		$result = $mysqli->query($query_string);

    	$todos = array();

    	// cicla sul risultato
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

			$todo_id = $row['id'];
			$todo_text = $row['text'];
			$to_do_completed = $row['completed'];
			$todo_date = $row['date'];

			$todo = array('id' => $todo_id,'text' =>$todo_text, 'completed' => $to_do_completed, 'date' => $todo_date);
			array_push($todos, $todo);
		}

    	$response = array('todos' => $todos, 'type' => 'load');

		// encodo l'array in JSON
		echo json_encode($response);

}
*/
/*
	function insertData() {

		if (isset($_POST['text'])) {
			$to_do_text = $_POST['text'];
		} else {
			echo "you didn't specify a text";
			return;
		}

		$query_string = "INSERT INTO to_do (text) values ('". htmlspecialchars($to_do_text) . "')";
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query per inserire il to do nel db
		$result = $mysqli->query($query_string);


    	$query_string = 'SELECT * FROM to_do WHERE ID=' . $mysqli->insert_id;

		//$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query per rileggere il record inserito
		$result = $mysqli->query($query_string);

    	$todos = array();

    	// cicla sul risultato
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

			$todo_id = $row['id'];
  			$todo_text = $row['text'];
			$to_do_completed = $row['completed'];
  			$todo_date = $row['date'];

			$todo = array('id' => $todo_id,'text' =>$todo_text, 'completed' => $to_do_completed, 'date' => $todo_date);
			array_push($todos, $todo);
		}

    	$response = array('todos' => $todos, 'type' => 'insert');

		// encodo l'array in JSON
		echo json_encode($response);

	}
*/
	function insertName() {
		echo ($_POST['text']);
		if (isset($_POST['text'])) {
			$player = $_POST['text'];
			echo "you didn't specify a name";
		} else {
			echo "you didn't specify a name";
			return;
		}

		$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
		$query_string = "INSERT INTO  players(id, nickname, game , points) VALUES ('0','"$player"','0','0')";
    	// esegui la query per inserire il name nel db
		$result = $mysqli->query($query_string);


    	$query_string = 'SELECT * FROM players WHERE ID=' . $mysqli->insert_id;

		//$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query per rileggere il record inserito
		$result = $mysqli->query($query_string);

    	$names = array();

    	// cicla sul risultato
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

			$player_id = $row['id'];
  			$player_text = $row['text'];
			$player_game = $row['game'];
  			$player_points = $row['points'];

			$name = array('id' => $player_id,'text' =>$player_text, 'completed' => $player_game, 'date' => $player_points);
			array_push($names, $name);
		}

    	$response = array('names' => $names, 'type' => 'insert');

		// encodo l'array in JSON
		echo json_encode($response);

	}

/*	function updateData() {
		if (isset($_POST['id'])) $id = $_POST['id'];
		if (isset($_POST['status'])) $status = $_POST['status'];

		$pieces = explode("_", $id);

		$query_string = 'UPDATE to_do SET completed=' . $status . ' WHERE ID=' . $pieces[1];

		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query
		$result = $mysqli->query($query_string);

		//echo $query_string;

    	if($mysqli->affected_rows > 0) {
		// encodo l'array in JSON

	  		$response = array('updated' => true, 'id' => $id, 'type' => 'update');

		} else {
	  		$response = array('updated' => false, 'id' => $id, 'type' => 'update');
		}

	echo json_encode($response);

}


	function deleteData() {

		if (isset($_POST['id'])) $id = $_POST['id'];

			$pieces = explode("_", $id);

			$query_string = 'DELETE FROM to_do WHERE ID=' . $pieces[1];

			$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    		// esegui la query
			$result = $mysqli->query($query_string);

    		if($mysqli->affected_rows > 0) {

				// encodo l'array in JSON
	  			$response = array('deleted' => true, 'id' => $id, 'type' => 'delete');
			} else {
	  			$response = array('deleted' => false, 'id' => $id, 'type' => 'delete');
	  		}

			echo json_encode($response);
	}
*/
?>