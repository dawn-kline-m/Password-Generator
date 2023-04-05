// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialChar = ['!', '#', '$', '%', '&', ')', '*', '+', ',', '/', ':', ';', '<', '=', '>', '?', '@', '~']
let numExample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


let builtArray = []
builtArray
// boolean value what did the user select


function generatePassword() {


  //use this logic for all arrays
  if (confirm("Do you want your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet]

  }
  let password = "";

  // use this logic for all arrays

  let passwordLength = prompt("how long do you want the password?")



  //randomly select values for 
  for (let i = 0; i < passwordLength; i++) {
    //const element = array[i];
    password += "x";
    // for whatever is randomly selected we will build that into our array
  }

  return password;
  //lowerAlphabet[generatedLetterIndex]

  //let generatedLetterIndex = Math.floor(Math.random()*26);

  //build a string based off of randomly selected values from an array

  // Create another array of all the arrays they have selected 

  return "pdlkfaenve123"
}

// Ask how many values do you want?


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
