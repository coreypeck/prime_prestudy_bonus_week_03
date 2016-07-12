var add = function(number){
	number = number + 2;
	return number;
}
var multiply = function(number){
	number=number*3;
	return number;
}
var subtract = function(number){
	number=number-4;
	return number;
}
var choice = prompt("pick a number");
console.log(add(multiply(subtract(choice))))