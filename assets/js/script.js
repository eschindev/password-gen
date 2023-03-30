// Define the arrays of character types and the necessary variables
var lowers = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var uppers = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var nums = '1234567890'.split('');
var specs = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var passLength = 0;
var validLength = false;
var passChars = [];

// generate password by asking for desired length (and validating), confirming each character type, adding relevant character type arrays to the password generation array, and then calling the genFromArray() function
function generatePassword() {
  passLength = 0;
  validLength = false;
  passChars = [];
  do {
    passLength = parseInt(prompt("How long would you like your password to be? (8-128)"));
    if (!Number.isInteger(passLength) || passLength < 8 || passLength > 128) {
      alert("Password must be a number from 8 to 128.");
    } else validLength = true;
  } while (!validLength);
  do {
    if (confirm("Would you like your password to include lowercase letters?")) {
      passChars = passChars.concat(lowers);
    }
    if (confirm("Would you like your password to include uppercase letters?")) {
      passChars = passChars.concat(uppers);
    }
    if (confirm("Would you like your password to include numbers?")) {
      passChars = passChars.concat(nums);
    }
    if (confirm("Would you like your password to include lowercase letters?")) {
      passChars = passChars.concat(specs);
    }
    if (passChars.length === 0) {
      alert("You must select at least one character type to include in your password.")
    }
  } while (passChars.length === 0);
  return genFromArray(passChars);
}

function genFromArray(chars) {
  var pass = "";
  for (i = 0; i < passLength; i++) {
    pass = pass + chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
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
