$(document).ready(function() { // Waiting for page onload

//first task


  $('#addition').click(function () {
    var first = $('input[name=first]').val() * 1;
    var second = $('input[name=second]').val() * 1;
    var result = first + second;
    $('input[name=result]').val(result);
  });
  
  $('#subtraction').click(function () {
    var first = $('input[name=first]').val() * 1;
    var second = $('input[name=second]').val() * 1;
    var result = first - second;
    $('input[name=result]').val(result);
  });

  $('#multiply').click(function () {
    var first = $('input[name=first]').val() * 1;
    var second = $('input[name=second]').val() * 1;
    var result = first * second;
    $('input[name=result]').val(result);
  });

  $('#division').click(function () {
    var first = $('input[name=first]').val() * 1;
    var second = $('input[name=second]').val() * 1;
    var result = first / second;
    $('input[name=result]').val(result);
  });
  

//second task

  $('#upper-btn').click(function() {
    var valueBtn = $('#upper-btn').val().toUpperCase();
    $('#upper-btn').val(valueBtn);
  })


//third task

$('input[name=send-info]').click(function() {
  var action = $('input[name=radioname]:checked').val();
  var firstNum = $('#first-num').val() * 1;
  console.log(firstNum, typeof firstNum);
  var secondNum = $('#second-num').val() * 1;
  console.log(secondNum, typeof secondNum);
  var result;
  if (action == '+') {
    result = firstNum + secondNum;
    console.log(result);
  } else if (action == '-') {
    result = firstNum - secondNum;
  } else if (action == '*') {
    result = firstNum * secondNum;
  } else if (action == '/') {
    result = firstNum / secondNum;
  }
  $('input[name=res]').val(result);
});

});