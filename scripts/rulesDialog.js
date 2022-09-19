(function($) {

    $.fn.showRules = function (options) {//si occupa della dialog che narra le regole del gioco

        let modal = document.getElementById("formWrapper");

        let closeButton = document.getElementById("closeButton");

        let openButton = document.getElementById("rulesButton");
        let openButtonMobile = document.getElementById("rulesButtonMobile")

        closeButton.onclick = function () {
            modal.style.display = "none";
        }

        openButton.onclick = function () {
            modal.style.display = "block";
        }
        openButtonMobile.onclick = function () {
            modal.style.display = "block";
        }

    }
})(jQuery);