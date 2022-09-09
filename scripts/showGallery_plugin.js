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
        //-----------------------------------------------

        //-----------------------------------------------

        request.done(function(data) {
            console.log("REQUEST.DONE: " + data);

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

    }
})(jQuery);


