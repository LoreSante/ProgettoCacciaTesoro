(function($) {
    let gameId;
    $.fn.returnHome = function (options) {//script cancellazione giocatore all'evento click del bottone home
        let $returnHomeButton=document.getElementById("returnHomeButton");
        $returnHomeButton.onclick = function (){
            returnHomeButton();
        }
        function returnHomeButton() {
            if (confirm("Sicuro di voler uscire?")) {//ottenimento id user
                console.log("click");
                let playerId;
                let request_type = "getIdUser";
                let requestSession = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: {"action": request_type},
                    dataType: "json",
                })

                requestSession.done(function (data) {//ottenimento player per avere id game
                    playerId = data;
                    console.log("REQUEST.DONE 1 OTTENIMENTO ID: " + playerId);
                    request_type = "loadDataSearchedByPlayerId";
                    let request2 = $.ajax({
                        url: options.serverURL,
                        type: "POST",
                        data: {"id": playerId, "action": request_type},
                        dataType: "json",
                    })

                    request2.done(function (data){ //ottenimento altri player tramite id game
                        gameId= data.player.game;
                        let request_type = "loadDataSearchedByGame";
                        console.log("REQUEST.DONE 2 OTTENIMENTO ALTRI PLAYER: " + data.player.game);
                        console.log(data.player);
                        let request3 = $.ajax({
                            url: options.serverURL,
                            type: "POST",
                            data: {"id":data.player.game, "action": request_type},
                            dataType: "json",
                        })
                        request3.done(function (data){
                            let id;
                            console.log("REQUEST.DONE 3 MODIFICA ISHOST: " + data.players.length);
                            if(data.players.length>1){
                                if(data.players[0].ishost!=1)
                                    id=data.players[0].id;
                                else
                                    id=data.players[1].id;

                                let request_type = "updateIsHost";
                                let request4 = $.ajax({
                                    url: options.serverURL,
                                    type: "POST",
                                    data: {"id":id, "action": request_type},
                                    dataType: "json",

                                })
                                request4.done(function(data){
                                    console.log("UPDATE ISHOST EFFETTUATO");
                                });
                            }
                            console.log("INIZIO CANCELLAZIONE PLAYER   "+ playerId);

                            request_type = "deleteDataSearchedByPlayerId";
                            let request = $.ajax({
                                url: options.serverURL,
                                type: "POST",
                                data: {"id": playerId, "action": request_type},
                                dataType: "json",
                            })
                            request.done(function (data) {
                                console.log("REQUEST.DONE CANCELLAZIONE PLAYER: " + data);
                                deleteGame();
                                location.href = "index.php";
                            });
                            request.fail(function (jqXHR, textStatus) { //FIXME: QUI VIENE CHIAMATA QUESTA COSA
                                alert("Request failed: " + textStatus);
                            });
                        });
                    });

                });
            }
        }

        function deleteGame() {
            let request_type = "loadDataSearchedByGame";
            console.log("REQUEST.DONE VERIFICA NUMERO GIOCATORI ");
            let request3 = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"id": gameId, "action": request_type},
                dataType: "json",
            })

            request3.done(function(data){
                console.log("ARRAY GIOCATORI: " +data.players.length);
                if(data.players.length===0){
                    console.log("ENTRATO IN IF" );
                    console.log("ID PARTITA DA CANCELLARE: " +gameId);
                    request_type = "deleteById";
                    let request = $.ajax({
                        url: options.serverURL3,
                        type: "POST",
                        data: {"id": gameId, "action": request_type},
                        dataType: "json",
                    })
                    request.done(function (data){
                        console.log("partita eliminata" + data);
                    });
                    request.fail(function (jqXHR, textStatus){
                        alert("Request failed delete game: " + textStatus);
                    });
                }
            });
        }
    }
})(jQuery);
