(function($) {

    $.fn.returnHome = function (options) {//script cancellazione giocatore all'evento click del bottone home
        let $returnHomeButton=document.getElementById("returnHomeButton");
        $returnHomeButton.onclick = function (){
            returnHomeButton();
        }
        function returnHomeButton() {
            if (confirm("Sicuro di voler uscire?")) {//ottenimento id user
                console.log("click");
                let playerId;
                let request_type = "getIdUser"
                let requestSession = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: {"action": request_type},
                    dataType: "json",
                })

                requestSession.done(function (data) {//ottenimento player per avere id game
                    playerId = data;
                    console.log("REQUEST.DONE OTTENIMENTO ID: " + playerId);
                    request_type = "loadDataSearchedByPlayerId";
                    let request2 = $.ajax({
                        url: options.serverURL,
                        type: "POST",
                        data: {"id": playerId, "action": request_type},
                        dataType: "json",
                    })

                    request2.done(function (data){ //ottenimento altri player tramite id game
                        let request_type = "loadDataSearchedByGame"
                        let request3 = $.ajax({
                            url: options.serverURL,
                            type: "POST",
                            data: {"id":data.player.game, "action": request_type},
                            dataType: "json",
                        })
                        request3.done(function (data2){
                            let id;
                            console.log("REQUEST.DONE REQUESTTTTTTTTTTTT: " +data2.players.length);
                            if(data2.players.length>0){
                                if(data2.players[0].isHost!==1)
                                    id=data2.players[0].id;
                                else
                                    id=data2.players[1].id;

                                let request_type = "updateIsHost";
                                let request4 = $.ajax({
                                    url: options.serverURL,
                                    type: "POST",
                                    data: {"id":id, "action": request_type},
                                    dataType: "json",
                                })
                                request4.done(function(data){
                                    console.log("UPDATE ISHOST EFFETTUATO");
                                })
                            }
                        });
                    });
                    console.log(playerId);
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
                    request.fail(function (jqXHR, textStatus) { //FIXME: QUI VIENE CHIAMATA QUESTA COSA
                        alert("Request failedDDDDD: " + textStatus);
                    });
                });
            }
        }

    }
})(jQuery);
