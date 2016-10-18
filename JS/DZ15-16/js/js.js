'use strict'

var request = new XMLHttpRequest();

function getJson() {
    request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=hello%20there%20:)&locale=en_US&safesearch=moderate', true);
    request.onreadystatechange = function() {
    	if (request.status == 200 && request.readyState == 4) {
            console.log('true');
        } else if (request.status !==200 ) {
        	console.log('false');
        }
    }
    request.send();
}
console.log('request', request);
getJson();





/*
$(function() {
    request = $.ajax({
        url: 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=hello%20there%20:)&locale=en_US&safesearch=moderate',
        data: 'jsonp'
    });
   console.log('request.status', request); 
   /*
    if (request.status === 200 && request.readyState === 1) {
            console.log('true');
        } else console.log('false');

});
*/
