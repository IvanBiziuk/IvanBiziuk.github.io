$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+590) {
        $(this).addClass('fadeIn');
      }
    });
  });
$(window).scroll(function() {
    $('.mov2').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+490) {
            $(this).addClass('fadeIn');
        }
    });
});
$(window).scroll(function() {
    $('.mov3').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+490) {
            $(this).addClass('fadeIn');
        }
    });
});
$(window).scroll(function() {
    $('.mov4').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+490) {
            $(this).addClass('fadeIn');
        }
    });
});