(function(){
	var createDiv = {
			divCont:('div'),
			letClassName:('container'),
			letClassNameTitleRow:('row'),
			letClassNameTitleCol:('col-sm-4'),
			letClassNameTitleHead:('title'),
			letClassNameListLi:('listLi'),
			letClassNameCheckBox:('checkbox'),
			letClassNameBtn:('btn btn-info'),
			letAttrNameBlock:('container'),
			letAttrNameTitleRow:('rowBlock'),
			letAttrNameTitleCol:('colBlock'),
			letAttrNameTitleColDiez:('#colBlock'),
			letAttrNameTitleColSec:('colBlockSecond'),
			letAttrNameTitleHead:('title'),
			letAttrNameFormAct:('#'),
			letAttrNameFormMetP:('post'),
			letAttrNameFormMetF:('form1'),
			letAttrNameFormOl:('list'),
			letAttrNameFormListLi:('listLi'),
			letAttrNameFormCheckBox:('checkbox'),
			letAttrNameFormType:('checkbox'),
			letAttrNameBtnType:('submit'),
			letInnetHtmlFormLi:('Вопрос №'),
			letCreateTextFormNode:('Вариант ответа №'),
			letCreateTextBtnNode:('Проверить мои результаты')		
		}
		var createVar = {
			divCont2:0,
			divRow:0,
			contRow:0,
			divCol:0,
			colRow:0,
			createHeading:0,
			varHead:0,
			createForm:0,
			varForm:0,
			createOl:0,
			varOl:0,
			createLi:0,
			varLi:0,
			createCheckBox:0,
			createLabel:0,
			createInput:0,
			textElemCheck:0,
			btnResult:0,
			varBtn:0,
			textElemBtn:0
			
		}
	function appendElement(mainValue, mainVar){                                        // функция с 2-я параметрами которая вставляет элементы в дом. 
		mainValue.appendChild(mainVar);                                                // первый параметр - родительский элемент, 2-й параметр - дочерний элемент 
	}
	var formTest = {
		
		
		createBlock: function () {

			createVar.divCont2 = document.createElement(createDiv.divCont);          // создаем элемент div данные берем из объекта
			createVar.divCont2.className = createDiv.letClassName;                   
			createVar.divCont2.setAttribute('id', createDiv.letAttrNameBlock);
			
			appendElement(document.body, createVar.divCont2);                       // вызываем функцию (с 2-я аргументами) которая вставляет элемент в дом
		},                                                                          // данные берутся из объекта
		createTitle: function () {
			createVar.divRow = document.createElement(createDiv.divCont);
			createVar.divRow.className = createDiv.letClassNameTitleRow;
			createVar.divRow.setAttribute('id', createDiv.letAttrNameTitleRow);
			createVar.contRow = document.getElementById(createDiv.letClassName);
			
			appendElement(createVar.contRow, createVar.divRow);
			
			for (k = 1; k <= 3; k++){
				createVar.divCol = document.createElement(createDiv.divCont);
				createVar.divCol.className = createDiv.letClassNameTitleCol;
				createVar.divCol.setAttribute('id', createDiv.letAttrNameTitleCol);
				createVar.colRow = document.getElementById(createDiv.letAttrNameTitleRow);
				
				appendElement(createVar.colRow, createVar.divCol);
			}
			var element = document.querySelectorAll(createDiv.letAttrNameTitleColDiez);    //возвращает все элементы a (коллекцию элементов)
			element2 = element[1];
			console.log(element2);
			element2.setAttribute ('id', createDiv.letAttrNameTitleColSec);
			
			createVar.createHeading = document.createElement('h3');
			createVar.createHeading.className = createDiv.letClassNameTitleHead;
			createVar.createHeading.setAttribute('id', createDiv.letAttrNameTitleHead);
			createVar.varHead = document.getElementById(createDiv.letAttrNameTitleColSec);
			
			appendElement(createVar.varHead, createVar.createHeading);
			
			createVar.createHeading.innerHTML = ('Тест по программированию');
		},
		createForma: function () {
			createVar.createForm = document.createElement('form');
			createVar.createForm.setAttribute('action', createDiv.letAttrNameFormAct);
			createVar.createForm.setAttribute('metod', createDiv.letAttrNameFormMetP);
			createVar.createForm.setAttribute('id', createDiv.letAttrNameFormMetF);
			createVar.varForm = document.getElementById(createDiv.letAttrNameTitleColSec);
			
			appendElement(createVar.varForm, createVar.createForm);
			
			createVar.createOl = document.createElement('ol');
			createVar.createOl.setAttribute('id', createDiv.letAttrNameFormOl);
			createVar.varOl = document.getElementById(createDiv.letAttrNameFormMetF);
			
			appendElement(createVar.varOl, createVar.createOl);
		
			
			for (i = 1; i <= 3; i++){
				createVar.createLi = document.createElement('li');
				createVar.createLi.innerHTML = (createDiv.letInnetHtmlFormLi + i); //даем текст
				createVar.createLi.setAttribute('id', createDiv.letAttrNameFormListLi);
				createVar.createLi.className = createDiv.letClassNameFormListLi;
				createVar.varLi = document.getElementById(createDiv.letAttrNameFormOl);
				
				appendElement(createVar.varLi, createVar.createLi);
				
				for (j = 1; j <= 3; j++){
					createVar.createCheckBox = document.createElement(createDiv.divCont);
					createVar.createCheckBox.className = (createDiv.letClassNameCheckBox);
					createVar.createCheckBox.setAttribute('id', createDiv.letAttrNameFormCheckBox);
					
					appendElement(createVar.createLi, createVar.createCheckBox);
					
					createVar.createLabel = document.createElement('label');
					createVar.createLabel.setAttribute('for', 'q' + i + '_a' + j);		
									
					appendElement(createVar.createCheckBox, createVar.createLabel);
			
					createVar.createInput = document.createElement('input');
					createVar.createInput.setAttribute('id', 'q' + i + '_a' + j);
					createVar.createInput.setAttribute('type', createDiv.letAttrNameFormType);
					
					appendElement(createVar.createLabel, createVar.createInput);
					
					createVar.textElemCheck = document.createTextNode(createDiv.letCreateTextFormNode + j);
	
					appendElement(createVar.createLabel, createVar.textElemCheck);
				}
			}		
		},
		createButton: function () {
		
			createVar.btnResult = document.createElement('button');
			createVar.btnResult.setAttribute('type', createDiv.letAttrNameBtnType);
			createVar.btnResult.className = createDiv.letClassNameBtn;
			createVar.varBtn = document.getElementById(createDiv.letAttrNameTitleColSec)
			
			appendElement(createVar.varBtn, createVar.btnResult);

			createVar.textElemBtn = document.createTextNode(createDiv.letCreateTextBtnNode);
			
			appendElement(createVar.btnResult, createVar.textElemBtn);
	    }
	}
	formTest.createBlock();
	formTest.createTitle();
	formTest.createForma();
	formTest.createButton();
})();