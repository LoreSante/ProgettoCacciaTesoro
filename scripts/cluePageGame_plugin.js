(function($) {

    $.fn.cluePageGame = function (options) {
        let paintingArray = [];
        let playerId;
        let playerPoints;

        let request_type="getIdUser";
        let requestPlayerId = $.ajax({
            url: options.serverURL2,
            type: "POST",
            data: { "action": request_type},
            dataType: "json",
        })
        requestPlayerId.done(function (data) {
            playerId=data;
            console.log("REQUEST DONE---: "+ data);
        });
        requestPlayerId.fail(function(jqXHR, textStatus) {
            alert( "RequestGetPaintings failed: " + textStatus );
        });


        request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: { "action": request_type},
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST DONE GET ALL PAINTINGS: " + data);
            generateSelect(data);
            paintingArray=data.paintings;


            request_type="getPaintingsArray";
            let requestGetPaintings= $.ajax({
                url: options.serverURL2,
                type: "POST",
                data: { "action": request_type},
                dataType: "json",
            })

            requestGetPaintings.done(function(data){
                console.log("REQUESTGetPaintings DONE: " + data);
                if(data.length==0){
                    generatePaintingsArray();
                }else{
                    paintingArray=data;
                    console.log("Array is already setted:  " + data);
                }
                //TODO Continua da qui
                setInterval(showCurrentRiddle, 1000);
                //showCurrentRiddle();



            });

            request.fail(function(jqXHR, textStatus) {
                alert( "RequestGetPaintings failed: " + textStatus );
            });




        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });



        //FUNZIONI


        function generateSelect(data){  //genera il menu select
            for(let i=0; i<data.paintings.length; i++){
                let option = document.createElement("option");
                let select = document.getElementById("selectPaint");
                option.innerText= data.paintings[i].title;
                select.appendChild(option);
            }
        }

        function generatePaintingsArray(){

            shufflePaintingsArray();
            console.log("array shuffled: "+ paintingArray);

            let request_type="setPaintingsArray";
            let requestSetPaintings= $.ajax({
                url: options.serverURL2,
                type: "POST",
                data: { "paintingsArray": paintingArray, "action": request_type},
                dataType: "json",
            })

            requestSetPaintings.done(function(data){
                console.log("REQUESTSetPaintings DONE: " + data);
            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

        }


        function shufflePaintingsArray(){
            let randIndex;
            for(let i=paintingArray.length-1; i>0; i--){
                randIndex=Math.floor(Math.random()*(i+1));
                let temp= paintingArray[i];
                paintingArray[i]=paintingArray[randIndex];
                paintingArray[randIndex]=temp;
            }
        }

        function showCurrentRiddle(){
            let request_type="loadDataSearchedByPlayerId";
            let requestPoints=$.ajax({
                url: options.serverURL3,
                type: "POST",
                data: { "id": playerId, "action": request_type},
                dataType: "json",
            })

            requestPoints.done(function (data) {
                console.log("POINTS:"+data.player.points+ "/10");
                let $riddle=document.getElementById("clueText");
                $riddle.innerText=paintingArray[data.player.points].riddle;
                playerPoints=data.player.points;
                //confirmPaintingButton();
                //TEST //////////////////////////////////////////////////
                setInterval(createButton,1000);

                ////////////////////////////////////////////////////////
            });
            requestPoints.fail(function(jqXHR, textStatus) {
                alert( "RequestPoints failed: " + textStatus );
            });

        }

        function createButton(){
            let $confirmButton=document.getElementById("confirmButton");
            $confirmButton.onclick = function () {
                confirmPaintingButton();
            }
        }


        function confirmPaintingButton() {
            //let $confirmButton=document.getElementById("confirmButton"); TODO:SPOSTARE

            request_type = "loadDataSearchedByPlayerId";
            let requestGetPoints = $.ajax({
                url: options.serverURL3,
                type: "POST",
                data: {"id": playerId, "action": request_type},
                dataType: "json",
            })

            requestGetPoints.done(function (data) {
                playerPoints = data.player.points;
                console.log("REQUEST GET POINTS [BUTTON] DONE---: " + data.player.points);
                updatePoints();

            });

            requestGetPoints.fail(function (jqXHR, textStatus) {
                alert("RequestGetPoints failed: " + textStatus);
            });
        }


        function updatePoints() {
            let $select = document.getElementById("selectPaint");
            let selectText=$select.value;
            let paintingArrayText=paintingArray[playerPoints].title.replace(/\n/g, '');
            if (selectText===paintingArrayText) {
                console.log("RISPOSTA CORRETTA")
                showPainting();

                playerPoints++;
                let request_type = "updatePoints";
                let requestUpdatePoints = $.ajax({
                    url: options.serverURL3,
                    type: "POST",
                    data: {"id": playerId, "points": playerPoints, "action": request_type},
                    dataType: "json",
                })


                requestUpdatePoints.done(function (data) {
                    console.log("REQUEST DONE _ NEW POINTS: " + data);
                    setTimeout(resetPaintingImage, 2000);
                });
                requestUpdatePoints.fail(function (jqXHR, textStatus) {
                    alert("RequestUpdatePoints failed: " + textStatus);
                });
            }
        }

        function showPainting(){
            let $paintingImage=document.getElementById("paintImage");
            $paintingImage.src=paintingArray[playerPoints].url;
        }

        function resetPaintingImage(){
            let $paintingImage=document.getElementById("paintImage");
            $paintingImage.src="https://via.placeholder.com/150x250/#e0e0e0";
        }



        //TODO: valutare se è meglio creare una permutazione di indici e
        // scorrere l'array attravero il punteggio (Forse è meglio in effetti).
        // .Capire inoltre se l'array deve essere una variabile di sessione o no, per permettere la navigazione tra le pagine
        //

    }

})(jQuery);

