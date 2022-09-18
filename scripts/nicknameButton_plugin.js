(function($) {

    $.fn.nicknameButton = function (options) {//si occupa del funzionamento del tasto accedi in index
        console.log("PARTITO");
        let $nicknameButton=document.getElementById("nicknameButton");
        $nicknameButton.onclick= function (){
            deletePlayer();
        };

        function deletePlayer(){
            let request_type="getIdUser";
            let requestPlayerId = $.ajax({
                url: options.serverURL,
                type: "POST",
                data: { "action": request_type},
                dataType: "json",
            })
            requestPlayerId.done(function (data) {
                console.log(data);
                let request_type="deleteDataSearchedByPlayerId";
                let request = $.ajax({
                    url: options.serverURL2,
                    type: "POST",
                    data: { "id": data,"action": request_type},
                    dataType: "json",
                })

                request.done(function (data){
                    location.href="index.php";
                });


            });
            requestPlayerId.fail(function(jqXHR, textStatus) {
                alert( "RequestGetPaintings failed: " + textStatus );
            });
        }
    }
})(jQuery);
