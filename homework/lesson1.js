1;
const num = -7;
if (num < 0) {
  console.log("число отрицательное");
} else {
  console.log("число положительное");
}


2;
let string = "Passionfruit";
console.log(string.length);


3;
console.log(string.slice(-1));


4;
let number = 8;
if (number % 2 === 0) {
  console.log("число четное");
} else {
  console.log("число нечетное");
}


5; 
const word1 = 'персик';
const word2 = 'палка';
if (word1[0] === word2[0]) {
  console.log("первые буквы одинаковые");
} else {
  console.log("первые буквы разные");
}


6;
function lastSimbol(letter) {
  if (letter[letter.length - 1] === "ь") {
    return letter[letter.length - 2];
  } else {
    return letter[letter.length - 1];
  }
}
const result = lastSimbol("гость");
console.log(result);
