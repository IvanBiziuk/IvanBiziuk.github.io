'use strict';
$(function (){                                
	function start() {

		var popup = $('.popup');
		var popupOne = $('.popup-one');
		var popupTwo = $('.popup-two');
		var popupThree = $('.popup-three');

		var label1 = $('.first-label');
		var label2 = $('.second-label');
		var label3 = $('.third-label');

		$('button').on('click', function () {
		  popup.css('display', 'block');
		});

		label1.hover(function () {
		  popupOne.css('display', 'block');},
		function () {
		  popupOne.css('display', 'none');}
		);

		label2.hover(function () {
		  popupTwo.css('display', 'block');},
		function () {
		  popupTwo.css('display', 'none');}
		);

		label3.hover(function () {
		  popupThree.css('display', 'block');},
		function () {
		  popupThree.css('display', 'none');}
		);
	};
	start();
});