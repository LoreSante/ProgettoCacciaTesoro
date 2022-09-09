(function($) {
    $.fn.showGallery = function (options) {

        console.log("CALL PLUGIN SHOW GALLERY");
        let $this=$(this);
        let request_type="load";
        let request = $.ajax({
            url: options.serverURL,
            type: "POST",
            data: {"action": request_type},
            dataType: "json",
        })

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);
           // let arrayPaintings=data.paintings;
            //let length=arrayPaintings.length;

            let length=data.paintings.length;
            for(let i=0; i<length ; i++){

                let container = document.getElementById("paintingsContainer");
                // Take the row headings and make an HTML container out of them
                let newDiv = document.createElement("div");
                newDiv.className="col-xs-12 paintings";
                let newDiv2 = document.createElement("div");
                newDiv2.className="columnPicture";
                let newImg =document.createElement("img");
                newImg.src=data.paintings[i].url;
                newImg.alt="";
                newDiv2.appendChild(newImg);
                newDiv.appendChild(newDiv2);
                container.appendChild(newDiv);
            }

        });

/*
        return this.each(function(i,obj){

            console.log("obj:" +obj);

            let $this = $(this);
            $('<form action=server/paintings_actions_page.php method="post">'
                +'<label title="Nome giocatore">'
                +'<input type="text" class="fname" id="fname" placeholder="Inserire nome giocatore">'
                +'</label>'
                +'<input type="button" value="Seleziona" class="nameSelected">'
                +'</form>'
            ).insertBefore($this);


            let $submitButton = $('.nameSelected', $this.parent());

            $submitButton.on("click", function () {
                $playerName=$this.parent().find(".fname").val();
                //sendName($this);


            });
        });

 */
    }
})(jQuery);


