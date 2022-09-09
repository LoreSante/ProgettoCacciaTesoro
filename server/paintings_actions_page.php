<?php

	header('Content-Type: text/json');
	include("configuration.php");
	$action = $_POST['action'];
	$query_string = "";

	switch($action) {
		case "load" :
			loadData();
		break;
		case "search" :
        	searchData();  //cerca immagine tramite l'url nel DB
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

   		function loadData() {
    		$query_string = 'SELECT * FROM paintings ORDER BY id DESC' ;
    		$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

        	// esegui la query
    		$result = $mysqli->query($query_string);

        	$paintings = array();


        	// cicla sul risultato
    		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

    			$painting_title = $row['title'];
    			$painting_author = $row['author'];
    			$painting_year = $row['year'];
    			$painting_technique = $row['technique'];
    			$painting_position = $row['position'];
    			$painting_description = $row['description'];
    			$painting_url = $row['url'];
    			$painting_riddle = $row['riddle'];


    			$painting = array('title' => $painting_title,'author' =>$painting_author, 'year' => $painting_year, 'technique' => $painting_technique,
    			'position' => $painting_position , 'description' => $painting_description, 'url' => $painting_url, 'riddle' => $painting_riddle);
    			array_push($paintings, $painting);
    		}

        	$response = array('paintings' => $paintings, 'type' => 'load');

    		// encodo l'array in JSON
    		echo json_encode($response);
   	}

    function searchData(){
           if(isset($_POST['paintingURL'])){
               $paintingURL=$_POST['paintingURL'];
           }


           $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);

           $query_string = 'SELECT * FROM paintings WHERE url="'.$paintingURL.'"';

           $result=$mysqli->query($query_string);

            // $paintings = array();

          if($row=$result->fetch_array(MYSQLI_ASSOC)){


               $painting_title = $row['title'];
               $painting_author = $row['author'];
               $painting_year = $row['year'];
               $painting_technique = $row['technique'];
               $painting_position = $row['position'];
               $painting_description = $row['description'];
               $painting_url = $row['url'];
               $painting_riddle = $row['riddle'];

               $painting = array('title' => $painting_title,'author' =>$painting_author, 'year' => $painting_year,
                'technique' => $painting_technique,  'position' => $painting_position ,
                'description' => $painting_description, 'url' => $painting_url, 'riddle' => $painting_riddle);

              //  array_push($paintings, $painting);
          }

           $response = array('painting' => $painting, 'type' => 'search');

            //$response = array('paintings' => $paintings, 'type' => 'load');

           echo json_encode($response);


       }


?>