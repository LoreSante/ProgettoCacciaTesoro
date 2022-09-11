(function($) {

    $.fn.statusGame = function (options) {//
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
                location.href="cluePage.php";
            });
        }
    }

})(jQuery);