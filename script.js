var passwordLengthPW = prompt("From 8-128, enter how many characters long you would like your password to be?");
var uppercasePW = confirm("Do you want uppercase letters in your password?");
var lowercasePW = confirm("Do  you want lowercase letters in your password?");
var numbersPW = confirm("Do you want numbers in your password?");
var symbolsPW = confirm("Do  you want symbols in your password?");

var symbols = ["", ""]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
