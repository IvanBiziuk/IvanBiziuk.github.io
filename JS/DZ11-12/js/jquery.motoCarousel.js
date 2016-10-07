(function($) {

        $.fn.motoCarousel = function(options) {

            var defaults = {
                speedAnimation: 500
            };

            var userSettings = $.extend(defaults, options);

            var $leftMove = $('.carousel-arrow-left');
            var $rightMove = $('.carousel-arrow-right');
            var $elementsList = $('.carousel-list');
            var $pixelsOffset = 425;
            var $currentLeftValue = 0;
            var $elementsCount = $elementsList.find('li').length;
            var $minimumOffset = -(($elementsCount - 5) * $pixelsOffset);
            var $maximumOffset = 0;


            function leftClickEvent() {
                if ($currentLeftValue != $maximumOffset) {
                    $currentLeftValue += 425;
                    $elementsList.animate({ left: $currentLeftValue + "px" }, userSettings.speedAnimation);
                };
            };

            function rightClickEvent() {
                if ($currentLeftValue != $minimumOffset) {
                    $currentLeftValue -= 425;
                    $elementsList.animate({ left: $currentLeftValue + "px" }, userSettings.speedAnimation);
                };
            };

            $leftMove.click(leftClickEvent);

            $rightMove.click(rightClickEvent);

        return this;
    }
})(jQuery);
