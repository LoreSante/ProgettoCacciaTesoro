$(document).ready(function() {
    console.log("INIT PLUGIN View Player Name");
    jQuery(".playerName").playerNameView({serverURL : "server/player_action_page.php"});
});
