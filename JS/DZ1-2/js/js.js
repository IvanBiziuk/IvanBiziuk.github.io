(function() {
	var arr = [];
	
	function createArrayName()	{
		for (var i = 0; i < 5; i++ ) {
			arr[i] = prompt('Введите имя');
		}return arr;
		console.log(arr);
	}
	function checkLogin(){	
		var userName = prompt('Введите имя пользователя');
			for (var j = 0; j < 5; j++ ) {
				if(arr[j] == userName) {
					alert(userName+', вы успешно вошли!');
					return;
				} 
			} 
			alert('Ошибка, не верно введено имя пользователя!');
		}		
	createArrayName();
	checkLogin();
})();	