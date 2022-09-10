(function($) {

    $.fn.playerNameView = function (options) {
        //$playerName="guest";
        //let $playerName = $('.playerName', this.parent());
        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })


        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
            if(data.players[0].nickname==="Guest")
            {
                document.getElementById("enterGamePlayerName").innerText= data.players[0].nickname+"_"+ data.players[0].id;
            }
            else
                document.getElementById("enterGamePlayerName").innerText= data.players[0].nickname;
            document.getElementById("playerId").innerText= data.players[0].id;
            console.log(document.getElementById("playerId").innerText);
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
            document.getElementById("enterGamePlayerName").innerText="Can't connect server";
        });

    }
})(jQuery);
