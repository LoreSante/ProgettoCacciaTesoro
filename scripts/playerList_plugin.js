(function($) {
    console.log("JQUERY: " + $);

    $.fn.showPlayerList = function (options) {

        let playerId;
        let request_type = "getIdUser"
        let requestIdPlayer = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: {"action": request_type},
            dataType: "json",
        })

        requestIdPlayer.done(function (data) {
            console.log("REQUEST.DONE, User ID: " + data);
            playerId = data;

            request_type = "loadDataSearchedByPlayerId";
            let requestPlayer = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data: {"id": playerId, "action": request_type},
                dataType: "json",
            })


            requestPlayer.done(function (data) {
                console.log("REQUEST.DONE: " + data);
                let removeFlag=0;
                setInterval(loadPlayersId , 1000);
                function loadPlayersId() {


                    request_type = "loadDataSearchedByGame";
                    let requestGame = $.ajax({
                        url: options.serverURL2,
                        type: "POST",
                        data: {"id": data.player.game, "action": request_type},
                        dataType: "json",
                    })

                    requestGame.done(function (data) {
                        console.log("REQUEST.DONE PLAYER: " + data);

                        let children = document.getElementsByClassName("playerNameSample");
                        if (removeFlag) {
                            for(let i=0; i<removeFlag; i++) {
                                children[0].remove();
                            }
                        }

                        removeFlag=0;

                        for (let i = 0; i < data.players.length; i++) {
                            removeFlag++;
                            let divSingleWrapper = document.createElement("div");
                            let divPlayer = document.createElement("h5");
                            let divPoints = document.createElement("h5");
                            let container = document.getElementById("playerNamesContainer");
                            divSingleWrapper.className = "playerNameSample"
                            divPlayer.className = "playerName";
                            divPoints.className = "playerPoints";

                            if (data.players[i].nickname === "Guest") {
                                divPlayer.innerText = data.players[i].nickname + "_" + data.players[i].id;
                            } else
                                divPlayer.innerText = data.players[i].nickname

                            divPoints.innerText = data.players[i].points + " / 10"

                            console.log("REQUEST.DONE PLAYER: " + data.players[i].nickname);
                            container.appendChild(divSingleWrapper);
                            divSingleWrapper.appendChild(divPlayer);
                            divSingleWrapper.appendChild(divPoints);

                        }
                    });
                    requestGame.fail(function (jqXHR, textStatus) {
                        alert("Request failed: " + textStatus);
                    });
                }
            });

        });
    }

})(jQuery);



