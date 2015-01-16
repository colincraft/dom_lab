// // Your code here
//onload function load.
function start(){
	replaceText();
	changeLiBgColor();
	//enables the trigger event for reset upon loading the document.
	document.getElementById("reset").addEventListener("click", resetEverything);
	
}
//change title
function replaceText(){
	var title = document.getElementById("greeting");
	title.innerHTML = "Hello, Planet Earth!";
	}

//change list item background colors
var listItems = document.getElementsByTagName("li");

function changeLiBgColor(){
	for (var i = 0; i < listItems.length; i++) {
		listItems[i].style.backgroundColor = "yellow";
		listItems[i].addEventListener("click", setAttrib);
		}
	}
//sets list items that are clicked to the class of selected. sets the individual list items to their "innerHTML" picture
function setAttrib(){
	event.target.setAttribute("class", "selected");
	document.querySelector("img").setAttribute("src", "./images/" + event.target.innerHTML +".jpeg");
}
//sets variable in function to select list items. When function is called (upon clicking the reset button) reverts the class name to "" and changes picture to the panic.
function resetEverything(){
	var list_Items = document.querySelectorAll("li");
	for (var i = 0; i < list_Items.length; i++) {
		list_Items[i].className = "";
	}
	document.querySelector("img").setAttribute("src", "./images/panic.jpeg");
}
window.onload = start;