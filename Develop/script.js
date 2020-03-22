// Assignment Code
var generateBtn = document.querySelector("#generate");

// Establish Characters Used for Passwords Per Category
var charU = "ABCDEFGHIJKFLMNOPQRSTUVWXYZ";
var charL = "abcdefghijklmnopqrstuvwxyz";
var symb = "!@#$^&_-*";
var numb = "0123456789";

//Set Data to Memory
var charLength= document.getElementById("charLength")

var charUpper=document.getElementById("charU");
var numBox= document.getElementById("numb");
var symBox= document.getElementById("symb");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

(charLower.checked) ? characters += charL : "";
(charUpper.checked) ? characters += charU : "";
(symBox.checked) ? characters += symb : "";
(numBox.checked) ? characters += numb : "";

debugger;

})


// Write password to the #password input
function writePassword() {
  var password = "";

  //Create forLoop
  for (var i=0; i<=length; i++) {
    var password = password.charAt(Math.floor(Math.random() * Math.floor(password -1)));
    password.push(password);

  return password
}
}