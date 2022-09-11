(function($) {

    $.fn.matchIdLoad = function (options) {//carica nomi giocatori nella lobby di gioco e carica id di gioco nell'apposita casella



            let playerId;
            let request_type="getIdUser"
            let requestSession = $.ajax({
                url: options.serverURL3,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            requestSession.done(function(data){
                console.log("REQUEST.DONE, User ID: " + data);
                playerId=data;

                request_type="loadDataSearchedByPlayerId";
                let request = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data:{ "id" : playerId , "action" : request_type },
                    dataType: "json",
                })

                request.done(function(data) {
                   console.log("REQUEST.DONE: " + data);

                   document.getElementById("matchID").innerText= data.player.game;
                   console.log(document.getElementById("matchID").innerText);

                    let removeFlag=0;

                    setInterval(loadPlayersId , 100);
                    function loadPlayersId(){

                        let request_type2="loadDataSearchedByGame";
                        let request2 = $.ajax({
                            url: options.serverURL2,
                            type: "POST",
                            data:{"id": data.player.game, "action" : request_type2 },
                            dataType: "json",
                        })

                        request2.done(function(data2) {
                            console.log("REQUEST.DONE PLAYER: " + data2);

                            let children = document.getElementsByClassName("playerNameSample");
                            if (removeFlag) {
                                for(let i=0; i<removeFlag; i++) {
                                    children[0].remove();
                                }
                            }

                            removeFlag=0;
                            for(let i=0;i<data2.players.length; i++) {
                                removeFlag++;
                                let divPlayer = document.createElement("div");
                                let container = document.getElementById("playerNamesWrapper");
                                divPlayer.className = "playerNameSample";
                                if (data2.players[i].nickname === "Guest") {
                                    divPlayer.innerText = data2.players[i].nickname + "_" + data2.players[i].id;
                                } else
                                    divPlayer.innerText = data2.players[i].nickname;
                                console.log("REQUEST.DONE PLAYER: " + data2.players[i].nickname);
                                container.appendChild(divPlayer);
                            }


                        })
                        //
                   }
                });


                request.fail(function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });
            });
            console.log("REQUEST.DONE, User ID: " + playerId);


    }
})(jQuery);