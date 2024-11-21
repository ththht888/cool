// 1.1

// 1;
const num = -7;
num < 0
  ? console.log("число отрицательное")
  : console.log("число положительное");

// 2;
let string = "Passionfruit";
console.log(string.length);

// 3;
console.log(string.slice(-1));

// 4;
let number = 8;
number % 2 === 0 ? console.log("число четное") : console.log("число нечетное");

// 5;
const word1 = "персик";
const word2 = "палка";
word1[0] === word2[0]
  ? console.log("первые буквы одинаковые")
  : console.log("первые буквы разные");

// 6;
function lastSimbol(letter) {
  if (letter[letter.length - 1] === "ь") {
    return letter[letter.length - 2];
  } else {
    return letter[letter.length - 1];
  }
}
const result = lastSimbol("гость");
console.log(result);

// 1.2

// 1
const num1 = 123456;
// const one = num1.toString()[0];
const one = +(String(num1)[0]);
console.log(one);

// // 2
const two = +(String(num1)[String(num1).length - 1]);
console.log(two);

// 3

console.log(one + two);

// 4
const num2 = 3983878739738;
console.log(String(num2).length);

// 5
const num3 = 666;
const num4 = 660;
+(String(num3)[0]) === +(String(num4)[0])
  ? console.log("совпадает")
  : console.log("не свопадает");

// 1.3

// 1
const str = 'пчела';
if (str.length > 1) {
  const str2 = str[str.length - 2];
  console.log(str2);
}

//  2
if (num3 % num4 === 0) {
  console.log('без остатка')
} else {
  console.log('с остатком')
}
