<?php
        session_start();
        header('Content-Type: text/json');
        include("configuration.php");
        $action = $_POST['action'];

     switch($action) {
         case "getIdUser" :
             getIdUser();
         break;
         case "getPaintingsArray" :
             getPaintingsArray();
         break;
         case "setPaintingsArray" :
             setPaintingsArray();
         break;


     }

    function getIdUser(){
         $response=$_SESSION['idUser'];
         echo json_encode($response);
    }

    function getPaintingsArray(){
         $response=$_SESSION['paintingsArray'];
         echo json_encode($response);
    }

    function setPaintingsArray(){
         if(isset($_POST['paintingsArray'])) {
             $_SESSION['paintingsArray'] = $_POST['paintingsArray'];
             insertPaintingsArray();
         }

        $response=$_SESSION['paintingsArray'];
        echo json_encode($response);
    }


    function insertPaintingsArray(){
        $playerId=$_SESSION['idUser'];
        $paintingsArray=$_SESSION['paintingsArray'];

        $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);

        $query_string = 'SELECT game FROM players WHERE id="' . $playerId .'"';
        $result = $mysqli->query($query_string);
        if($row = $result->fetch_array(MYSQLI_ASSOC)){
            $game=$row['game'];
        }


        $length=count($paintingsArray);

        $resultArray=array();

        for($i=0; $i<$length; $i++){

            $query_string = 'INSERT INTO  paintingsingame(idgame, idpainting, riddleorder) VALUES ("' .$game .'", "' .$paintingsArray[$i]['id'] .'", "' .$i .'")';
            $result = $mysqli->query($query_string);

        }

        $query_string = 'SELECT * FROM paintingsingame WHERE idgame="' . $game .'"';
        $result = $mysqli->query($query_string);

        //Risultati per testing
        /*
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $idGame = $row['idgame'];
                $idPainting = $row['idpainting'];
                $riddleOrder = $row['riddleorder'];

                $paintingInfo = array('idgame' => $idGame,'idpainting' => $idPainting,'riddleorder' =>$riddleOrder);
                array_push($resultArray, $paintingInfo);
        }

        $response=$resultArray;
        echo json_encode($response);
        */
    }

    function loadPaintingsArray(){

        $playerId=$_SESSION['idUser'];
        //$paintingsArray=$_SESSION['paintingsArray'];

        $mysqli = new mysqli(DB_HOST,DB_USER, DB_PASSWORD,DB_DATABASE);

        $query_string = 'SELECT game FROM players WHERE id="' . $playerId .'"';
        $result = $mysqli->query($query_string);
        if($row = $result->fetch_array(MYSQLI_ASSOC)){
            $game=$row['game'];
        }


        $query_string = 'SELECT paintings.id, paintings.title, paintings.author, paintings.year, paintings.technique, paintings.position, paintings.description, paintings.url, paintings.riddle 
    FROM paintingsingame RIGHT JOIN paintings ON paintingsingame.idpainting=paintings.id 
    WHERE paintingsingame.idgame="' . $game .'" ORDER BY paintingsingame.riddleorder';
        $result = $mysqli->query($query_string);

        $paintings=array();

        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $painting_id = $row['id'];
            $painting_title = $row['title'];
            $painting_author = $row['author'];
            $painting_year = $row['year'];
            $painting_technique = $row['technique'];
            $painting_position = $row['position'];
            $painting_description = $row['description'];
            $painting_url = $row['url'];
            $painting_riddle = $row['riddle'];


            $painting = array('id' => $painting_id,'title' => $painting_title,'author' =>$painting_author, 'year' => $painting_year, 'technique' => $painting_technique,
                'position' => $painting_position , 'description' => $painting_description, 'url' => $painting_url, 'riddle' => $painting_riddle);
            array_push($paintings, $painting);
        }

        $_SESSION['paintingsArray']=$paintings;

        //$response = array('paintings' => $paintings, 'type' => 'load');

        //echo json_encode($response);

    }

    function deleteByGameId(){
         if(isset($_POST['idGame']))
             $idGame=$_POST['idGame'];

        $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
        $query_string = 'DELETE FROM paintingsingame WHERE idgame="'.$idGame.'"';

        $result = $mysqli->query($query_string);

        if($mysqli->affected_rows > 0) {
            // encodo l'array in JSON

            $response = array('updated' => true, 'id' => $idGame, 'type' => 'delete');

        } else {
            $response = array('updated' => false, 'id' => $idGame, 'type' => 'delete');
        }

        echo json_encode($response);


    }




/*
$sql = "SELECT paintings.id, paintings.title, paintings.author, paintings.year, paintings.technique, paintings.position, paintings.description, paintings.url, paintings.riddle\n"

. "FROM paintingsingame\n"

. "RIGHT JOIN paintings ON paintingsingame.idpainting=paintings.id\n"

. "WHERE paintingsingame.idgame=584 ORDER BY paintingsingame.riddleorder;";
*/

/*
function deleteData() {
    if (isset($_POST['id']))
    {$id=$_POST['id'];}

    $query_string = 'DELETE FROM paintings WHERE id="'.$id.'"';
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    // esegui la query
    $result = $mysqli->query($query_string);

    //echo $query_string;

    if($mysqli->affected_rows > 0) {
        // encodo l'array in JSON

        $response = array('updated' => true, 'id' => $id, 'type' => 'delete');

    } else {
        $response = array('updated' => false, 'id' => $id, 'type' => 'delete');
    }

    echo json_encode($response);

}
*/

?>