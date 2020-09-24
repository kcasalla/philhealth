(function($) {
    $.fn.clickToggle = function(none, block) {
        var funcs = [none, block];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function(){
    $('.menu-button').clickToggle(function() {
        $(this).html('close');
        $('.mobile-dropdown').css({
            'top':'59px',
            'transition': 'all .2s'
        });
    }, function() {
        $(this).html('menu');
        $('.mobile-dropdown').css({
            'top':'',
            'transition': 'all .2s'
        });
    });
});