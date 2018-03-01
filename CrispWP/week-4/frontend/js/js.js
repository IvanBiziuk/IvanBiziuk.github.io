//Switch task 1
document.write('<h2>Switch task 1</h2>');
function checkBrowser(browser) {
  if (browser === 'IE') {
    document.write('О, да у вас IE!<br>');
  } else if (browser === 'Chrome'||browser === 'Firefox'||browser === 'Safari'||browser === 'Opera') {
      document.write('Да, и эти браузеры мы поддерживаем<br>');
  } else document.write('Мы надеемся, что и в вашем браузере все ок!<br>');
}
checkBrowser('Opera');


//Switch task 2
document.write('<h2>Switch task 2</h2>');
function useCase(a) {
  switch (a) {
    case 0:
      document.write('0<br>');
      break;
    case 1:
      document.write('1<br>');
      break;
    case 2:
    case 3:
      document.write('2,3<br>');
      break;
    default:
      document.write('There is nothing!');
  }
}
useCase(0);

//While For task 1
document.write('<h2>While For task 1</h2>');
function sqrtOfNumber(range) {
  var result = 0;
  for(var i = 1; i <= range; i++) {
    result = i*i;
    document.write(result+'<br>');
  }
}
sqrtOfNumber(7);

//While For task 2
document.write('<h2>While For task 2</h2>');
function useWhile(justNum) {
  var i = 0;
  while (i < 3) {
    document.write('номер ' + i + '!<br>');
    i++;
  }
}
useWhile(2);

//While For task 3
document.write('<h2>While For task 3</h2>');
function findStudents(students, startNumber, finishNumber) {
  var i = startNumber;
  while (i <= finishNumber) {
    document.write(students[i] + '<br>');
    i++;
  }
}
findStudents(['Абаканов Сергей', 'Алалина Алина', 'Гагарин Матвей', 'Хантухова Лейла', 'Викторов Сергей', 'Масалкин Андрей', 'Петравкин Алексей', 'Московин Павел', 'Данилов Станислав'], 2, 6);

//While For task 4
document.write('<h2>While For task 4</h2>');
var i;
do {
  i = prompt('Enter the number greater than 100');
  if(i == null) break;
}
while (i <= 100);

//Numbers task 1
document.write('<h2>Numbers task 1</h2>');
function numOrNot(arr) {
  for(i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == 'number') {
      document.write(arr[i] + ' - is a number<br>');
    } else document.write(arr[i] + ' - isn\'t a number<br>');
  }
}
numOrNot(['Молоко', 75, 11, 'Мед', -88]);

//Numbers task 2
document.write('<h2>Numbers task 2</h2>');
function changeArrayToNum(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i].replace(/\D+/g, "")); //выбрали все не числа и заменили на пустую строку

  }
  return arr;
}
console.log(changeArrayToNum(["100 попугаев", "201 рубль", "624 доллара", "109 кроликов", "33 весельчака", "62 кабана"]));

//Numbers task 3
document.write('<h2>Numbers task 3</h2>');
document.write('<h4>Output to console</h4>');
function sumOfTwoNumber() {
  var firstNum = +prompt('Enter a first number');
  var secondNum = +prompt('Enter a second number');
  var result = firstNum + secondNum;
  return result;
}
console.log(sumOfTwoNumber());

function sumOfTwoNumber() {
  var firstNum = parseInt(prompt('Enter a first number'));
  var secondNum = parseInt(prompt('Enter a second number'));
  var result = firstNum + secondNum;
  return result;
}
console.log(sumOfTwoNumber());

//Numbers task 4
document.write('<h2>Numbers task 4</h2>');
document.write('<h4>Output to console</h4>');
function arrNumConverter(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toFixed(2);
  }
  return arr;
}
console.log(arrNumConverter([10.5, 15, 112, 77.6]));

//Numbers task 5
document.write('<h2>Numbers task 5</h2>');
document.write('<h4>Output to console</h4>');
function arrRound(arr, round) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = round(arr[i]);
  }
  return arr;
}
console.log(arrRound([34.82, 12.90, 17.01, 78.51], Math.round));

//Numbers task 6
document.write('<h2>Numbers task 6</h2>');
document.write('<h4>Output to console</h4>');
var randomArray = new Array(10);

