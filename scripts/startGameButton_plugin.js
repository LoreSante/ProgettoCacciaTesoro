(function($) {
    let playerId;

    $.fn.buttonDisplay = function (options) {//mostra bottone "avvia partita" sulla base del campo "ishost" associato al giocatore posto in tabella
        let $startGameButton = document.getElementById("startGameButton");

        let request_type="getIdUser"
        let requestSession = $.ajax({
            url: options.serverURL3,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        requestSession.done(function(data){
            console.log("REQUEST.DONE, BOTTONE User ID: " + data);
            playerId=data;
            setInterval(showButton,2000);

        });

        function showButton(){
            request_type="loadDataSearchedByPlayerId";
            let request = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{ "id" : playerId , "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                if(data.player) {
                    if (data.player.ishost === "0") {
                        console.log("REQUEST.DONE, BOTTONE User ID: " + data.player.ishost);
                        $startGameButton.style.display = "none";
                    } else
                        $startGameButton.style.display = "block";
                }
            });
            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }
    }
})(jQuery);