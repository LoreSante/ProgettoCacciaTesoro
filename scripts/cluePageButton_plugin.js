(function($) {

    $.fn.cluePageButton = function (options) {
        console.log("PARTITO");
        let $cluePageButton=document.getElementById("cluePageButton");
        let request_type="getIdUser";
        let requestPlayerId = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: { "action": request_type},
            dataType: "json",
        })
        requestPlayerId.done(function (data) {
            console.log(data);
            if(data==="")
                $cluePageButton.style.display="none";
            else
                $cluePageButton.style.display="block";

        });
        requestPlayerId.fail(function(jqXHR, textStatus) {
            alert( "RequestGetPaintings failed: " + textStatus );
        });
    }
})(jQuery);
