// JavaScript Document
let $playerName= "guest";
(function($) {
    console.log("JQUERY: " + $);


    $.fn.insertName = function (options) {
        console.log("CALL PLUGIN TODO");
        let defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);

        console.log("OPTIONS: " + defaults['serverURL']);

        return this.each(function(i,obj){
            console.log("obj:" +obj);

            let $this = $(this);

            $this.wrap('<div class="plugin_wrapper" />')
            $('<form action=server/player_actions_page.php method="post">'
                +'<label title="Nome giocatore">'
                +'<input type="text" class="fname" id="fname" placeholder="Inserire nome giocatore">'
                +'</label>'
                +'<input type="button" value="Seleziona" class="nameSelected">'
                +'</form>'
            ).insertBefore($this);


            let $submitButton = $('.nameSelected', $this.parent());

            $submitButton.on("click", function () {
                $playerName=$this.parent().find(".fname").val();
                //sendName($this);
            });
        });
        /*function sendName($el){
            console.log($el);
            let $this = $el;
            console.log("sendName");
            let request_type = "insert";
            let $name = $this.parent().find('.fname');
            let name = $name.val();
            console.log("name:" +name);
            if (name.length > 2) {
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"text" : name, "game" : 1, "action" : request_type},
                    dataType: "json",
                });

                request.done(function(data) {
                    console.log("REQUEST.DONE: " + data)
                });

                request.fail(function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });

            }

        }*/

    }

})(jQuery);


