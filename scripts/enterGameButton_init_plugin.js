$(document).ready(function() {
    console.log("INIT PLUGIN");
    jQuery(".enterGameButton").enterGame({serverURL : "server/player_actions_page.php"});
});
