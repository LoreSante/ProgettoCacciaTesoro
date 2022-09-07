
$(document).ready(function() {
    console.log("INIT PLUGIN AUTENTICATION");
    jQuery(".loginButton").adminLogin({serverURL : "server/login_actions_page.php"});
});