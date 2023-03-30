// Assignment code here
var lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(lowers);
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var nums = '1234567890'.split('');
var specs = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numChars = 0;
var validLength = false;
var containsLows = false;
var containsCaps = false;
var containsNums = false;
var containsSpecs = false;
var passChars = [];

function generatePassword () {
  do {
    numChars = prompt("How long would you like your password to be? (8-128)");
    if (!Number.isInteger(numChars) || numChars < 8 || numChars > 128) {
      alert("Password must be a number from 8 to 128.");
    } else validLength = true;
  } while (!validLength);
  containsLows = confirm("Would you like your password to include lowercase letters?");
  containsCaps = confirm("Would you like your password to include uppercase letters?");
  containsNums = confirm("Would you like your password to include numbers?");
  containsSpecs = confirm("Would you like your password to include lowercase letters?");
  passChars = addChars(containsLows, containsCaps, containsNums, containsSpecs);
  return genFromArray(passChars);
}

function addChars(lows, caps, nums, specs) {
  var chars = [];

}

function genFromArray(chars) {

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
