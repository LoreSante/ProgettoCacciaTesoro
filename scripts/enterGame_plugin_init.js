$(document).ready(function() {
    console.log("INIT PLUGIN View Player Name");
    jQuery("#enterGamePlayerName").playerNameView({serverURL : "server/player_actions_page.php", serverURL2 : "server/sessionGetter_methods_page.php"});
});

