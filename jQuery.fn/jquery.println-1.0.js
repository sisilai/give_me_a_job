/**
 * Created by Administrator on 2015/12/20.
 */
jQuery.fn.println = function() {
    var msg = Array.prototype.join.call(arguments, "$");
    return this.each(function() {
        jQuery(this).append(document.createTextNode(msg)).append("<br/>");
    });
};

//(function($){
//        function println() {
//            var msg = Array.prototype.join.call(arguments, "$");
//            return this.each(function() {
//                jQuery(this).append(document.createTextNode(msg)).append("<br/>");
//            });
//        }
//    println();
//    }(jQuery));