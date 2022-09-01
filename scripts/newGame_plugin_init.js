

$(document).ready(function() {
    console.log("INIT PLUGIN");
    jQuery(".newGameButton").createGame({serverURL : "server/actions_page.php"});
});