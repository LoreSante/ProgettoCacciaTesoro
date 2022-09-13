$(document).ready(function() {
    console.log("INIT THE GAME PLUGIN");
    jQuery("#cluePageButton").cluePageButton({serverURL : "server/sessionGetter_methods_page.php",serverURL2 : "server/player_actions_page.php"});
});