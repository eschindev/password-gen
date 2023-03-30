// Define the arrays of character types and the necessary variables
var lowers = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var uppers = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var nums = '1234567890'.split('');
var specs = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var passLength = 0;
var validLength = false;
var validChars = false;
var passChars = [];

// generate password by asking for desired length (and validating), confirming each character type, adding relevant character type arrays to the password generation array, and then calling the genFromArray() function
function generatePassword() {
  passLength = 0;
  validLength = false;
  passChars = [];
  do {
    passLength = prompt("How long would you like your password to be? (8-128)");
    if (!Number.isInteger(numChars) || numChars < 8 || numChars > 128) {
      alert("Password must be a number from 8 to 128.");
    } else validLength = true;
  } while (!validLength);
  do {
    if (confirm("Would you like your password to include lowercase letters?")) {
      passChars.concat(lowers);
      validChars = true;
    }
    if (confirm("Would you like your password to include uppercase letters?")) {
      passChars.concat(uppers);
      validChars = true;
    }
    if (confirm("Would you like your password to include numbers?")) {
      passChars.concat(nums);
      validChars = true;
    }
    if (confirm("Would you like your password to include lowercase letters?")) {
      passChars.concat(specs);
      validChars = true;
    }
    if (!validChars) {
      alert("You must select at least one character type to include in your password.")
    }
  } while (!validChars);
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
