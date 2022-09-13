(function($) {

    $.fn.headerPoints = function (options) {

        setInterval(updatePoints, 1000 );

        function  updatePoints(){ //si occupa di fare la chiamata per ottenere lo userId
            let request_type="getIdUser";
            let request = $.ajax({
                url: options.serverURL3,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                let request_type=" loadDataSearchedByPlayerId";
                let request2 = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data:{ "id": data, "action" : request_type },
                    dataType: "json",
                })
                request2.done(function (data){
                    console.log("PUNTI GIOCATOREEEEEEEEEEEEEEE");
                    let $points=document.getElementsByClassName("points");
                    $points.innerText=data.player.points;
                });

                request2.fail(function(jqXHR, textStatus) {
                });
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });
        }
    }
})(jQuery);

