// JavaScript Document
let $playerName= "Guest";
(function($) {
    console.log("JQUERY: " + $);
    $.fn.insertName = function (options) {
        console.log("CALL PLUGIN TODO");

        return this.each(function(i,obj){
            console.log("obj:" +obj);
            let $this = $(this);
            let $submitButton = $('.nameSelected', $this.parent());
            $submitButton.on("click", function () {
                if($this.parent().find(".fname").val()!="")
                    $playerName=$this.parent().find(".fname").val();
            });
        });
    }

})(jQuery);


