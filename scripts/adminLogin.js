(function($) {

    $.fn.adminLogin = function (options){

        //TODO fare il plugin


        let $loginButton = $('.loginButton', this.parent());
        $loginButton.on("click", function () {
            let password = window.prompt("Inserisci chiave di accesso");
            //fixme modifica il codice in modo tale che la password venga confrontata con quelle in database

            if(password==="leonardodavinci"){
                location.href='adminGallery.html';
            }
            else{
                window.alert("CHIAVE ERRATA");
            }

        })

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

            //TODO fare il plugin

            let  $this=$(this);

            $('<span class="material-symbols-outlined loginButton">engineering</span>').insertBefore($this);




            let $loginButton = $('.loginButton', $this.parent());
            $loginButton.on("click", function () {
                let password = window.prompt("Inserisci chiave di accesso");
                //fixme modifica il codice in modo tale che la password venga confrontata con quelle in database

                if(password==="leonardodavinci"){
                    //todo consenti accesso
                    location.href='adminGallery.html';
                }

            })
*/





        }

})(jQuery);