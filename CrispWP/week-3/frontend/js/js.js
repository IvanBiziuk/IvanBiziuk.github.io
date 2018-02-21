// task 1

var days = 365;
var planet = 'Земля';
var popuplation = '7 млрд.';
var sun = 'Солнца';

document.write('Мы живем на планете '+ planet +' она делает один оборото вокруг ' + sun + 
' за ' + 365 + ' дней. Население нашей планеты примерно ' + popuplation + ' человек.<br>');

// task 2

var a = 5;
var b, c;

b = (a * 5);
b = (c = (b / 2));
document.write(b+'<br>');
document.write('Вычисление сначала происходит с правой стороны от знака присваивания потом собсно присваивание и т.д. выражение справа вычисляется. Значение выражения запоминается где - то в недрах JS переменная слева связывается со значением. Во всех случаях, кроме присвоения, когда переменная встречается в коде, её значение подставляется в это место как подвыражение, т.е.происходит чтения значения переменной.<br>');

b = a * 5;
b = c = b / 2;
document.write(b + '<br>');

// task 3

function countStr(str) {
  var i = 0,
      ch = 0,
      count = 0,
      length = str.length;
  for (i; i < length; i++) {
    ch = str.charCodeAt(i);
    if (ch <= 127) {
      count++;
    } else if (ch <= 2047) {
      count += 2;
    } else if (ch <= 65535) {
      count += 3;
    } else if (ch <= 2097151) {
      count += 4;
    } else if (ch <= 67108863) {
      count += 5;
    } else {
      count += 6;
    }
  }
  return count;
};
var resByte = countStr('Найдите количество Килобайт (KB) и Байт (B) в данном сообщении.');
document.write('Кол-во байт в сообщении - ' + resByte + ' byte(s)<br>');
var resKbyte = (countStr('Найдите количество Килобайт (KB) и Байт (B) в данном сообщении.'))/1024;
document.write('Кол-во Килобайт в сообщении - ' + resKbyte + ' Kbyte(s)<br>');

// arr task 4
var unitOfMeasure = ' млн. ';
var arrCountry = ['Ангола', 'Уругвай', 'Зимбабве', 'Йемен', 'Украина'];
var countryPop = [32, 20, 15, 34, 48];
for(var i = 0; i < arrCountry.length; i++) {
  document.write('<p>' + arrCountry[i] + ' - ' + countryPop[i] + unitOfMeasure + '</p>');
}

//arr task 5

var arrFruit = ['Апельсин', 'Банан', 'Груша'];
document.write('<p>На данный момент фруктов в массиве - ' + arrFruit.length + '</p>');
arrFruit.push('Яблоко', 'Ананас');
document.write('<p>Добавили в конец пару фруктов и теперь их - ' + arrFruit.length + '</p>');
arrFruit.shift();
arrFruit.pop();
document.write('<p>Удалили первый и последний элемент и теперь их снова - ' + arrFruit.length + '</p>');

//arr task 6

var arrFruit = ['Банан', 'Мандарин', 'Манго'];
arrFruit.splice(-2, 1, 'Ананас');
for(var i = 0; i < arrFruit.length; i++) {
  document.write('<p>' + arrFruit[i] + '</p>'); 
}

// if task 1

var students = ["Сергей", "Матвей", "Лейла", "Алина", "Иоган"];
if (students.lehgth >= 3) {
  document.write('<p>This is a large array it consist minimum 3 elements</p>');
} else {
  document.write('<p>This is a small array it consist less than 3 elements</p>');
}

// if task 2

var students = ["Дмитрий", "Алексей", "Петр", "Виктор"];
if (students.length == 4 && students[students.length-1] == "Виктор") {
  document.write('<p>This array suits me</p>');
} else {
  document.write('<p>This array don\'t suits me</p>');
}

// if task 3
var traficLight = 'red';
if (traficLight === 'red') {
  document.write('<p>Don\'t go</p>');
} else if (traficLight === 'yellow') {
    document.write('<p>Ready</p>');
} else if (traficLight === 'green') {
    document.write('<p>Go, Go, Go, mother fucker</p>');
}

// if task 4
a = 1;
b = 8;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
document.write('<p>'+result+'<p>');

a+b<4 ? result = 'Мало' : result = 'Много';
document.write('<p>'+result+'<p>');

// if task 5
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
var login;
var message = (login == 'Вася') ? 'Hello' :
              (login == 'Директор') ? 'Hello Director' :
              'No login sorry';

// modal task 1

var age = prompt('Hello man (or woman), how old are you');
if (age > 20) {
  alert('Good for you! You are alredy adult');
} else {
  alert('Ooo dear, you are so young, you will have everething soon');
}

// modal task 2
    
var login = prompt('Enter you fucking login, bastard');
if(login == 'Админ') {
  var password = prompt('Good morning sir, please enter your password');
  if (password == 'Черный властелин') {
    alert('Оооо, excuse me my lord please welcome, it\'s just little error in programm don\'t kill me sir, don\'t kill me pleaaaaase');
  } else if (login == null) {
      alert('Good bye looser, Ha ha');
  } else {
      alert('Get lost motherfucker, I call to police');
  }
} else if(login == null) {
    alert('Good bye looser, Ha ha');
} else {
  alert('Get lost motherfucker, I call to police');
}

// modal task 3
var jsName = prompt('What is real name of Java Script?');
jsName == 'ECMAScript' ? alert('Good boy! You are right!') : alert('Boolshit! Real name is ECMAScript!');