(function(){
	var formTest = {
		
		createBlock: function () {

			var divCont = document.createElement('div');
			divCont.className = "container";
			divCont.setAttribute('id', 'container');
			document.body.appendChild(divCont);
		
		},
		createTitle: function () {
			var divRow = document.createElement('div');
			divRow.className = "row";
			divRow.setAttribute('id', 'rowBlock');
			var contRow = document.getElementById('container')
			contRow.appendChild(divRow);
			
			for (k = 1; k <= 3; k++){
				var divCol = document.createElement('div');
				divCol.className = "col-sm-4";
				divCol.setAttribute('id', 'colBlock');
				var colRow = document.getElementById('rowBlock')
				colRow.appendChild(divCol);
			}
			var element = document.querySelectorAll('#colBlock');    //возвращает все элементы a (коллекцию элементов)
			element2 = element[1];
			console.log(element2);
			element2.setAttribute ('id', 'colBlockSecond');
			
			var createHeading = document.createElement('h3');
			createHeading.className = 'title';
			createHeading.setAttribute('id', 'title');
			document.getElementById('colBlockSecond').appendChild(createHeading);
			createHeading.innerHTML = ('Тест по программированию');
		},
		createForma: function () {
			var createForm = document.createElement('form');
			createForm.setAttribute('action', '#');
			createForm.setAttribute('metod', 'post');
			createForm.setAttribute('id', 'form1');
			document.getElementById('colBlockSecond').appendChild(createForm);
			
			var createOl = document.createElement('ol');
			createOl.setAttribute('id', 'list');
			document.getElementById('form1').appendChild(createOl);
			
			for (i = 1; i <= 3; i++){
				
				var createLi = document.createElement('li');
				createLi.innerHTML = ('Вопрос №' + i); //даем текст
				createLi.setAttribute('id', 'listLi');
				createLi.className = ('listLi');
				document.getElementById('list').appendChild(createLi);
				
				for (j = 1; j <= 3; j++){
				var createCheckBox = document.createElement('div');
				createCheckBox.className = ('checkbox');
				createCheckBox.setAttribute('id', 'checkbox');
				createLi.appendChild(createCheckBox);
				
				var createLabel = document.createElement('label');
				createLabel.setAttribute('for', 'q' + i + '_a' + j);
				createCheckBox.appendChild(createLabel);
				
				var createInput = document.createElement('input');
				createInput.setAttribute('id', 'q' + i + '_a' + j);
				createInput.setAttribute('type', 'checkbox');
				createLabel.appendChild(createInput);
				
				var textElemCheck = document.createTextNode('Вариант ответа №' + j);
				createLabel.appendChild(textElemCheck);
				}
			}		
		},
		createButton: function () {
		
			var btnResult = document.createElement('button');
			btnResult.setAttribute('type', 'submit');
			btnResult.className = "btn btn-info";
			document.getElementById('colBlockSecond').appendChild(btnResult);

			var textElemBtn = document.createTextNode('Проверить мои результаты');
			btnResult.appendChild(textElemBtn);
	    }
	}
	formTest.createBlock();
	formTest.createTitle();
	formTest.createForma();
	formTest.createButton();
})();