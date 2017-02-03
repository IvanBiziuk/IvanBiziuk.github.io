$(function () {

    'use strict'

    function Human() {
        this.name = '';
        this.age = 0;
        this.sex = 'male';
        this.height = '';
        this.weight = '';
    }

    function Worker() {
        this.placeOfWork = '';
        this.salary = '';
        this.work = function () {
            console.log('I work');
        }
    }

    Worker.prototype = new Human;

    function Student() {
        this.placeOfStudy = '';
        this.scholarship = '';
        this.pleasure = function () {
            console.log('I watch TV');
        }
    }

    Student.prototype = new Human;

    var ivan = new Student;

    ivan.name = 'Alexander';
    ivan.age = 36;
    ivan.sex = 'male';
    ivan.height = '168cm';
    ivan.weight = '80kg';
    ivan.placeOfStudy = 'Harvard';
    ivan.scholarship = '1500USD';

    console.log(ivan);

    var john = new Worker;

    john.name = 'John';
    john.age = 52;
    john.sex = 'male';
    john.height = '182cm';
    john.weight = '90kg';
    john.placeOfWork = 'Microsoft';
    john.salary = '6500USD';

    console.log(john);
});