function randomArr(arr, firstValue, secondValue) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (firstValue - secondValue + 1)) + secondValue;
  }
  return arr;
}
console.log(randomArr(randomArray, 1, 10));

//String task 1
document.write('<h2>String task 1</h2>');
var enterWord = prompt('Please enter some word');
function numberOfSymbols(str) {
  document.write('number of symbols in this word are - ' + str.length);
}
numberOfSymbols(enterWord);

//String task 2
document.write('<h2>String task 2</h2>');
var enterWord = prompt('Please enter some word');

function numberOfSymbols(str, num) {
  if(str.length < num) {
    document.write('number of symbols in this word are less then - ' + num);
  } else if (str.length == num) {
      document.write('number of symbols in this word are equal to - ' + num);
  } else {
      document.write('number of symbols in this word are greater then - ' + num);
  }
}
numberOfSymbols(enterWord, 10);

//String task 3
document.write('<h2>String task 3</h2>');
var askQuestion = prompt('What color of the night sky?(answer only in lower case)');

function colorOfTheSky(str) {
  var rightAnswer = 'black';
  var newStr = str.toLowerCase();
  if(newStr == rightAnswer) {
    document.write('Yes you are right? sky is - ' + rightAnswer);
  } else {
      document.write('Negative! Maybe you should check the case');
  }
}

colorOfTheSky(askQuestion);

//String task 4
document.write('<h2>String task 4</h2>');
var mySite = 'http://crispwp.com/';

function checkSubString(str) {
  if (~str.indexOf('http://')) {
    document.write('Yes there is such string here<br>');
  } else {
      document.write('Negative! There\'s not such string<br>');
    }
}
checkSubString(mySite);

//String task 5
document.write('<h2>String task 5</h2>');
var myStr = "Хороший день.";
var day = myStr.slice(8, -1);
document.write(day+'<br>');

//String task 6
document.write('<h2>String task 6</h2>');
document.write('<h4>Output to console</h4>');
function useUnicode(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      var result = arr[i][j].charCodeAt(0);
      if(result >= 42 && result <= 100) {
        console.log('Во, энта глянька в элементе с ' + i + '-ым индексом чет не понашему накарябано');
      }
    }
  }
}
useUnicode(['Илья', 'Greg', 'Алина']);

//String task 7
document.write('<h2>String task 7</h2>');
document.write('<h4>Output to console</h4>');
function truncate(str, maxlength) {
  var res = str.slice(0, maxlength);
  res+='...';
return res;
}

console.log(truncate('Hello people of Earth', 4));

//String task 8
document.write('<h2>String task 8</h2>');
document.write('<h4>Output to console</h4>');
function splitStr(resStr) {
  var resStr = resStr.split('-');
  // console.log(res);
  for(var i = 0; i < resStr.length; i++) {
    var firstLetter = resStr[i].charAt(0).toUpperCase();
    // console.log(firstLetter);
    resStr[i] = firstLetter + resStr[i].slice(1);
  }
  return resStr.join('');
}

console.log(splitStr('Hello-people-of-Earth'));

//RegExp task 1
document.write('<h2>RegExp task 1</h2>');
function checkFirstSymbol(str) {
  var findSymbol = str.match(/^\d/);
  if(findSymbol !== null) {
    document.write('Everything done succesfully - first symbol is a number<br>');
  } else {
      document.write('Something went wrong - first symbol isn\'t a number<br>');
  }
}
checkFirstSymbol('6 пингвинов и 9 карасей.');

//RegExp task 2
document.write('<h2>RegExp task 2</h2>');
function findCreditCard(str) {
  var result = str.match(/([^4-9]{4})\-\d{4}\-\d{4}\-\d{4}/);
  console.log(result[0]);
  if (result !== null) {
    document.write('Your credit card was find seccesfully - ' + result[0]);
  } else {
    document.write('Something went wrong');
  }
}
findCreditCard('Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722');

//RegExp task 3
document.write('<h2>RegExp task 3</h2>');

function changeSlahes(str, defis) {
  var result = str.replace(/\//g, defis );
  document.write('<p>' + result + '</p>');
}
changeSlahes('8/927/31/10/765', '-');