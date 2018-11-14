//== Class definition

var SummernoteDemo = function () {    
    //== Dashboard functions
    var demos = function () {
        $('.summernote').summernote({
            height: 150
        });
    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    SummernoteDemo.init();
});
