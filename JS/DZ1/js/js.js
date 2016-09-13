(function() {
	var anyText = {
		inputNumber:'Введите целое число',
		inputDeg:'Введите степень',
		outputError:'Неверное число'
	}
	
	function pow(a,b){                   
		result = a;       			          
		lastResult = 0;					
		if(b > 0){
			for (i = 1; i < b; i++){	   
				result = result*a;     
			}
			lastResult = result;       
		}else if (b == 0){			   
			result = a/a;
			lastResult = result;        
		}else if (b < 0){                
			b = -b;                    
			for (i = 1; i < b; i++){       
				result = result*a;     
			}
			lastResult = 1/result;     
		}		
		return lastResult;
	}
	function powLoop(){
		do{                                            
			anyText.inputNumber = prompt(anyText.inputNumber);
		if (parseInt(anyText.inputNumber) == anyText.inputNumber){              
			anyText.inputDeg = prompt(anyText.inputDeg);   
			pow (anyText.inputNumber, anyText.inputDeg);                     
		}else {
			alert(outputError);
		}
		}while (parseInt(anyText.inputNumber) != anyText.inputNumber);
		alert(lastResult);
	}
	powLoop();
})();	