

$(document).ready(function() {
    console.log("INIT PLUGIN");
    jQuery(".newGameButton").createGame({serverURL : "server/actions_page.php"}); //TODO creare relativo file actions e sostituire l'attuale con quello
});