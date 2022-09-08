$(document).ready(function() {
    console.log("INIT PLUGIN Load Player Name");
    jQuery(".playerName").playerNameLoad({serverURL : "server/player_action_page.php"});
});