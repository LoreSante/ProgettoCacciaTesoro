// JavaScript Document
(function($) {
    console.log("JQUERY: " + $);


    $.fn.insertName = function (options) {
        console.log("CALL PLUGIN TODO");
        var defaults = {
            serverURL: "example.com/server_page_url",
        }
        options = $.extend(defaults, options);
        console.log("OPTIONS: " + defaults['serverURL']);

        // for each item in the wrapped set
        return this.each(function (i, obj) {
            console.log("INITIALIZE PLUGIN " + i);

            // cache "this."
            var $this = $(this);

            // Wrap "this" in a div with a class of "plugin_wrapper"
            $this.wrap('<div class="plugin_wrapper" />');

            $this.addClass('to-do-list-container');

            $('<h2>My To Do List</h2>' +
                '<textarea class="todo_textarea"></textarea>' +
                '<input type="submit" value="add to do" class="to_do_submit" />').insertBefore($this);

            var $submitButton = $('.to_do_submit', $this.parent());


            $submitButton.on("click", function (event) {
                //alert("To Do Submitted");
            });
        });
    }
})(jQuery);
