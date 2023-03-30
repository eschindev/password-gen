// Assignment code here
var lowers = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var nums = '1234567890'.split('');
var specs = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var passLength = 0;
var validLength = false;
var passChars = [];

function generatePassword () {
  validLength = false;
  do {
    passLength = prompt("How long would you like your password to be? (8-128)");
    if (!Number.isInteger(numChars) || numChars < 8 || numChars > 128) {
      alert("Password must be a number from 8 to 128.");
    } else validLength = true;
  } while (!validLength);
  if (confirm("Would you like your password to include lowercase letters?")) {
    passChars.concat(lowers);
  }
  if (confirm("Would you like your password to include uppercase letters?")) {
    passChars.concat(uppers);
  }
  if (confirm("Would you like your password to include numbers?")) {
    passChars.concat(nums);
  }
  if (confirm("Would you like your password to include lowercase letters?")) {
    passChars.concat(specs);
  }
  return genFromArray(passChars);
}

function genFromArray(chars) {
  var pass = "";
  for (i = 0; i < passLength; i++) {
    pass = 
  }
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
