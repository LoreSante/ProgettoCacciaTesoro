(function($) {

    $.fn.playerNameView = function (options) {
        //$playerName="guest";
        document.getElementById("enterGamePlayerName").innerText= $playerName;

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
            document.getElementById("enterGamePlayerName").innerText= data.players[0].nickname;
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
            document.getElementById("enterGamePlayerName").innerText="Can't connect server";
        });

    }
})(jQuery);
