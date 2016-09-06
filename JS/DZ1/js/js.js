(function() {
	function pow(a,b){    
		result = a;       			          
		lastResult=0;					
		if(b>0){
			for (i=1; i<b; i++){	   
				result = result*a;     
			}
			lastResult = result;       
		}else if (b==0){			   
			result = a/a;
			lastResult=result;        
		}else if (b<0){                
			b = -b;                    
			for (i=1; i<b; i++){       
				result = result*a;     
			}
			lastResult = 1/result;     
		}		
		return lastResult;
	}
	do{                                            
	var anyNum = prompt ('Введите целое число');
	if (parseInt(anyNum) == anyNum){              
		var anyDeg = prompt('Введите степень');   
		pow (anyNum, anyDeg);                     
	}else {
		alert('Неверное число');
	}
	}while (parseInt(anyNum) != anyNum);
	alert(lastResult);
})();	