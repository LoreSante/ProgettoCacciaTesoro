// JavaScript Document
let $playerName= "Guest";
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
            $('<form class="row text-center" action=server/player_actions_page.php method="post">'
                +'<label class="col-12 col-md-8 fnameWrapper" title="Nome giocatore" style="padding-left:0; padding-right:3px;">'
                +'<input type="text" class="fname" id="fname" placeholder="Inserire nome giocatore">'
                +'</label>'
                +'<input type="button" value="Seleziona" class="nameSelected col-12 col-md-4">'
                +'</form>'
            ).insertBefore($this);


            let $submitButton = $('.nameSelected', $this.parent());

            $submitButton.on("click", function () {
                if($this.parent().find(".fname").val()!="")
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


