//var colors=[
//"rgb(255, 0, 0)",
//"rgb(255, 255, 0)",
//"rgb(0, 255, 0)",
//"rgb(0, 255, 255)",
//"rgb(0, 0, 255)",
//"rgb(255, 0, 255)",
//]
var numSquares=6;
var colors =generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
colorDisplay.textContent=pickedColor;
var easyBtn= document.querySelector(".easyBtn");
var hardBtn= document.querySelector(".hardBtn");
 var messageDisplay=document.querySelector("#message");
var score = document.querySelector("#score");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	for(i=0 ; i < squares.length ;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display = "none";					}
	       }
});
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	for(i=0 ; i < squares.length ;i++)
	{
			squares[i].style.background=colors[i];
			squares[i].style.display = "block";	
	}			
	
});
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change display
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	this.textContent="New Colors";
	score.textContent = "0"
	messageDisplay.textContent="";
	for (var i = 0 ; i <squares.length; i++)
{   
	//add initial colors to squares
	squares[i].style.background=colors[i];
}
h1.style.background = "steelblue";
});
for (var i = 0 ; i <squares.length; i++)
{   
	//add initial colors to squares
	squares[i].style.background=colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
//grab color of square and compare color to picked color
    var clickedColor=this.style.background;
    if(clickedColor===pickedColor){
		messageDisplay.textContent="Correct!"
		score.textContent = "100"
		resetButton.textContent = "Play Again ?"		
    	changeColor(clickedColor);
		h1.style.background=clickedColor;
		
    }
   else
   { 
	   messageDisplay.textContent="Try Again!";
	   score.textContent = "0"
   		this.style.background="#232323";
   }

    });
    }

function changeColor(color){
	//change each color to match given color
	for(var i=0; i < squares.length; i++ )
	{
		squares[i].style.background=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr=[];
	//add num random colors to an array
	for(var i=0 ; i < num ;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from o to 255 similarly pick green and blue
var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
 return "rgb(" + r + ", " + g + ", " + b + ")";
} 