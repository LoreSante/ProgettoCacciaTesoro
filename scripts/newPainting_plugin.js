
(function($) {

    $.fn.insertPainting = function (options){

        let modal = document.getElementById("formWrapper");
        let openButton = document.getElementById("addPaintButton");
        let closeButton = document.getElementById("closeButton");
        let titleButton = document.getElementById("titleButton");
        let titleInput = document.getElementById("titleInput");
        let title = document.getElementById("title");
        let authorButton = document.getElementById("authorButton");
        let authorInput = document.getElementById("authorInput");
        let author = document.getElementById("author");
        let yearButton = document.getElementById("yearButton");
        let yearInput = document.getElementById("yearInput");
        let year = document.getElementById("year");
        let techniqueButton = document.getElementById("techniqueButton");
        let techniqueInput = document.getElementById("techniqueInput");
        let technique = document.getElementById("technique");
        let positionButton = document.getElementById("positionButton");
        let positionInput = document.getElementById("positionInput");
        let position = document.getElementById("position");
        let descriptionButton = document.getElementById("descriptionButton");
        let descriptionInput = document.getElementById("descriptionInput");
        let description = document.getElementById("description");
        let urlButton = document.getElementById("urlButton");
        let urlInput = document.getElementById("urlInput");
        let image = document.getElementById("paintingImage");
        let riddleButton = document.getElementById("riddleButton");
        let riddleInput = document.getElementById("riddleInput");
        let riddle = document.getElementById("riddle");

        let deleteButton = document.getElementById("delete");
        let $this=$(this);
        let $addButton = document.getElementById("add");
        let $saveButton = document.getElementById("save");
        let paintingId = document.getElementById("paintingId")


        openButton.onclick = function() {
            $addButton.style.display="block";
            modal.style.display = "block";
            $saveButton.style.display = "none";
        }

        closeButton.onclick = function() {
            modal.style.display = "none";
            title.innerText="Titolo";
            author.innerText="";
            technique.innerText="";
            description.innerText="";
            image.src="https://via.placeholder.com/150x250/#e0e0e0";
            urlInput.value="";
            $addButton.style.display="null";
            $saveButton.style.display="block";
        }

        titleButton.onclick = function (){
            if(titleInput.style.display=== "block")
            {
                title.innerText=titleInput.value;
                title.style.display = "block";
                titleInput.style.display = "none";

            }

            else
            {
                titleInput.style.display = "block";
                titleInput.value = title.innerText;
                title.style.display = "none";
            }
        }

        authorButton.onclick = function (){
            if(authorInput.style.display=== "block")
            {
                author.innerText=authorInput.value;
                author.style.display = "block";
                authorInput.style.display = "none";

            }

            else
            {
                authorInput.style.display = "block";
                authorInput.value = author.innerText;
                author.style.display = "none";
            }
        }

        yearButton.onclick = function (){
            if(yearInput.style.display=== "block")
            {
                year.innerText=yearInput.value;
                year.style.display = "block";
                yearInput.style.display = "none";

            }

            else
            {
                yearInput.style.display = "block";
                yearInput.value = year.innerText;
                year.style.display = "none";
            }
        }


        techniqueButton.onclick = function (){
            if(techniqueInput.style.display=== "block")
            {
                technique.innerText=techniqueInput.value;
                technique.style.display = "block";
                techniqueInput.style.display = "none";

            }

            else
            {
                techniqueInput.style.display = "block";
                techniqueInput.value = technique.innerText;
                technique.style.display = "none";
            }
        }

        positionButton.onclick = function (){
            if(positionInput.style.display=== "block")
            {
                position.innerText=positionInput.value;
                position.style.display = "block";
                positionInput.style.display = "none";

            }

            else
            {
                positionInput.style.display = "block";
                positionInput.value = position.innerText;
                position.style.display = "none";
            }
        }

        descriptionButton.onclick = function (){
            if(descriptionInput.style.display=== "block")
            {
                description.innerText=descriptionInput.value;
                description.style.display = "block";
                descriptionInput.style.display = "none";

            }

            else
            {
                descriptionInput.style.display = "block";
                descriptionInput.value = description.innerText;
                description.style.display = "none";
            }
        }

        riddleButton.onclick = function (){
            if(riddleInput.style.display=== "block")
            {
                riddle.innerText=riddleInput.value;
                riddle.style.display = "block";
                riddleInput.style.display = "none";

            }

            else
            {
                riddleInput.style.display = "block";
                riddleInput.value = riddle.innerText;
                riddle.style.display = "none";
            }
        }

        urlButton.onclick = function (){
            if(urlInput.style.display=== "block")
            {
                image.src= urlInput.value;
                urlInput.style.display = "none";
                urlInput.value="";

            }

            else
            {
                urlInput.style.display = "block";
            }
        }

        deleteButton.onclick = function (){
            title.innerText="Titolo";
            author.innerText="";
            technique.innerText="";
            description.innerText="";
            image.src="https://via.placeholder.com/150x250/#e0e0e0";
            urlInput.value="";
        }

        $saveButton.onclick = function (){
            console.log("EVENTO CLICK");
            let $title=title.innerText;
            let $author=author.innerText;
            let $year=year.innerText;
            let $technique=technique.innerText;
            let $position=position.innerText;
            let $description=description.innerText;
            let $image=image.src;
            let $riddle=riddle.innerText;
            updatePainting($this, $title, $author,$year,$technique,$position,$description,$image, $riddle);
            //location.href='adminGallery.html';

        }

        $addButton.onclick = function (){
            console.log("EVENTO CLICK");
            let $title=title.innerText;
            let $author=author.innerText;
            let $year=year.innerText;
            let $technique=technique.innerText;
            let $position=position.innerText;
            let $description=description.innerText;
            let $image=image.src;
            let $riddle=riddle.innerText;
            sendPainting($this, $title, $author,$year,$technique,$position,$description,$image, $riddle);
            location.href='adminGallery.html';
        }

        function sendPainting($el, $t, $a, $y, $te, $p, $d, $i, $r){
            console.log("INIZIO FUNZIONE");
            let request_type = "insert";
            let title = $t;
            let author= $a;
            let year= $y;
            let technique = $te;
            let position= $p;
            let description= $d;
            let url= $i;
            let riddle=$r;
            console.log("title:" +title);
            console.log("author:" +author);
            console.log("year:" +year);
            console.log("technique:" +technique);
            console.log("position:" +position);
            console.log("description:" +description);
            console.log("url:" +url);
            console.log("url:" +riddle);

            if (title.length > 2) {
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"title" : title, "author" : author , "year" : year, "technique" : technique ,
                        "position" : position ,"description" : description , "url" : url , "riddle" : riddle,
                        "action" : request_type},
                    dataType: "json",

                });

                request.done(function(data) {
                    console.log("REQUEST.DONE: " + data)
                });

            }

        }

        function updatePainting($el, $t, $a, $y, $te, $p, $d, $i, $r) {
            console.log("INIZIO FUNZIONE UPDATE");
            let request_type = "update";
            let title = $t;
            let author = $a;
            let year = $y;
            let technique = $te;
            let position = $p;
            let description = $d;
            let url = $i;
            let riddle = $r;
            let $id=paintingId.innerText;
            console.log("id:" + $id);
            console.log("title:" + title);
            console.log("author:" + author);
            console.log("year:" + year);
            console.log("technique:" + technique);
            console.log("position:" + position);
            console.log("description:" + description);
            console.log("url:" + url);
            console.log("riddle:" + riddle);

            if (title.length > 2) {
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {
                        "id":$id ,"title": title, "author": author, "year": year, "technique": technique,
                        "position": position, "description": description, "url": url, "riddle": riddle,
                        "action": request_type
                    },
                    dataType: "json",

                });

                request.done(function (data) {
                    console.log("REQUEST.DONE UPDATE: " + data)
                    location.href='adminGallery.html';
                });

            }
        }
    }

})(jQuery);