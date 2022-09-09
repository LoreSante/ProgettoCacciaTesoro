(function($) {
    $.fn.showPaintingInfo = function (options) {

        console.log("CALL PLUGIN SHOW PAINTING INFO");
        let $this=$(this);
        let $paintingImage = $('.columnPicture img', this.parent());//FIXME:verifica che funzioni
        console.log("creato $paintingImage");
        $paintingImage.on("click", function (){
            console.log("entrato nell'onclick");
            let url= $paintingImage.src;
            loadPaintingInfo(url);

        });

        function loadPaintingInfo(url){
            console.log("INIZIO FUNZIONE LOAD");
            console.log(url);
            let request_type="search";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: {"paintingUrl":url,"action": request_type},
                dataType: "json",
            })
            request.done(function(data) {
                console.log("REQUEST.DONE: " + data);
            });

        }
    }
})(jQuery);