/* Funzione superflua

       function copyPaintingArray(array){ //copia l'array di quadri in paintingArray
           for(let i=0; i<array.length; i++){
               paintingArray[i]=array[i];
           }
       }
       */


/*
        function choosePainting(data){
            //sceglie casualmente un indice tra quelli ancora non scelti FIXME: non funzione (non importa tanto non serve)

            let oldPaintingFlag=data.paintings.length;
            while(oldPaintingFlag){
                let newPaintingIndex=Math.floor(Math.random()*data.paintings.length);
                for(let i=0; i<paintingsExtracted.length; i++){
                    if(newPaintingIndex!=paintingsExtracted[i]){
                        oldPaintingFlag--;
                    }
                }
            }
            paintingsExtracted.push(newPaintingIndex);
        }

 */

/*
        for(let i=0;i<data2.players.length; i++)
         removeFlag++;
                                let divPlayer = document.createElement("div");
                                let container = document.getElementById("playerNamesWrapper");
                                divPlayer.className = "playerNameSample";
                                if (data2.players[i].nickname === "Guest") {
                                    divPlayer.innerText = data2.players[i].nickname + "_" + data2.players[i].id;
                                } else
                                    divPlayer.innerText = data2.players[i].nickname;
                                console.log("REQUEST.DONE PLAYER: " + data2.players[i].nickname);
                                container.appendChild(divPlayer);
                            }
        */

/*
 let $startGameButton = document.getElementById("startGameButton");
 $startGameButton.onclick = function (){
     updateStatus();
 }

 function updateStatus(){
     let $matchID= document.getElementById("matchID").innerText;
     console.log($matchID);
     let request_type = "updateStatus";
     let request = $.ajax({
         url: options.serverURL,
         type: "POST",
         data: {"id": $matchID, "status": 1, "action": request_type},
         dataType: "json",
     })

     request.done(function (data){
         console.log("DONE UPDATE STATUS");
     });
 }
 */