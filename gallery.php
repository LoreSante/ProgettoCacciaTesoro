<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gallery</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <link href="css/page_style.css" rel="stylesheet" type="text/css">
    <link href="css/dialog_style.css" rel="stylesheet" type="text/css">
    <!--
    <script type="text/javascript" src="scripts/showGalleryAdmin_plugin.js"></script>
    <script type="text/javascript" src="scripts/showGalleryAdmin_plugin_init.js"></script>
    -->
    <script type="text/javascript" src="scripts/showGalleryUser_plugin.js"></script>
    <script type="text/javascript" src="scripts/showGalleryUser_plugin_init.js"></script>


    <script type="text/javascript" src="scripts/returnHomeButton_plugin.js"></script>
    <script type="text/javascript" src="scripts/returnHomeButton_plugin_init.js"></script>


    <!-- START bootstrap -->
    <script src="scripts/bootstrap.min.js" type="text/javascript"></script>
    <link href="css/bootstrap.min.css" type="text/css" rel="stylesheet">
    <!-- nuovo bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
    <!-- END bootstrap -->

</head>
<body class="bodyGallery">


    <div class="headerContainer">
        <div class="header">
            <div class="leftIconWrapper">
                <div><a href="index.php"><span class="material-symbols-outlined" style="cursor:pointer">home</span></a></div>
                <div><a href="cluePage.php"><span class="material-symbols-outlined">chat_bubble</span></a></div>
                <div><a href="index.php"><span class="material-symbols-outlined">cancel</span></a></div>
            </div>
            <div class="rightIconWrapper">
                <div><a href="#"><span class="material-symbols-outlined">groups</span></a></div>
            </div>

        </div>
    </div>
    <div class="wall">
        <div class="container-fluid text-center paintingsGallery">
            <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 paintingsGallery paintingContainer" id="paintingsContainer">

            </div>
        </div>
    </div>
    <div class="wall"></div>


    <!-- FINESTRA DI DIALOGO -->
    <div class="container-fluid" id="formWrapper">
        <div class="headerDialog">
        </div>
        <div class="container" id="paintForm">
            <div class="container-fluid">
                <div class="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 height2">
                    <div class="col-7 col-sm-7 col-md-5 col-lg-7">
                        <textarea type="text" id="urlInput" class="inputStyle" name="urlInput" rows="1"></textarea>
                        <label for="urlInput"></label>
                    </div>
                    <div class="col-1 col-sm-2 col-md-2 col-lg-4 text-right">
                        <span class="material-symbols-outlined" id="closeButton">close</span>
                    </div>
                </div>
            </div>

            <div class="container-fluid newPainting"> <!-- height100 -->
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                    <div class="col-sm-12 col-md-12 col-lg-5 text-center"> <!-- height100 -->
                        <div class="formPaintPicture"><img id="paintingImage" src="https://via.placeholder.com/150x250/#e0e0e0"> </div> <!-- height100 -->
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-7">
                        <div class="row title formText">
                            <div class="col-12" >
                                <h1 class="title text-center text-md-start" id="title">Titolo</h1>
                            </div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-2 text-center text-md-start"><h5 class="formLabel">Autore:</h5></div>
                            <div class="col-12 col-md-8">
                                <h5 class="text-center text-md-start" id="author"></h5>
                            </div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-2 text-center text-md-start"><h5 class="formLabel">Anno:</h5></div>
                            <div class="col-12 col-md-8">
                                <h5 class="text-center text-md-start" id="year"></h5>
                            </div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-2 text-center text-md-start"><h5 class="formLabel">Tecnica:</h5></div>
                            <div class="col-12 col-md-8">
                                <h5 class="text-center text-md-start" id="technique"></h5>
                            </div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-2 text-center text-md-start"><h5 class="formLabel">Posizione:</h5></div>
                            <div class="col-12 col-md-8">
                                <h5 class="text-center text-md-start" id="position"></h5>
                            </div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-12 col-md-2 text-center text-md-start text-lg-start"><h5 class="formLabel">Descrizione:</h5></div>
                            <div class="col-12 col-md-8"></div>
                            <div class="col-12 col-md-11" id="description"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row container-fluid height2"></div>
        </div>
    </div>



</body>
</html>