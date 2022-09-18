(function($) {

    $.fn.checkGameStatus = function (options) {//verifica lo stato della partita per aggiornare gli eventi del gioco
        let idGame;
        let player;
        let victoryPoints=10;

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

                getMatch(data);
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }


        function getMatch(playerId){ //ottiene le info sull'utente e passa l'id della partita a


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
                player=data.player;
                setInterval(getStatus, 2000);


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
                    if (data.game.status == 1) {
                        location.href = 'cluePage.php';
                    }
                    else if(data.game.status == 2) {
                        if(player.points==victoryPoints){
                            location.href='victoryPage.php';
                        }
                        else{
                            location.href='defeatPage.php';
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