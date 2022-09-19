(function($) {

    $.fn.endGame = function (options) {//si occupa di verificare il raggiungimento del punteggio necessario a vincere
        let idGame;
        let playerId;
        let victoryPoints=10;
        let playerInfo;

        getId();

        function  getId(){ //si occupa di fare la chiamata per ottenere lo userId e poi chiama gatStatus() in loop
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
                setInterval(getMatch,2000)

                //getMatch(data);
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }


        function getMatch(){ //ottiene le info sull'utente e passa l'id della partita a


            /*
            ottiene lo stato della partita a cui sta partecipando l'utente
            e passa alla schermata di gioco se la partita è in corso (=1)
            */

            let request_type="loadDataSearchedByPlayerId";
            let request = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{ "id":playerId, "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                idGame=data.player.game;
                playerInfo=data.player;
                getStatus();


            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });
        }

        function getStatus(){
            let request_type="search";
            let request = $.ajax({
                url: options.serverURL3,
                type: "POST",
                data:{ "id":idGame, "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                console.log("REQUEST.DONE:  " + data);
                if(data.game) {
                    if(data.game.status == 2) {
                        if(playerInfo.points<victoryPoints){
                            location.href='defeatPage.php';
                        }
                        else{
                            location.href='victoryPage.php';
                        }

                    }
                }

            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });
        }


    }

})(jQuery);