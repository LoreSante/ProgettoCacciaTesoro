(function($) {

    $.fn.matchIdLoad = function (options) {

        let request_type="load";
        let request = $.ajax({
            url: options.serverURL2,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
            document.getElementById("matchID").innerText= data.players[0].game; //fa apparire in matchID l'id dell'ultima partita creata nel DB
            let request_type2="loadDataSearched";
            console.log(document.getElementById("matchID").innerText);
            let request2 = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{"id": data.players[0].game, "action" : request_type2 },
                dataType: "json",
            })

            request2.done(function(data2){
                console.log("REQUEST.DONE PLAYER: " + data2);

                for(let i=0;i<data2.players.length; i++) {
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
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });


    }
})(jQuery);