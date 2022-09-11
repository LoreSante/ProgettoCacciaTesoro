(function($) {

    $.fn.returnHome = function (options) {//script cancellazione giocatore sulla base del click del bottone home
        let $returnHomeButton=document.getElementById("returnHomeButton");
        $returnHomeButton.onclick = function (){
            returnHomeButton();
        }
        function returnHomeButton() {
            if (confirm("Sicuro di voler uscire?")) {
                console.log("click");
                let playerId;
                let request_type = "getIdUser"
                let requestSession = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: {"action": request_type},
                    dataType: "json",
                })

                requestSession.done(function (data) {
                    playerId = data;
                    console.log("REQUEST.DONE OTTENIMENTO ID: " + playerId);
                    request_type = "deleteDataSearchedByPlayerId";
                    let request = $.ajax({
                        url: options.serverURL,
                        type: "POST",
                        data: {"id": playerId, "action": request_type},
                        dataType: "json",
                    })
                    request.done(function (data) {
                        console.log("REQUEST.DONE CANCELLAZIONE PLAYER: " + data);
                        location.href = "index.php";

                    });
                    request.fail(function (jqXHR, textStatus) {
                        alert("Request failed: " + textStatus);
                    });
                });
            }
        }
    }
})(jQuery);
