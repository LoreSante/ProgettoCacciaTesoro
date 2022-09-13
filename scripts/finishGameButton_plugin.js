(function($) {
    let playerId;

    $.fn.finishGameButton = function (options) {//dopo click bottone finishGame, elimina la partita ed il giocatore
        let $finishGameButton = document.getElementById("finishGameButton");
        $finishGameButton.onclick= function (){
            deleteGame();
        }
        function deleteGame(){
            let request_type="getIdUser";
            let requestSession = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            requestSession.done(function(data){
                playerId=data;
                let request_type="loadDataSearchedByPlayerId";
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data:{ "id": playerId, "action" : request_type },
                    dataType: "json",
                })

                request.done(function (data){
                    let $idGame= data.player.game;
                    let request_type="deleteDataSearchedByPlayerId";
                    let request2 = $.ajax({
                        url: options.serverURL,
                        type: "POST",
                        data:{"id": playerId, "action" : request_type },
                        dataType: "json",
                    })

                    request2.done(function (){
                        console.log("CANCELLAZIONE GIOCATORE EFFETTUATA")
                    });

                     request_type="deleteById";
                     request = $.ajax({
                        url: options.serverURL3,
                        type: "POST",
                        data:{ "id": $idGame, "action" : request_type },
                        dataType: "json",
                    })
                    request.done(function (data){
                        console.log("CANCELLAZIONE PARTITA EFFETTUATA");
                        location.href="index.php";
                    })
                });

            });
        }
    }
})(jQuery);