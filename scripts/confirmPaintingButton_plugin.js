(function($) {

    $.fn.confirmButton= function (options) {

        let paintingArray = [];
        let playerId;
        let playerPoints;

        request_type = "getPaintingsArray";
        let requestPaintingArray = $.ajax({
            url: options.serverURL2,
            type: "POST",
            data: {"action": request_type},
            dataType: "json",
        })
        requestPaintingArray.done(function (data) {
            paintingArray = data;
            console.log("REQUEST Painting Array [BUTTON] DONE---: " + data);

        });
        requestPaintingArray.fail(function (jqXHR, textStatus) {
            alert("RequestGetPaintings failed: " + textStatus);
        });

        let request_type = "getIdUser";
        let requestPlayerId = $.ajax({
            url: options.serverURL2,
            type: "POST",
            data: {"action": request_type},
            dataType: "json",
        })
        requestPlayerId.done(function (data) {
            playerId = data;
            console.log("REQUEST DONE---: " + data);
            let $confirmButton=document.getElementById("confirmButton");
            $confirmButton.onclick=function(){
                confirmPaintingButton();
            }
        });
        requestPlayerId.fail(function (jqXHR, textStatus) {
            alert("Request get User Id [BUTTON] failed: " + textStatus);
        });




        function confirmPaintingButton() {
            //let $confirmButton=document.getElementById("confirmButton"); TODO:SPOSTARE

            request_type = "loadDataSearchedByPlayerId";
            let requestGetPoints = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"id": playerId, "action": request_type},
                dataType: "json",
            })

            requestGetPoints.done(function (data) {
                playerPoints = data.player.points;
                console.log("REQUEST GET POINTS [BUTTON] DONE---: " + data);
                updatePoints();
            });

            requestGetPoints.fail(function (jqXHR, textStatus) {
                alert("RequestGetPoints failed: " + textStatus);
            });
        }


        function updatePoints() {
            let $select = document.getElementById("selectPaint");
            if ($select.value == paintingArray[playerPoints].title) {
                console.log("RISPOSTA CORRETTA")
                playerPoints++;
                let request_type = "updatePoints";
                let requestUpdatePoints = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"id": playerId, "points": playerPoints, "action": request_type},
                    dataType: "json",
                })


                requestUpdatePoints.done(function (data) {
                    console.log("REQUEST DONE _ NEW POINTS: " + data);
                });
                requestUpdatePoints.fail(function (jqXHR, textStatus) {
                    alert("RequestUpdatePoints failed: " + textStatus);
                });
            }
        }
    }
})(jQuery);