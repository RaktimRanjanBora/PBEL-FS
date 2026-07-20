// You have to take one input as number, if that n umber is multiple of 3 then print "Humpty", if the number is multiple of 5 the  print "dumpty", if number is multiple of both 3 and 5 then print "Humpty Dumpty
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
  let number = parseInt(input);

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Humpty Dumpty");
  } else if (number % 3 === 0) {
    console.log("Humpty");
  } else if (number % 5 === 0) {
    console.log("Dumpty");
  } else {
    console.log("Not a multiple of 3 or 5");
  }

  rl.close();
});