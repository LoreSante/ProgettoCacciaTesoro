(function($) {

    $.fn.insertIdGame = function (options) {//script per l'ìnserimento dell'id partita all'interno della colonna game in tabella player
                                            //+ reindirizzamento alla pagina newGame.php
        console.log("a");
        let $inputFormIdGame=document.getElementById("inputFormIdGame");

        let $joinGameButton=document.getElementById("joinGameButton");
        let playerId;
        let request_type="getIdUser"
        let requestSession = $.ajax({
            url: options.serverURL3,
            type: "POST",
            data:{ "action" : request_type },
            dataType: "json",
        })

        requestSession.done(function(data){
            console.log("REQUEST.DONE, User ID: " + data);
            playerId=data;
        });

        $joinGameButton.onclick=function(){
            request_type="load";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
            })

            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
                let idGame=$inputFormIdGame.value;
                let idArray=data.keys;
                let length=idArray.length;
                console.log("PLAYER ID"+playerId);
                console.log(idGame);
                console.log(length);
                console.log(idArray);
                if(isInIdArray(idGame, idArray, length)){
                    request_type="update"
                    let request2 = $.ajax({
                        url: options.serverURL2,
                        type: "POST",
                        data:{ "id":playerId, "game":idGame, "action" : request_type },
                        dataType: "json",
                    })

                    request2.done(function(data){
                        console.log("REQUEST.DONE UPDATE GAME PLAYER: " + data);
                        location.href='newGame.php';
                    })
                }
                else{
                    alert("Match not found. Retry to insert the id-game")
                }

            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });


        }

        function isInIdArray(idGame, idArray, length){
            for(let i=0; i<length; i++)
            {
                if(idGame===idArray[i].id){
                    return true;
                }

            }
            return false;
        }
    }
})(jQuery);

