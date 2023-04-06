// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialChar = ['!', '#', '$', '%', '&', ')', '*', '+', ',', '/', ':', ';', '<', '=', '>', '?', '@', '~']
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let pwdElement = 0

//builtArray
function generatePassword() {
  builtArray = []
  builtPwd = []
  if (confirm("Do you want your password to contain Lowercase Letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet]
  }
  if (confirm("Do you want your password to contain Uppercase Letters?")) {
    builtArray = [...builtArray, ...upperAlphabet]
  }
  if (confirm("Do you want your password to contain Numbers?")) {
    builtArray = [...builtArray, ...numbers]
  }
  if (confirm("Do you want your password to contain Special Characters?")) {
    builtArray = [...builtArray, ...specialChar]
  }
  console.log(builtArray)
  if (builtArray.length == 0) {
    alert("Pick at least one type of character")
    return generatePassword();
  }

  let password = "";

  // Obtaining length of password to be generated
  let passwordLength = prompt("H9ow long do you want the password, pick a number between 8 and 128?")
  if (isNaN(passwordLength) == true || passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number between 8 and 128")
    return generatePassword();
  }

  for (let i = 0; i < passwordLength; i++) {
    pwdElement = Math.floor(Math.random() * builtArray.length);
    password += builtArray[pwdElement];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
