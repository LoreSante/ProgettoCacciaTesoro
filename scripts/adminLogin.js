
let passwordArray;
let arrayLength;

(function($) {

    $.fn.adminLogin = function (options){
        
        let $loginButton = $('.loginButton', this.parent());

        $loginButton.on("click", function () {

            loadPasswords();
            console.log("fuori"+passwordArray);

            let password = window.prompt("Inserisci chiave di accesso");

            if(isInArray(passwordArray,password)){
                location.href='adminGallery.html';
            }
            else{
                window.alert("CHIAVE ERRATA");

            }

        });

        function loadPasswords(){
            console.log("bolla");

            let request_type="load";
            let request = $.ajax({
                url: options.serverURL,
                type: "POST",
                data:{ "action" : request_type },
                dataType: "json",
                success: function( data ) {
                    console.log( data.keys[0].password);
                }
            })


            request.done(function(data) {
                passwordArray=data.keys;
                arrayLength = passwordArray.length;
                console.log("REQUEST.DONE: " + data);

               // var data = $.parseJSON(data);


            });

            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });

           //  console.log(request.responseText);



        }

        function isInArray(array,password){

            for(let i=0; i<arrayLength; i++){
                if(password===array[i].password) {
                    return true;
                }
            }
            return false;

        }



        /*
        PER CREARE FINESTRE DI DIALOGO CON BARRA DI INSERIMENTO E PULSANTI ANNULLA E OK
        Restituisce nella variabile il valore inserito nel form di inserimento
        (una volta che si preme su "ok")
        --Da verificare e provare--

        var nome = window.prompt("Inserisci il tuo nome");
        if (nome != null) {
	    // ...
        }

         */
        /*

        $.fn.adminLogin = function (options){


            let  $this=$(this);

            $('<span class="material-symbols-outlined loginButton">engineering</span>').insertBefore($this);




            let $loginButton = $('.loginButton', $this.parent());
            $loginButton.on("click", function () {
                let password = window.prompt("Inserisci chiave di accesso");


                if(password==="leonardodavinci"){

                    location.href='adminGallery.html';
                }

            })
*/





        }

})(jQuery);