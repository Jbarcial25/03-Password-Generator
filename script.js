// Add event listener to generate button
// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoice;


numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
letterUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
letterLowerCaser = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//prom criteria Var
var chartacterNum;
var critUpperCase;
var critLowerCase;
var critCharSpecial;
var critNumSpecial;



function generatePassword(){
   chartacterNum = parseInt(prompt('Please enter the number of characters you wish to have on your password'));

  //  lenght/prompt section

  //if press 'cancel'
  if(!chartacterNum) {
   userPassword = alert('Oops, looks like you did not enter a value. Please try again')
  };
    //parameter for criteria length

  if  (chartacterNum < 7 || chartacterNum > 127){
  userPassword = alert('Password must contain at leat 8 characters and no more than 128 charters');
  
  } else if (chartacterNum >= 8 || chartacterNum <= 128){
    alert('Your password will contain ' + chartacterNum + ' characters')
  };


  // Password Criteria Section
  critUpperCase = (confirm('Do you wish to add Uppercase letter to your password?\nclick "OK" for yes and "Cancel" for no'));
  critLowerCase = (confirm('Do you wish to add Lowercase letter to your password?\nclick "OK" for yes and "Cancel" for no'));
  critCharSpecial = (confirm('Do you wish to add Special Character letter to your password?\nclick "OK" for yes and "Cancel" for no'));
  critNumSpecial = (confirm('Do you wish to add a Numbers to your password?\nclick "OK" for yes and "Cancel" for no'));


  //criteria options

  //all 4 criteria are false
  if(!critUpperCase && !critLowerCase && !critCharSpecial && !critNumSpecial){
    userChoice = alert("You MUST select at least 1 criteria for your password");
  }

  //all criteria are true
  else if (critUpperCase && critLowerCase && critCharSpecial && critNumSpecial) {
    userChoice = letterUpperCase.concat(letterLowerCaser, numbers, specialChar);

  }
  
  //3 criterias seclected
  else if (critUpperCase && critLowerCase && critCharSpecial) {
    userChoice = letterUpperCase.concat(letterLowerCaser, specialChar);

  }
  else if (critUpperCase && critLowerCase && critNumSpecial) {
    userChoice = letterUpperCase.concat(letterLowerCaser, numbers);

  }
  else if (critUpperCase && critCharSpecial && critNumSpecial){
    userChoice = letterUpperCase.concat(specialChar, numbers);

  }
  else if (critLowerCase && critCharSpecial && critNumSpecial) {
    userChoice = letterLowerCaser.concat(specialChar, numbers);
    console.log("4.3 criteria stop")
  }

  // 2 critrias selected
  else if (critUpperCase && critLowerCase){
    userChoice = letterUpperCase.concat(letterLowerCaser);
    console.log("2.1 criteria stop")
  }
  else if (critUpperCase && critCharSpecial) {
    userChoice = letterUpperCase.concat(specialChar);
    console.log("2.2 criteria stop")
  }
  else if (critUpperCase && critNumSpecial) {
    userChoice = letterUpperCase.concat(numbers);
    console.log("2.3 criteria stop")
  }
  else if (critLowerCase && critCharSpecial) {
    userChoice = letterLowerCaser.concat(specialChar);
    console.log("2.4 criteria stop")
  }
  else if (critLowerCase && critNumSpecial) {
    userChoice = letterLowerCaser.concat(numbers);
    console.log("2.5 criteria stop")
  }
  else if (critCharSpecial && critNumSpecial) {
    userChoice = specialChar.concat(numbers);
    console.log("2.6 criteria stop")
  }

  // 1 critria selected
  else if (critUpperCase) {
    userChoice = letterUpperCase;
    console.log("1.1 criteria stop")
  }
  else if (critLowerCase) {
    userChoice = letterLowerCaser;
    console.log("1.2 criteria stop")
  }
  else if (critCharSpecial){
    userChoice = specialChar;
    console.log("1.3 criteria stop")
  }
  else if (critNumSpecial) {
    userChoice = numbers;
    console.log("1.4 criteria stop")
  };

  var userPassword = []; 

  // creates random number for password
  for (var i = 0; i < chartacterNum; i++) {
    var selectChoices = userChoice[Math.floor(Math.random()* userChoice.length)];
    userPassword.push(selectChoices);
  }
  return userPassword.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 