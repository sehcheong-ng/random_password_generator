// Function to prompt user for password options
function getPasswordOptions() {
  
  //   var password_length = {  }    = only proceed when numeric between 10 and 64 is provided, if not stay in loop and print (try again)


  var options = {
    "password_length" : prompt("How many characters do you want in your password, choose between 10 and 64."),
    "sc" : confirm("Do you want special character in your password?"),
    "nc" : confirm("Do you want number in your password?"),
    "uc" : confirm("Do you want uppercase in your password?"),
    "lc" : confirm("Do you want lowercase in your password?"),
    }

  final_character_set = []

  for (const i in options) {
    if (i == "sc" && options[i])
      {final_character_set = final_character_set.concat(specialCharacters)}
    else if (i == "nc" && options[i])
      {final_character_set = final_character_set.concat(numericCharacters)}
    else if (i == "uc" && options[i])
      {final_character_set = final_character_set.concat(upeerCasedCharacters)}
    else if (i == "lc" && options[i])
      {final_character_set = final_character_set.concat(lowerCasedCharacters)}
  }

  return [final_character_set, parseInt(options["password_length"])]
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  return password_element
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
