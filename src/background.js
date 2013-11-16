(function($){
    'use strict';

    var giffed;

    $(function(){
        $('.stream-item').each(function(i, item){
            parseStreamItem(item);
        });

        $('.stream-items').bind('DOMNodeInserted', function(e) {
            var target = $(e.target);
            if (target.is('.stream-item')) {
                parseStreamItem(target);
            }
        });
    });

    function parseStreamItem(item) {
        giffed = new Giffed(item);
        giffed.giffed();
    }

})(jQuery);
