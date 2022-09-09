let idArray=0;

(function($) {
    console.log("JQUERY: " + $);


    $.fn.createGame = function (options) {
        console.log("CREATEGAME");
        let defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);
        return this.each(function (i, obj) {
            let $this = $(this);
            let $newGameButton = $('.newGameButton', $this.parent());
            $newGameButton.on("click", function () {
                sendGame($this);
            });
        });

        function sendGame($el) {
            let $this=$el;
            console.log("sendGame");
            let request_type = "insert";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"action": request_type},
                dataType: "json",
            });

            request.done(function(data) {
                console.log("REQUEST.DONE: " + data.keys[0].id);
                let game=data.keys[0].id;
                console.log("TEST "+game);
                let request2 = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: {"text": $playerName, "game": game , "action": request_type},
                    dataType: "json",
                });

                request2.done(function (data2){
                    console.log("DONE: "+ data2);
                    location.href="newGame.html";
                });

            });


        }
    }
})(jQuery);

