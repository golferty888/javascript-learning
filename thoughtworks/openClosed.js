let userCount = 0;

console.log("Welcome to the game!");
let input = prompt("You are the predictor, what is your input?");

const predictorHands = input.slice(0,2);
const predictorCount = input.slice(2,3);

console.log("predictorHands:", predictorHands);
console.log("predictorCount:", predictorCount);

getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

let arrHand = ["C", "O"]

for (i=0; i<2; i++) {
   if(input.slice(i,i+1) == "O") {
      userCount++;
   }
}

console.log("userCount", userCount);


translateToOpenOrClose = (number) => {
  if (number == 1) {
      return "O";
  } else if (number == 0){
      return "C";
  } else {
      return "error"
  }
}

const botCount = getRandom(0,2);

botHands = (number) => {
  if (number == 0) {
      return "CC";
  } else if (number == 1){
      if (getRandom(0,1) == 0) {
         return "OC";
      } else {
          return "CO";
      }
  } else if (number == 2) {
      return "OO"
  } else {
      return "error"
  }
}

console.log("total count:", botCount + userCount);

if(predictorCount == botCount + userCount) {
    console.log(`AI: ${botHands(botCount)}\nyou WIN!`);
} else {
    console.log(`AI: ${botHands(botCount)}\nyou LOSE!`);
}
