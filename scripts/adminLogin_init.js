
$(document).ready(function() {
    console.log("INIT PLUGIN AUTENTICATION");
    jQuery(".loginButton").adminLogin({serverURL : "server/actions_page.php"}); //TODO cambia l'action_page con quella corretta
});