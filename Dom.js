var changeColor=document.getElementById("color")
changeColor.style.backgroundColor="silver";

var fontColor=document.getElementById("title")
fontColor.style.color="green";


document.getElementById("fruits").style.textTransform="uppercase";
document.getElementById("fruit").style.textTransform="uppercase"

var fruits=document.createElement("li")
var fruitlist=document.createTextNode("Banana")
fruits.appendChild(fruitlist);
var newelement=document.getElementById("fruitList")
newelement.appendChild(fruits)


var vegetables=document.createElement("li")
var veglist=document.createTextNode("Spinach")
vegetables.appendChild(veglist)
var newelement=document.getElementById("vegList")
newelement.appendChild(vegetables)
