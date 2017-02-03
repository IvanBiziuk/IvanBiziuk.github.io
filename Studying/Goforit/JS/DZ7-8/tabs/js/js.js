// JavaScript Document
$(function (){                                
	var $divCreator = {
		bodyParent:'body',
		createWrapper:'<div class="container wrapper"></div>',
		createRowTab:'<div class = "row row-tab"></div>',
		createRowText:'<div class = "row row-text"></div>',
		createColTab:'<div class = "col-sm-4 tab-block"></div>',
		createTextBlock:'<p class = "text-block"></div>',
		createTabItem:'<div class = "col-sm-12"></div>',
	}
	var $classList = {
		classWrapper:'.container',
		classRowTab:'.row-tab',
		classRowText:'.row-text',
		classColTab:'.col-sm-4'
	}
	function firstTextFunc(){
		$('#tab0').on('click', function(){
			$('#text0').css({
				display: 'block'
			});
			$('#text1').css({
				display: 'none'
			});
			  
			$('#text2').css({
				display: 'none'
			});
		});
	}
	function secondTextFunc(){
		$('#tab1').on('click', function(){
		
			$('#text0').css({
				display: 'none'
			});
			$('#text1').css({
				display: 'block'
			});
			  
			$('#text2').css({
				display: 'none'
			});
		});
	}	
	function thirdTextFunc() {
		$('#tab2').on('click', function(){
		  $('#text0').css({
				display: 'none'
			});
			$('#text1').css({
				display: 'none'
			});
			  
			$('#text2').css({
				display: 'block'
			});
		});
	}
	var $addHeading = ['Nunc tincidunt','Proin dolor','Aenean lacinia'];
	
	var $addText = ['Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
		'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.',
		'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum.'];
		
	
	function addDiv($parent, $element){
		$($parent).append($element);
	};
	
	function addTabItem($element, $parent, $addHeadArr){
		for(i = 0; i <= 2; i++){
			var $createTab = $($parent).appendTo($element); //appendTo  вызывается не с родительского элемента, а с того, который будет добавлен
			console.log($createTab);
			$createTab.text($addHeadArr[i]);
			$createTab.attr('id','tab' + i);
		}
		var $activeTab = $('#tab').addClass('blue'); 
	};
	
	function addTextItem($element, $parent, $addText){
		for(i = 0; i <= 2; i++){
			var $createText = $($parent).appendTo($element); //appendTo  вызывается не с родительского элемента, а с того, который будет добавлен
			console.log($createText);
			$createText.text($addText[i]);
			$createText.attr('id','text' + i);
		}
		$('#text0').css({
			display: 'block'
		});
	};
	function chooseTab() {
		var $choosenFirstTab = firstTextFunc();
		var $choosenSecondTab = secondTextFunc();
		var $choosenThirdTab = thirdTextFunc();
		
	    if($choosenFirstTab){
			
	    }else if($choosenSecondTab){
			
	    }else if($choosenThirdTab){			
	  };
	};
	
	addDiv($divCreator.bodyParent, $divCreator.createWrapper);
	addDiv($classList.classWrapper, $divCreator.createRowTab);
	addDiv($classList.classWrapper, $divCreator.createRowText);
	addTabItem($classList.classRowTab, $divCreator.createColTab, $addHeading);
	addTextItem($classList.classRowText, $divCreator.createTextBlock, $addText);
	chooseTab();
});
