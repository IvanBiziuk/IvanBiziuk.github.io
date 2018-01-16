/*
$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click(function(){ // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});
*/
$(document).ready(function(){
        $(function(){
                $('#up-top').hide();
                $(window).scroll(function(){
                        if($(this).scrollTop()>100){
                            $('#up-top').fadeIn();
                        } else {
                            $('#up-top').fadeOut();
                        }
                    }
                );
                $('#up-top').click(function(){
                    $('body, html').animate({scrollTop:0},2000);
					
                    }
                );
            }
        );
    }
);