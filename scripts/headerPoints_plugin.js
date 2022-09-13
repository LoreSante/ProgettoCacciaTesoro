(function($) {

    $.fn.headerPoints = function (options) {//stampa il punteggio del giocatore in tempo reale nell'header di cluepage

        let victoryPoints=10;

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
                let playerId=data;
                console.log("PLAYER ID [header points] " + playerId);
                let request_type="loadDataSearchedByPlayerId";
                let request2 = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data:{ "id": playerId, "action" : request_type },
                    dataType: "json",
                })
                request2.done(function (data){
                    console.log("PUNTI GIOCATOREEEEEEEEEEEEEEE"+data.player.points);
                    let $points=document.getElementsByClassName("points");
                    $points[0].innerText=data.player.points+" / "+victoryPoints;
                    $points[1].innerText=data.player.points+" / "+victoryPoints;
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

