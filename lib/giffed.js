(function($){
    'use strict';

    window.Giffed = function(el, type){
        this.$el = $(el);
        this.type = window.location.host;
    };

    $.extend(Giffed.prototype, {
        isGif: function(url){
            return (url.split('.').pop() == 'gif');
        },
        createCard: function(data) {
            var card = $('<div>', {class: 'cards-base cards-multimedia'});
            return card.append(data);
        },
        createImage: function(url) {
            return $('<img/>', {
                width: "100%",
                src: url
            });
        },
        giffed: function() {
            var self = this;
            switch (this.type) {
                case 'twitter.com':
                    var $tweet = self.$el.find('.tweet');
                    $tweet.find('a[data-expanded-url]').each(function(a, link){
                        var url = $(link).attr('data-expanded-url');
                        if( self.isGif(url) ) {
                            var img = self.createImage(url);
                            $tweet.find('.tweet-text').after(
                                self.createCard(img)
                            );
                        }
                    });
                  break;
            }
        }
    });
})(jQuery);
