(function($) {

    $.fn.cluePageButton = function (options) {//fa comparire e scomparire icona cluepage
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
            let request_type="loadDataSearchedByPlayerId";
            let request = $.ajax({
                url: options.serverURL2,
                type: "POST",
                data: { "id": data,"action": request_type},
                dataType: "json",
            })

            request.done(function (data){
                if(data.player.game==99999)
                    $cluePageButton.style.display="none";
            });


        });
        requestPlayerId.fail(function(jqXHR, textStatus) {
            alert( "RequestGetPaintings failed: " + textStatus );
        });
    }
})(jQuery);
