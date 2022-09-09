$(document).ready(function() {
    console.log("INIT PLUGIN Load Player Name");
    jQuery("#enterGamePlayerName").playerNameLoad({serverURL : "server/player_actions_page.php"});
});