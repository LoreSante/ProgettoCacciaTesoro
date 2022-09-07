(function($) {
    $.fn.matchIdInsert = function (options) {
        let $matchID = $('.matchID', this.parent());

        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
            document.getElementById("matchID").innerText= data.keys[0].id; //fa apparire in matchID l'id dell'ultima partita creata nel DB

        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });


    }
})(jQuery);