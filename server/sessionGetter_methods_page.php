<?php
        session_start();
        header('Content-Type: text/json');
     //   include("configuration.php");
        $action = $_POST['action'];

     switch($action) {
         case "getIdUser" :
             getIdUser();
         break;
         case "insert" :
            // insertName();
         break;

    }

    function getIdUser(){
         $response=$_SESSION['idUser'];
        echo json_encode($response);
    }


?>