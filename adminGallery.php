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

    <script type="text/javascript" src="scripts/newPainting_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/newPainting_plugin.js"></script>

    <script type="text/javascript" src="scripts/showGalleryAdmin_plugin_init.js"></script>
    <script type="text/javascript" src="scripts/showGalleryAdmin_plugin.js"></script>

    <!--
    <script type="text/javascript" src="scripts/showGalleryUser_plugin.js"></script>
    <script type="text/javascript" src="scripts/showGalleryUser_plugin_init.js"></script>
    -->



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
                <div><a href="index.php"><span class="material-symbols-outlined">home</span></a></div>
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
            <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-4 paintingsGallery paintingsContainer" id="paintingsContainer">
                <div class="col-xs-12 paintings ">
                    <span class="material-symbols-outlined md-96" id="addPaintButton" style="background-color: gray; color:white">
                        add
                    </span>
                </div>
                <!--
                <div class="col-xs-12 paintings">
                    <div class="columnPicture">
                        <img src="https://via.placeholder.com/150x250/#e0e0e0">
                    </div>
                </div>
                -->
            </div>
        </div>
    </div>
    <!-- FINESTRA DI DIALOGO -->
    <div class="container-fluid" id="formWrapper">
        <div class="headerDialog">
        </div>
        <div class="container" id="paintForm">
            <div class="container-fluid">
                <div class="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 height2">
                    <div class="col-3 col-sm-3 col-md-3 col-lg-1" id="urlButton"><span class="material-symbols-outlined">edit</span><h5>Modifica Immagine</h5></div>
                    <div class="col-7 col-sm-7 col-md-5 col-lg-7">
                        <textarea type="text" id="urlInput" class="inputStyle" name="urlInput" rows="1" ></textarea>
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
                        <div class="formPaintPicture"><img id="paintingImage" src="https://i.pinimg.com/564x/11/cc/4a/11cc4aca0d1bedf0fc2038b618098526.jpg"> </div> <!-- height100 -->
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-7">
                        <div class="row title formText">

                            <div class="col-12 col-md-7" >
                                <h1 class="title text-center text-md-start" id="title">Titolo</h1>
                                <div class="paintingId" id="paintingId" style="display: none;"></div>
                                <textarea type="text" id="titleInput" class="inputStyle" name="titleInput" rows="2"></textarea>
                                <label for="titleInput"></label>
                            </div>
                            <div class="col-4"></div>
                            <div class="col-2 text-right" id="titleButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-3 text-center text-md-start"><h5 class="formLabel">Autore:</h5></div>
                            <div class="col-12 col-md-7">
                                <h5 class="text-center text-md-start" id="author"></h5>
                                <textarea type="text" id="authorInput" class="inputStyle" name="authorInput" rows="2"></textarea>
                                <label for="authorInput"></label>
                            </div>
                            <div class="col-xs-12 col-md-2 text-right" id="authorButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-3 text-center text-md-start"><h5 class="formLabel">Anno:</h5></div>
                            <div class="col-12 col-md-7">
                                <h5 class="text-center text-md-start" id="year"></h5>
                                <textarea type="text" id="yearInput" class="inputStyle" name="yearInput" rows="2"></textarea>
                                <label for="yearInput"></label>
                            </div>
                            <div class="col-xs-12 col-md-2 text-right" id="yearButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-3 text-center text-md-start"><h5 class="formLabel">Tecnica:</h5></div>
                            <div class="col-12 col-md-7">
                                <h5 class="text-center text-md-start" id="technique"></h5>
                                <textarea type="text" id="techniqueInput" class="inputStyle" name="techniqueInput" rows="2"></textarea>
                                <label for="techniqueInput"></label>
                            </div>
                            <div class="col-xs-12 col-md-2 text-right" id="techniqueButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-3 text-center text-md-start"><h5 class="formLabel">Posizione:</h5></div>
                            <div class="col-12 col-md-7">
                                <h5 class="text-center text-md-start margin-left-md" id="position"></h5>
                                <textarea type="text" id="positionInput" class="inputStyle" name="positionInput" rows="2"></textarea>
                                <label for="positionInput"></label>
                            </div>
                            <div class="col-xs-12 col-md-2 text-right" id="positionButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-xs-12 col-md-12 text-center text-md-start text-lg-start"><h5 class="formLabel">Descrizione:</h5></div>
                            <!-- <div class="col-12 col-md-12"> </div> -->

                    <!--
                        </div>
                        <div class="row">
                    -->
                            <textarea type="text" id="descriptionInput" class="inputStyle" name="descriptionInput" rows="2"></textarea>
                            <label for="descriptionInput"></label>
                            <div class="col-12 col-md-10" id="description"></div>
                            <div class="col-xs-12 col-md-2 text-right" id="descriptionButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                        <div class="row dialogBorderBottom">
                            <div class="col-12 col-md-3 text-center text-md-start"><h5 class="formLabel">Indovinello:</h5></div>
                            <div class="col-12 col-md-7">
                                <h5 class="text-center text-md-start" id="riddle"></h5>
                                <textarea type="text" id="riddleInput" class="inputStyle" name="riddleInput" rows="2"></textarea>
                                <label for="riddleInput"></label>
                            </div>
                            <div class="col-xs-12 col-md-2 text-right" id="riddleButton"><span class="material-symbols-outlined">edit</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row container-fluid height2">
                <div class="col-4"></div>

                <div class="col-5"></div>

                <div class="col-1 text-center" id="add"><span class="material-symbols-outlined add"  >add</span></div>
                <div class="col-1 text-center" id="save"><span class="material-symbols-outlined save"  >save</span></div>
                <div class="col-1 text-center"><span class="material-symbols-outlined" id="delete">delete</span></div>
            </div>

        </div>
    </div>
</body>
</html>