(function($) {

    $.fn.showRules = function (options) {

        let modal = document.getElementById("formWrapper");

        let closeButton = document.getElementById("closeButton");
        let openButton = document.getElementById("rulesButton");

        closeButton.onclick = function () {
            modal.style.display = "none";

        }

        openButton.onclick = function () {
            modal.style.display = "block";
        }
    }
})(jQuery);