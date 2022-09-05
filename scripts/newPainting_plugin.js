
(function($) {

    $.fn.insertPainting = function (options){





        function sendPainting($el){
            console.log($el);
            let $this = $el;
            console.log("sendPainting");
            let request_type = "insert";
            let $title = $this.parent().find('.fname'); //fixme [modificare campo dopo aver creato il form per inserire i campi]
            let title = $title.val();
            let $author= null; //fixme [come sopra]
            let author=$author.val();
            let $year= null; //fixme [come sopra]
            let year=$year.val();
            let $technique= null; //fixme [come sopra]
            let technique=$technique.val();
            let $position= null; //fixme [come sopra]
            let position=$position.val();
            let $description= null; //fixme [come sopra]
            let description=$description.val();
            let $url= null; //fixme [come sopra]
            let url=$url.val();

            console.log("title:" +title);
            console.log("author:" +author);
            console.log("year:" +year);
            console.log("technique:" +technique);
            console.log("position:" +position);
            console.log("description:" +description);
            console.log("url:" +url);

            if (title.length > 2) {
                let request = $.ajax({
                    url: options.serverURL,
                    type: "POST",
                    data: {"title" : title, "author" : author , "year" : year, "technique" : technique ,
                        "position" : position ,"description" : description , "url" : url ,
                        "action" : request_type},
                    dataType: "json",

                });

                request.done(function(data) {
                    console.log("REQUEST.DONE: " + data)
                });

                request.fail(function(jqXHR, textStatus) {
                    alert( "Request failed: " + textStatus );
                });

            }

        }

    }

})(jQuery);