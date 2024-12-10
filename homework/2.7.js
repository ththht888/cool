// 1
// Дана некоторая строка:

// const str = "a bc def ghij";
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'
// const result = [];
// const arrString = str.split(" ");
// for (let i = 0; i < arrString.length; i++) {
//   if (arrString[i].length <= 3) {
//     result.push(arrString[i].toLocaleUpperCase());
//   } else {
//     result.push(arrString[i]);
//   }
// }
// console.log(result.join(" "));

// 2
// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
// const str = "y";
// console.log(str, str.toLocaleUpperCase())
// if (str === str.toLocaleUpperCase()) {
//   console.log("big");
// } else {
//     console.log('small')
// }

// 3
// Дано некоторое число, например, такое:

// const num = 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28
// let resultTExt= ''
// const str = String(num)
// for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0) {
//         resultTExt += str[i]
//     }     
// }
// console.log(+resultTExt)