// JavaScript Document
/*jslint browder:true */
"use strict";

document.getElementById("first").innerHTML = "Guessing Game";

document.getElementById("second").innerHTML = "Loops";




 var y = Math.floor(Math.random() * 15 + 1); 
 var guess = 1; 
      
    document.getElementById("submitguess").onclick = function() {
      
   // number guessed by user      
   var x = document.getElementById("guessField").value; 
  
   if(x == y) 

   {     
       document.getElementById("type").innerHTML = "That is Correct! "
               + guess + " GUESSES WERE USED "; 



switch(guess) {
case 1:
case 2:
case 3:
 pathToImage = "images/blueribbon2.png";
break;
case 4:
case 5:
case 6:
 pathToImage = "images/redribbon2.png";
break;
default:
 pathToImage = "images/yellowribbon2.png";
}//end switch


var pathToImage;
var awardImage = document.createElement("IMG");
awardImage.setAttribute('src', pathToImage);

document.getElementById('face').appendChild(awardImage);


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
}

