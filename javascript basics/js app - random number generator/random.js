// var userNumberOne = prompt("Please enter a number to use as the theoretical maximum number in our random number generator.")
// var randomNumber = Math.floor(Math.random() * userNumberOne) + 1;
// alert("Your random number is " + randomNumber);

function randomNumberGenerator(low, high) {
  if(isNaN(low) || isNaN(high) ) {
    throw new Error("Input must be a number");
  } else {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }  
}

var inputLower = prompt("Please enter a number to use as the theoretical minimum number in our random number generator.");
var userNumberOne = parseInt(inputLower);
var inputHigher = prompt("Please enter a number to use as the theoretical maximum number in our random number generator.");
var userNumberTwo = parseInt(inputHigher);

document.write("Your random number is " + randomNumberGenerator(userNumberOne, userNumberTwo));
