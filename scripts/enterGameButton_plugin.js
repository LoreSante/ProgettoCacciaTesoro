
(function($) {
    console.log("JQUERY: " + $);
    $.fn.enterGame = function (options) {
        console.log("ENTERGAME")
        let $this = $(this);
        let $enterGameButton = $('.enterGameButton', $this.parent());
        $enterGameButton.on("click", function () {
            sendPlayer();
        });

        function sendPlayer() {
            console.log("sendPlayer");
            let request_type = "insert";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"text": $playerName, "game":99999 , "action": request_type},
                dataType: "json",
            });
            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                location.href='enterGame.html';
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }
    }
})(jQuery);
