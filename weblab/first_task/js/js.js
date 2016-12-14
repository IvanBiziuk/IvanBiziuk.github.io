
function animation() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var rightBlock = document.getElementById('mainRight');
    
	img1.className += ' from-left-to-right-go';
	
	setTimeout(function(){
		img2.className += ' from-left-to-right-go';
	}, 200);
	
	rightBlock.className += ' from-left-to-right-go';
};