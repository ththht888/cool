// 1
// Заполните массив случайными числами из промежутка от 1 до 100.

// let arr = []
// for (let i = 0; i <= 5; i++) {
//     arr[i] = Math.floor(Math.random()* 100)
// };
// console.log(arr)

// 2
// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.

// const num = 12345;
// const str = String(num);
// let resultStr = '';

// for (let i = str.length - 1; i >= 0; i--) resultStr = resultStr + str[i]
// console.log(resultStr);

// 3       
// Дан некоторый массив, например, вот такой:
// const arr = [1, 2, 3, 4, 5, 6];
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]
// let resArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (resArr.length === 0) {
//     resArr.push(arr[i]);
//   } else if (resArr.length === 1) {
//     resArr.push(arr[i]);
//   } else if (resArr.length === 2) {
//     resArr = [];
//     resArr.push(arr[i]);
//   } else if (resArr.length === 3) {
//     resArr.push(arr[i]);
//   } else if (resArr.length === 4) {
//     resArr = [];
//     resArr.push(arr[i]);
//   }
// }
// console.log(resArr);

// 4
// Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]
let arr = []

// for (let i = 0; i < arr2.length; i++) {
//     arr.push(arr2[i] + arr1)
// }
arr1.forEach(item => arr.push(item));
arr2.forEach(item => arr.push(item));
console.log(arr)