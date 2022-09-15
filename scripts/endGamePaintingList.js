(function($) {

    $.fn.generatePaintingsList = function (options) {
        let paintingsArray;


        function getPaintingsArray(){
            let request_type="getPaintingsArray";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data:{ "id":data,"action" : request_type },
                dataType: "json",
            })

            request.done(function(data){
                paintingsArray=data;
                console.log("PAINTINGS ARRAY:" +paintingsArray);


            });
        }

        function generateList(){
            let paintingsContainer = document.getElementById("endGamePaintingsContainer");
            for(let i=0; i<paintingsArray.length; i++){

                let paintingWrapper = document.createElement("paintingWrapper");
                let paintingImage =  document.createElement("paintingImage");
                let paintingRiddle =  document.createElement("paintingRiddle");

                //TODO aggiungi classi agli elementi
                //TODO riempi con contenuti

                //option.innerText= data.paintings[i].title;
                select.appendChild(option);
            }
        }


    }

})(jQuery);
