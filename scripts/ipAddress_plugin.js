(function($) {

    $.fn.ipAddress = function (options) {
        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });

    }
})(jQuery);

