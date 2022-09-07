
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
            let $this = $el;
            console.log("sendGame"); //fixme continua da qui
            let request_type = "insert";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"action": request_type},
                dataType: "json",
            });
            console.log(request.responseJSON)
            if ($playerName.length > 2) {
                let request = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: {"text": $playerName, "game": 2, "action": request_type},
                    dataType: "json",
                });
            }
        }
    }
})(jQuery);


