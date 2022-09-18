
(function($) {
    console.log("JQUERY: " + $);
    $.fn.enterGame = function (options) {//crea il giocatore sulla base del nickname inserito in index.php, è collegato al tasto nameSelected
        console.log("ENTERGAME")
        let $this = $(this);
        let $enterGameButton = $('.nameSelected', $this.parent());
        let $inputName = document.getElementById("fname");
        $enterGameButton.on("click", function () {
            sendPlayer();
        });

        function sendPlayer() {
            let nickname= $inputName.value;
            if(nickname=="")
                nickname="Guest";
            console.log("sendPlayer");
            let request_type = "insert";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"text": nickname, "game":99999 , "action": request_type},
                dataType: "json",
            });
            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                location.href='menu.php';
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }
    }
})(jQuery);
