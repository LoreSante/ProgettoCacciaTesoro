(function($) {

    $.fn.playerNameView = function (options) { //stampa nome giocatore in enterGame.php

        getId();

        function  getId(){ //si occupa di fare la chiamata per ottenere lo userId e poi chiama gatStatus() in loop
            let request_type="getIdUser"
            let request = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                let request_type="loadDataSearchedByPlayerId";
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data:{ "id":data,"action" : request_type },
                    dataType: "json",
                })

                request.done(function(data) {
                    console.log("REQUEST.DONE: " + data);
                    if(data.player.nickname==="Guest")
                    {
                        document.getElementById("enterGamePlayerName").innerText= data.player.nickname+"_"+ data.player.id;
                    }
                    else
                        document.getElementById("enterGamePlayerName").innerText= data.player.nickname;
                    document.getElementById("playerId").innerText= data.player.id;
                    console.log(document.getElementById("playerId").innerText);
                });

                request.fail(function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                    document.getElementById("enterGamePlayerName").innerText="Can't connect server";
                });
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }


    }
})(jQuery);
