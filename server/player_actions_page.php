<?php

    session_start();

	header('Content-Type: text/json');
	include("configuration.php");
	$action = $_POST['action'];
	$query_string = "";



	switch($action) {
		case "load" :
			loadData();
		break;
		case "insert" :
			insertName();
		break;
		case "update" :
	   		updateData();
		break;
		case "delete" :
			deleteData();
		break;
        case "loadDataSearchedByGame" :
            loadDataSearchedByGame();
        break;
        case "loadDataSearchedByPlayerId" :
            loadDataSearchedByPlayerId();
        break;
        case "deleteDataSearchedByPlayerId" :
            deleteDataSearchedByPlayerId();
	}

	function loadData() {
		$query_string = 'SELECT * FROM players ORDER BY id DESC' ;
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    	// esegui la query
		$result = $mysqli->query($query_string);

    	$players = array();

    	// cicla sul risultato
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

			$player_id = $row['id'];
			$player_nickname = $row['nickname'];
			$player_game = $row['game'];
			$player_points = $row['points'];
			$player_isHost = $row['ishost'];


			$player = array('id' => $player_id,'nickname' =>$player_nickname, 'game' => $player_game, 'points' => $player_points, 'ishost'=> $player_isHost);
			array_push($players, $player);
		}

    	$response = array('players' => $players, 'type' => 'load');

		// encodo l'array in JSON
		echo json_encode($response);

}


 	function loadDataSearchedByGame() {  //Restituisce l'array di giocatori che partecipano a una certa partita
        if(isset($_POST['id']))
        {
          $gameId=$_POST['id'];
        }


        $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
 	    $query_string = 'SELECT * FROM players WHERE game="'.$gameId.'"';
 		$result = $mysqli->query($query_string);
     	$players = array();

     	// cicla sul risultato
 		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
 			$player_id = $row['id'];
 			$player_nickname = $row['nickname'];
 			$player_game = $row['game'];
 			$player_points = $row['points'];
 			$player_isHost = $row['ishost'];

 			$player = array('id' => $player_id,'nickname' =>$player_nickname, 'game' => $player_game, 'points' => $player_points,'ishost' => $player_isHost);
 			array_push($players, $player);
 		}

     	$response = array('players' => $players, 'type' => 'load');

 		// encodo l'array in JSON
 		echo json_encode($response);

 }

     function  loadDataSearchedByPlayerId(){

        if (isset($_POST['id'])) $id = $_POST['id'];


        $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
        $query_string = 'SELECT * FROM players WHERE id="' . $id .'"';
        $result = $mysqli->query($query_string);
         //$players = array();

         // cicla sul risultato
         if ($row = $result->fetch_array(MYSQLI_ASSOC)) {

             $player_id = $row['id'];
             $player_nickname = $row['nickname'];
             $player_game = $row['game'];
             $player_points = $row['points'];
             $player_isHost = $row['ishost'];

             $player = array('id' => $player_id,'nickname' =>$player_nickname, 'game' => $player_game, 'points' => $player_points,'ishost' => $player_isHost);
            // array_push($players, $player);
         }

         $response = array('player' => $player, 'type' => 'loadDataSearchedByPlayerId');

         // encodo l'array in JSON
         echo json_encode($response);

     }

	function insertName() {
		if (isset($_POST['text']) && isset($_POST['game'])) {
			$player = $_POST['text'];
			$game = $_POST['game'];
		} else {
			return;
		}
		if(isset($_POST['ishost'])){
		    $isHost=$_POST['ishost'];
		}
		else{
		    $isHost=0;
		}


		$mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
		$query_string = 'INSERT INTO  players(nickname, game , points, ishost) VALUES ("' .$player .'","'.$game.'","0", "'.$isHost.'" )';
		$result=$mysqli->query($query_string);

        $_SESSION["idUser"]=$mysqli->insert_id;

    	$query_string = 'SELECT * FROM players WHERE id="' . $mysqli->insert_id .'"';
		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
		$result=$mysqli->query($query_string);

		 // cicla sul risultato
		 $players = array();
		 while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
	           $id = $row['id'];
               $nickname = $row['nickname'];
               $game = $row['game'];
               $points = $row['points'];
               $player_isHost = $row['ishost'];



               $player = array('id' => $id,'nickname' => $nickname ,'game' => $game,'points' => $points, 'ishost' => $player_isHost);

               array_push($players, $player);
         }
                $response = array('players' => $players, 'type' => 'insert');
                // encodo l'array in JSON
                echo json_encode($response);

	}
//aggiorna il codice partita di un certo giocatore, dato il suo ip

    function updateData() {
		if (isset($_POST['id'])) $id = $_POST['id'];
        if (isset($_POST['game'])) $game = $_POST['game'];



		$query_string = 'UPDATE players SET game="'. $game . '" WHERE id="' . $id .'"';

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

    //elimina giocatore sulla base dell'id ricevuto
function  deleteDataSearchedByPlayerId(){

    if (isset($_POST['id'])) $id = $_POST['id'];
    $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
    $query_string = 'DELETE FROM players WHERE id="' . $id .'"';
    $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);
    //$players = array();
    $result = $mysqli->query($query_string);
    // cicla sul risultato
    if ($mysqli->affected_rows > 0) {

        $response = array('deleted' => true, 'id' => $id, 'type' => 'delete');
        // array_push($players, $player);
    }
    else
        $response = array('deleted' => false, 'id' => $id, 'type' => 'delete');
    // encodo l'array in JSON
    echo json_encode($response);

}

?>