// JavaScript Document
/*jslint browder:true */
"use strict";

document.getElementById("first").innerHTML = "Guessing Game";

document.getElementById("second").innerHTML = "Loops";




 var y = Math.floor(Math.random() * 15 + 1); 
 var guess = 1; 
      
    document.getElementById("submitguess").onclick = function(){ 
      
   // number guessed by user      
   var x = document.getElementById("guessField").value; 
  
   if(x == y) 
   {     
       document.getElementById("type").innerHTML = "That is Correct! "
               + guess + " GUESSES WERE USED "; 
   } 
   else if(x > y)
   {     
       guess++; 
       document.getElementById("type").innerHTML = "Number is too high"; 
   } 
   else
   { 
       guess++; 
       document.getElementById("type").innerHTML = "Number is too low"; 
   } 
   if (x > 15)
   {
   	    guess++;
   		document.getElementById("type").innerHTML = "Number is out of range"; 
   }






switch (face) {
	case 1:
	guess < 4;
	pathToImage = "images/firstplaceimage.jpg";
	break;
	case 2:
	10 > guess > 5;
	pathToImage = "images/secondplaceimage.jpg";
	break;




var pathToImage = "images/firstplaceimage.jpg";
var awardImage = document.createElement("IMG");
awardImage.setAttribute('src', pathToImage);
console.log(awardImage);

document.getElementById('face').appendChild(awardImage);


}






}
