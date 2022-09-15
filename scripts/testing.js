(function($) {

    $.fn.testing = function (options) {
        let request_type="test";
        let requestPlayerId = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: { "action": request_type},
            dataType: "json",
        })
        requestPlayerId.done(function (data) {
            console.log("TESTING: "+data);
        });
        requestPlayerId.fail(function(jqXHR, textStatus) {
            alert( "RequestGetPaintings failed: " + textStatus );
        });
    }
})(jQuery);
