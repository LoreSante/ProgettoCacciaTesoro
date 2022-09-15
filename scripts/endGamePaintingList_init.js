$(document).ready(function() {
    console.log("END GAME PLUGIN INIT");
    jQuery(".endGamePaintingsContainer").generatePaintingsList({serverURL : "server/sessionGetter_methods_page.php"});
});