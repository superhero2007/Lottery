//== Class definition

var ActionsDemo = function () {    
    //== Dashboard functions

    return {
        // public functions
        init: function() {
            $('.summernote').summernote({
                height: 250, 
            });
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    ActionsDemo.init();
});
