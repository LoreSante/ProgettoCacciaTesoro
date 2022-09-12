(function($) {

    $.fn.cluePageGame = function (options) {
        const paintingsExtracted = [];

        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: { "action": request_type},
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
            generateSelect(data);
           // choosePainting(data);
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });


        function generateSelect(data){  //genera il menu select
            for(let i=0; i<data.paintings.length; i++){
                let option = document.createElement("option");
                let select = document.getElementById("selectPaint");
                option.innerText= data.paintings[i].title;
                select.appendChild(option);
            }
        }
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
        //TODO: valutare se è meglio creare una permutazione di indici e
        // scorrere l'array attravero il punteggio (Forse è meglio in effetti).
        // .Capire inoltre se l'array deve essere una variabile di sessione o no, per permettere la navigazione tra le pagine
        //




    }

})(jQuery);

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