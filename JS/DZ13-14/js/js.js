'use strict'

$(function() {

    var $template = $('#test').html();
    var content;
    var userAnswer;
    var objectToJson;
    var jsonToObject;
    var localStorageGetData;
    var rightAnswer = [];
    var $modal= $('.modal-container');
    var modalElement = document.querySelector('.modal-block');


    var infoObject = {
        questions: [{
            id: 'id1',
            question: 'Какие языковые конструкции в javascript создают scope?',
            answers: ['В javascript только функции создают новый scope.', 'Любые конструкции', 'Деревянные конструкции'],
            correct: 0
        }, {
            id: 'id2',
            question: 'Сколько параметров можно передать функции?',
            answers: ['2', '3', 'Сколько угодно'],
            correct: 2
        }, {
            id: 'id3',
            question: 'Какой формат передачи данных наиболее распостранен?',
            answers: ['XML', 'JSON', 'TXT'],
            correct: 1
        }]
    };

    function writeToStorage() {

        objectToJson = JSON.stringify(infoObject);

        localStorage.setItem('questionsList', objectToJson);

        localStorageGetData = localStorage.getItem('questionsList');

        jsonToObject = JSON.parse(localStorageGetData);

        content = tmpl($template, jsonToObject);

        $('body').append(content);
    };

    function checkResult() {
        for (var i = 0; i < infoObject.questions.length; i++) {
            for (var j = 0; j < infoObject.questions[i].answers.length; j++) {
                if (document.querySelector('#' + infoObject.questions[i].id + i + j).checked) {
                    if (infoObject.questions[i].correct === j) {
                        rightAnswer[i] = true;
                    } else rightAnswer[i] = false;
                    break;
                } else {
                    rightAnswer[i] = false;
                }
            }
        }
        modalBlock();
        console.log(rightAnswer);
    };

    function modalBlock() {
        var wrongAnswer = true;
        modalElement.innerHTML = ('<h1>Список верных ответов</h1>');
        for (var i = 0; i < jsonToObject.questions.length; i++) {
            if (rightAnswer[i]) {
                modalElement.innerHTML += '<p>' + jsonToObject.questions[i].question + '<br><b>' + jsonToObject.questions[i].answers[jsonToObject.questions[i].correct] + '</b></p>'
                wrongAnswer = false;
            }
        }
        if (wrongAnswer) modalElement.innerHTML = ('<h1>Верных ответов нет!</h1>');
        modalElement.innerHTML += '<button class="btn btn-modal">Начать тест снова</button>';
        $modal.css('display', 'block');

        document.querySelector('.btn-modal').onclick = hideModal;
    }

    function hideModal() {
        location.href = location.href;
    }

    writeToStorage();

    document.querySelector('.btn').onclick = checkResult;
});
