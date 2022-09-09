$(document).ready(function() {
    console.log("INIT SHOWPaintings");
    jQuery(".bodyGallery").showPaintingInfo({serverURL : "server/paintings_actions_page.php"});
});