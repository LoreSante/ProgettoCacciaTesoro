$(document).ready(function() {
    console.log("INIT PLUGIN insertPainting");
    jQuery(".nicknameButton").nicknameButton({serverURL : "server/sessionGetter_methods_page.php", serverURL2 : "server/player_actions_page.php"});
});

