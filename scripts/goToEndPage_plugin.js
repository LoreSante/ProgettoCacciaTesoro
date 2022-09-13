(function($) {

    $.fn.setEndedStatus = function (options) { ////cambia lo stato della partita in concluso quando un giocatore vince
        let victoryPoints=3;
        let playerId;
        let matchId;

        getId();

        function  getId(){ //si occupa di fare la chiamata per ottenere lo userId
            let request_type="getIdUser"
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                playerId=data;
                setInterval(getPlayerInfo, 2000);

            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }

        function getPlayerInfo(){ //ottiene le info sul giocatore
            let request_type="loadDataSearchedByPlayerId";
            let requestPoints=$.ajax({
                url: options.serverURL2,
                type: "POST",
                data: { "id": playerId, "action": request_type},
                dataType: "json",
            })

            requestPoints.done(function (data) {
                console.log("REQUESTE DONE:" +data);
                matchId=data.player.game;
                checkPoints(data.player.points);

            });
            requestPoints.fail(function(jqXHR, textStatus) {
                alert( "RequestPoints failed: " + textStatus );
            });
        }

        function checkPoints(points){ //controlla se il giocatore ha raggiunto il numero di punti per vincere
            console.log("PARTITA QUASI FINITAAAAAAA")
            if(points>=victoryPoints){
                updateStatus();
            }
        }

        function updateStatus(){  //cambia lo status della partita in "conclusa" --> 2
            console.log("PARTITA FINITAAAAAAA")
            let request_type = "updateStatus";
            let request = $.ajax({
                url: options.serverURL3,
                type: "POST",
                data: {"id": matchId, "status": 2, "action": request_type},
                dataType: "json",
            })

            request.done(function (data){
                console.log("DONE UPDATE STATUS");
            });
        }
    }

})(jQuery);