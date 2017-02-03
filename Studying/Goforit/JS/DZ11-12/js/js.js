$(function() {

    $('.motocarousel').motoCarousel({
        speedAnimation: 600
    });

});

$(function() {

    var template = $('#profile').html(); //ищем тег script и с помощью метода .html берем содержимое этого тега

    var info = {
        name: 'Бизюк Иван Анатольевич',
        profession: 'Менеджер забористостроительного комбината',
        why: 'Хочу учить фронтенд потому что:',
        whyFirst:'Забористостроительство вызывает когнитивный диссонанс',
        whySecond:'В связи с чем постоянно чешется левая пятка',
        contactsFirst: 'Мой контактный номер телефона',
        contactsSecond: '+380509137889',
        contactsThird: 'Мой профиль в фэйсбуке',
        contactsFours: 'Facebook',
        feedbackFirst: 'Мой фидбек:',
        feedbackSecond: 'Если нужно, могу подогнать чего-то забористого'
    };

var content = tmpl(template, info);

$('body').append(content); //и вставляем в дом

console.log(template);

});

