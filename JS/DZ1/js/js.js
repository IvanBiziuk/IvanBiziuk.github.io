function pow(a,b){    
	result = a;       			    // промежуточному результату присваиваем значение переменной      
	lastResult=0;					// финальный результат вычислений
	if(b>0){
		for (i=1; i<b; i++){	   // цикл степени 
			result = result*a;     //вычисление степени
		}
		lastResult = result;       //запись финального результата
	}else if (b==0){			   //проверка нулевой степени
		result = a/a;
		lastResult=result;        
	}else if (b<0){                //проверка отрицательнй степени
		b = -b;                    //приведение к положительнму значение
		for (i=1; i<b; i++){       //цикл
			result = result*a;     //обычное возведение в степень
		}
		lastResult = 1/result;     // вычисление отрицательной степени
	}		
	return lastResult;
}
do{                                            //цикл ввода целого цисла 
var anyNum = prompt ('Введите целое число');
if (parseInt(anyNum) == anyNum){              //проверка ввода целого числа
	var anyDeg = prompt('Введите степень');   
	pow (anyNum, anyDeg);                     //вызов функции
}else {
	alert('Неверное число');
}
}while (parseInt(anyNum) != anyNum);
alert(lastResult);                           //вывод конечного результата