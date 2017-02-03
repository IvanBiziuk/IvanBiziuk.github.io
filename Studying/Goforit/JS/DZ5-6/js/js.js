// JavaScript Document
"use strict";

(function() {

var timerObj = {
	timerID:0,
	splitDiv:0,
	ms:0,
	ss:0,
	mn:0,
	hr:0
}
var domElements = {
	wrapper: document.createElement('div'),
	splitContainer: document.createElement('div'),
	splitPoint: document.createElement('div'),
	msec: document.createElement('div'),
	sec: document.createElement('div'),
	min: document.createElement('div'),
	hour: document.createElement('div'),
	start: document.createElement('button'),
	pause: document.createElement('button'),
	reset: document.createElement('button'),
	split: document.createElement('button')
}

function addClass(){
	domElements.wrapper.className = "wrapper";
	domElements.msec.classList.add("position", "bold", "h3");
	domElements.sec.classList.add("position", "bold", "h1");
	domElements.min.classList.add("position", "bold", "h1");
	domElements.hour.classList.add("position", "bold", "h1");
	domElements.start.classList.add("btn", "btn-primary", "btn-size", "btn-position");
	domElements.pause.classList.add("btn", "btn-primary", "btn-size", "hide", "btn-position");
	domElements.reset.classList.add("btn", "btn-primary", "btn-size", "btn-position");
	domElements.split.classList.add("btn", "btn-primary", "btn-size", "btn-position");
}
function addInner(){
	domElements.msec.innerHTML = '00';
	domElements.sec.innerHTML = '00.';
	domElements.min.innerHTML = '00:';
	domElements.hour.innerHTML = '00:';
	domElements.start.innerHTML = "start";
	domElements.pause.innerHTML = "pause";
	domElements.reset.innerHTML = "reset";
	domElements.split.innerHTML = "split";
}
function appendElements(){
	document.body.appendChild(domElements.wrapper);
	domElements.wrapper.appendChild(domElements.hour);
	domElements.wrapper.appendChild(domElements.min);
	domElements.wrapper.appendChild(domElements.sec);
	domElements.wrapper.appendChild(domElements.msec);
	document.body.appendChild(domElements.start);
	document.body.appendChild(domElements.pause);
	document.body.appendChild(domElements.reset);
	document.body.appendChild(domElements.split);
	document.body.appendChild(domElements.splitContainer);
}
function addEvent(){
	domElements.start.onclick = function() { timerObj.timerID = setInterval(msecCount, 10);            
								domElements.pause.classList.toggle("hide"); 
								domElements.start.classList.toggle("hide"); };

	domElements.pause.onclick = function() { clearInterval(timerObj.timerID); 
								domElements.start.classList.toggle("hide"); 
								domElements.pause.classList.toggle("hide"); };

	domElements.reset.onclick = function() { clearInterval(timerObj.timerID);
							   resetTimer(); };

	domElements.split.onclick = splitAction;
}
function count() {
    if (timerObj.ss < 60) {
        timerObj.ss++;
      
        if (timerObj.ss < 10) { 
            domElements.sec.innerHTML = '0' + timerObj.ss + '.';
        } else {
            domElements.sec.innerHTML = timerObj.ss + '.';
        }
     } else {
        timerObj.ss = 0;
        domElements.sec.innerHTML = '00.';
        timerObj.mn++;
        
        if (timerObj.mn < 10) {
            domElements.min.innerHTML = '0' + timerObj.mn + ':';
        } else {
            domElements.min.innerHTML = timerObj.mn + ':';
        }
        
        if (timerObj.mn === 60) {
            timerObj.mn = 0;
            domElements.min.innerHTML = '00:';
            timerObj.hr++;
            
            if (timerObj.hr < 10) {
                domElements.hour.innerHTML = '0' + timerObj.hr + ':';
            } else {
                domElements.hour.innerHTML = timerObj.hr + ':';
            }
        }
        
        count();
     }
}

function msecCount() {
    if (timerObj.ms < 100) {
      
        if (timerObj.ms < 10) {
            domElements.msec.innerHTML = '0' + timerObj.ms;
        } else {
            domElements.msec.innerHTML = timerObj.ms;
        }
        
        timerObj.ms += 1;
    } else {
        count();
        
        timerObj.ms = 0;
        domElements.msec.innerHTML = timerObj.ms;
        
        msecCount();
    }
}

function resetTimer() {
    clearSplit();
    
    domElements.msec.innerHTML = '00'; 
    domElements.sec.innerHTML = '00.'; 
    domElements.min.innerHTML = '00:'; 
    domElements.hour.innerHTML = '00:';
    
    timerObj.ms = 0;
    timerObj.ss = 0;
    timerObj.mn = 0;
    timerObj.hr = 0;
    
    if (domElements.start.classList.contains("hide")) {
        domElements.pause.classList.toggle("hide"); 
        domElements.start.classList.toggle("hide");
    }                            
}

function splitAction() {
    
    domElements.splitPoint = domElements.hour.innerHTML + domElements.min.innerHTML + domElements.sec.innerHTML + 
                 domElements.msec.innerHTML;
                 
    timerObj.splitDiv = document.createElement('div');
    timerObj.splitDiv.innerHTML = "split: " + domElements.splitPoint;
    timerObj.splitDiv.classList.add("h5");
    
    domElements.splitContainer.appendChild(timerObj.splitDiv);
}

function clearSplit() {
    domElements.splitContainer.innerHTML = "";
}
addClass();
addInner();
appendElements();
addEvent();
})();