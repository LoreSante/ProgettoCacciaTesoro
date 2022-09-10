(function($) {

    $.fn.matchIdLoad = function (options) {


        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
            document.getElementById("matchID").innerText= data.keys[0].id; //fa apparire in matchID l'id dell'ultima partita creata nel DB
            let request_type2="loadDataSearched";
            console.log(document.getElementById("matchID").innerText);
            let request2 = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data:{"id": data.keys[0].id, "action" : request_type2 },
                dataType: "json",
            })

            request2.done(function(data2){
                console.log("REQUEST.DONE PLAYER: " + data2);
                let container = document.getElementById("playerNamesWrapper");
                let divPlayer = document.createElement("div");
                divPlayer.className = "playerNameSample";
                console.log("REQUEST.DONE PLAYER: " + data2.players[0].nickname);
                if(data2.players[0].nickname==="Guest")
                {
                    divPlayer.innerText=data2.players[0].nickname+"_"+data2.players[0].id;
                }
                else
                    divPlayer.innerText=data2.players[0].nickname;
                container.appendChild(divPlayer);
            })
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });


    }
})(jQuery);