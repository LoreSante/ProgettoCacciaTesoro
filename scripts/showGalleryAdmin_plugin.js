(function($) {

    $.fn.showGallery = function (options) {//mostra dipinti in gallery backend

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

            let length=data.paintings.length;
            for(let i=0; i<length ; i++){

                let container = document.getElementById("paintingsContainer");
                // Take the row headings and make an HTML container out of them
                let newDiv = document.createElement("div");
                newDiv.className="col-xs-12 paintings";
                let newDiv3 = document.createElement("div");
                newDiv3.className="col-xs-12 titlePainting";
                let newDiv2 = document.createElement("div");
                newDiv2.className="columnPicture";
                let newImg =document.createElement("img");
                newImg.src=data.paintings[i].url;
                newImg.alt="";
                newDiv3.innerText=data.paintings[i].title;
                newDiv2.appendChild(newImg);
                newDiv.appendChild(newDiv2);
                newDiv.appendChild(newDiv3);
                container.appendChild(newDiv);
                newImg.addEventListener("click", function(){
                    loadPaintingInfo(newImg.src);

                });
            }
        });

        function loadPaintingInfo(url){
            console.log("INIZIO FUNZIONE LOAD");
            console.log(url);
            let request_type="search";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"paintingURL":url,"action": request_type},
                dataType: "json",
            })
            request.done(function(data) {
                let modal = document.getElementById("formWrapper");
                let id = document.getElementById("paintingId");
                let title = document.getElementById("title");
                let author = document.getElementById("author");
                let year = document.getElementById("year");
                let technique= document.getElementById("technique");
                let position = document.getElementById("position");
                let description = document.getElementById("description");
                let riddle = document.getElementById("riddle");
                let url = document.getElementById("paintingImage");

                let $addButton = document.getElementById("add");
                //let $addButton = $('.add', this.parent());
                $addButton.style.display="none";
                console.log(data);
                id.innerText=data.painting.id;
                console.log(data.painting.id);
                title.innerText=data.painting.title;
                author.innerText=data.painting.author;
                year.innerText=data.painting.year;
                technique.innerText=data.painting.technique;
                position.innerText=data.painting.position;
                description.innerText=data.painting.description;
                riddle.innerText=data.painting.riddle;
                url.src=data.painting.url;
                modal.style.display="block";
                console.log("REQUEST.DONE: " + data);


            });

        }

    }
})(jQuery);


