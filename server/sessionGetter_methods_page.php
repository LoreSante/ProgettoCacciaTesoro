<?php
        session_start();
        header('Content-Type: text/json');
     //   include("configuration.php");
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
         if(isset($_POST['paintingsArray']))
             $_SESSION['paintingsArray']=$_POST['paintingsArray'];
        $response=$_SESSION['paintingsArray'];
        echo json_encode($response);
    }


?>