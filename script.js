// Prompt and confirms for password criteria
var passwordLengthPW = prompt("From 8-128, enter how many characters long you would like your password to be?");
var uppercasePW = confirm("Do you want uppercase letters in your password?");
var lowercasePW = confirm("Do  you want lowercase letters in your password?");
var numbersPW = confirm("Do you want numbers in your password?");
var symbolsPW = confirm("Do  you want symbols in your password?");

// Arrays for password criteria
var upperrcase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "{", "}", "~"];

var preferences;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});

// Function to generate password
function generatePassword(passwordLengthPW, uppercasePW, lowercasePW, numbersPW, symbolsPW) {
}