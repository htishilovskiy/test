/**
 * Theme javascript functions file.
 *
 */
(function ($) {
    "use strict";

    // Nav
    function navigation() {
        // Add current class to active menu's item
        var links = $(".navbar a, .nav a");
        $.each(links, function (key, va) {
            if (va.href === document.URL) {
                $(this)
                    .addClass("active")
                    .parents("li")
                    .addClass("active");
            }
        });
    }

    // Initialize lozad library


    // Popup 





    /* Document Ready */


})(jQuery);

