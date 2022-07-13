// JavaScript Document
(function($) {
    console.log("JQUERY: " + $);


    $.fn.insertName = function (options) {
        console.log("CALL PLUGIN TODO");
        var defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);
        console.log("OPTIONS: " + defaults['serverURL']);

        var $this = $(this);

        // Wrap "this" in a div with a class of "plugin_wrapper"
        $this.wrap('<div class="plugin_wrapper" />');

        $this.addClass('to-do-list-container');
        $('<form id="frm1" action="/action_page.php" method="post">'
            +'<label title="Nome giocatore">'
            +'<input type="text" class="fname" placeholder="Inserire nome giocatore">'
            +'</label>'
            +'<input type="button" value="Seleziona" class="nameSelected">'
            +'</form>'
        ).insertBefore($this);


        var $submitButton = $('.nameSelected', $this.parent());
        var $nameInput = $('.fname', $this.parent() );

        $submitButton.on("click", function (event) {
            document.getElementById("prova").innerHTML=$nameInput.innerText;
                //alert("To Do Submitted");
        });
    };

})(jQuery);
