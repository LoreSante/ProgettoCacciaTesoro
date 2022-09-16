(function($) {

    $.fn.generatePaintingsList = function (options) {
        let paintingsArray;

        getPaintingsArray();

        function getPaintingsArray(){
            let request_type="getPaintingsArray";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data:{"action" : request_type },
                dataType: "json",
            })

            request.done(function(data){
                paintingsArray=data;
                console.log("PAINTINGS ARRAY:" +paintingsArray);
                generateList();

            });
        }

        function generateList(){
            let paintingsContainer = document.getElementById("endGamePaintingsContainer");
            for(let i=0; i<paintingsArray.length; i++){

                let paintingWrapper = document.createElement("div");
                let paintingImage =  document.createElement("img");
                let paintingRiddle =  document.createElement("h5");
                paintingWrapper.className= "paintingWrapper row align-content-center";
                paintingImage.className="paintingImage col-12 col-md-4";
                paintingRiddle.className="paintingRiddle col-12 col-md-6";

                paintingImage.src=paintingsArray[i].url;
                paintingRiddle.innerText=paintingsArray[i].riddle;

                paintingsContainer.appendChild(paintingWrapper);
                paintingWrapper.appendChild(paintingImage);
                paintingWrapper.appendChild(paintingRiddle);
            }
        }


    }

})(jQuery);
