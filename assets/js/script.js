// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt user to select the password length and use while loop to make input is numeric and between 10 and 64
  var password_length = prompt("How many characters do you want in your password, choose between 10 and 64.");
  
  while (password_length < 10 || password_length > 64 || isNaN(parseInt(password_length))) {
    var password_length = prompt("You need to give number between 10-64!");
  }

  // Ask user to confirm the character sets to use
  var options = {
    "sc" : confirm("Do you want special character in your password?"),
    "nc" : confirm("Do you want number in your password?"),
    "uc" : confirm("Do you want uppercase in your password?"),
    "lc" : confirm("Do you want lowercase in your password?"),
    }


  // Use user's confirm to concat the selected set to one final set
  final_character_set = []

  for (const i in options) {
    if (i == "sc" && options[i])
      {final_character_set = final_character_set.concat(specialCharacters)}
    else if (i == "nc" && options[i])
      {final_character_set = final_character_set.concat(numericCharacters)}
    else if (i == "uc" && options[i])
      {final_character_set = final_character_set.concat(upperCasedCharacters)}
    else if (i == "lc" && options[i])
      {final_character_set = final_character_set.concat(lowerCasedCharacters)}
  }

  // Return the result in a list with set and password length
  return [final_character_set, parseInt(password_length)]
}

// Function to generate password with user input
function generatePassword() {
  set_and_pwd_len = getPasswordOptions()

  // create an empty string variable to save the generated password
  var password_element = ''

  // using the chosen length for the for loops, each loop randomly pick a character from the final character set.
  // Each character will then attached to the password_element variable and form the final password.
  for (var i=0; i<set_and_pwd_len[1]; i++){
    element = set_and_pwd_len[0][Math.floor(Math.random()*set_and_pwd_len[0].length)];
    password_element += element
  };

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
