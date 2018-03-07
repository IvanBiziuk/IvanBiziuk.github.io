document.write('<h1>Dear inspectors some of the output data you can see in the console some of them in browser window</h1>');

//Recursion task 1

function recuFuncOne(n) {
  if(n >= 1) {
    recuFuncOne(n-1);
    console.log(n);
  }
}
recuFuncOne(10);

//Recursion task 2

function sumNum(num) {
  var sum = 0;
  for(var i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
  // var res = (num * (num + 1)) / 2;
  // return res; 
}
console.log(sumNum(100));

function sumNumRec(num) {
  if(num == 1 ) {
    return 1;
  }
  return num + sumNumRec(num-1); // 3 + вызов sumNumRec(3-1) 2 вызываем ф-цию с параметром 2
}                                // 2 + вызов sumNumRec(2-1) 1 условие true - возвращаем 1
console.log(sumNumRec(3));       // а

//Recursion task 3

function numOutput(num) {
  var n = 1;
  var setInt = setInterval(function() {
    console.log(n);
    if(n == num) {
      clearInterval(setInt);
    }
    n++;
  }, 100);
}
numOutput(4);

var m = 1;
var timer;
function recTimeOut() {
  console.log(m);
  m++;
  timer = setTimeout(recTimeOut, 100);
  if (m > 20) {
    clearTimeout(timer);
  }
}
recTimeOut();

// Objects task 1

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function salarySum(salaries) {
  var res = 0;
  for(var key in salaries) {
    res+=salaries[key];
  }
return res;
}
console.log(salarySum(salaries));

// Objects task 2

var salary = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250,
  "Грыня": 550
};

function isEmpty(salary) {
  return Object.keys(salary).length === 0;
}

function salaryMax(salary) {
  var res = 0;
  var result;
  var empty = 'there aren\'t any employees here';
  if(isEmpty == false) {
    return empty;
  } else {
      for (var key in salary) {
        if (salary[key] > res) {
          res = salary[key];
          result = key + ' - ' + res;
        }
      }
    return result;
  }
}
console.log(salaryMax(salary));

// Dates task 1

var interval = setInterval(function() {
  var getTag = document.getElementById('time');
  time = new Date();
  var hour = time.getHours();
  var minutes = time.getHours();
  var seconds = time.getSeconds();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
 var timeNow = hour + ' : ' + minutes + ' : ' + seconds;
 getTag.innerHTML = timeNow;
}, 1000);

// Dates task 2

var monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

  do {
   var amountOfDays = +prompt('Please enter the amount of days and I will show you the date to be');
   if (amountOfDays > 1000 || isNaN(amountOfDays)) {
     alert('Error');
   }
  }
  while (amountOfDays > 1000 || isNaN(amountOfDays));

function getFutureDate(amountOfDays, monthsName, days) {
  var date = new Date();
  date.setDate(date.getDate() + amountOfDays);
  document.write('<h3>In ' + amountOfDays + ' days there wull be such a date:</h3>');
  document.write('<h4>Day of week: ' + days[date.getDay()] + '</h4>');
  document.write('<h4>Num of day: ' + date.getDate() + '</h4>');
  document.write('<h4>Month: ' + monthsName[date.getMonth()] + '</h4>');
  document.write('<h4>Year: ' + date.getFullYear() + '</h4>');
}
getFutureDate(amountOfDays, monthsName, days);