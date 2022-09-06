
(function($) {
    console.log("JQUERY: " + $);


    $.fn.createGame = function (options) {
        console.log("CALL PLUGIN TODO");
        let defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);

        console.log("OPTIONS: " + defaults['serverURL']);

        return this.each(function(i,obj){
            console.log("obj:" +obj);

            let $this = $(this);


            let $newGameButton = $('.newGameButton', $this.parent());

            $newGameButton.on("click", function () {
                sendGame($this);
            });
        });

        function sendGame($el){

            console.log($el);
            let $this = $el;
            console.log("sendGame"); //fixme continua da qui
            let request_type = "insertNewGame";
            if (name.length > 2) {
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"action" : request_type},
                    dataType: "json",
                });

                request.done(function() {
                    if ($playerName.length > 2) {
                        let request = $.ajax({
                            url: options.serverURL2,
                            type: "POST",
                            data: {"text" : name, "game": 2, "action" : request_type},
                            dataType: "json",
                        });

                        request.done(function(data) {
                            console.log("REQUEST.DONE: " + data)
                        });

                    }
                });
            }

        }

    }

})(jQuery);


