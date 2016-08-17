function findName()	{
	var arr = [];
	for (var i = 0; i < 5; i++ ) {
		arr[i] = prompt('Введите имя');
	}
	var userName = prompt('Введите имя пользователя');
		for (var j = 0; j < 5; j++ ) {
			if(arr[j] == userName) {
				alert(userName+', вы успешно вошли!');
				return;
			} 
		} 
 		alert('Ошибка, не верно введено имя пользователя!');
	}		
findName();
	