// 1
// // Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// function sumSquares(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i] * array[i];
//   }
//   return sum;
// }
// const num = [1, 2, 3, 4, 5, 6];
// console.log(sumSquares(num));

// 2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// function sumSquareRoot(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += Math.sqrt(array[i]);
//   }
//   return sum;
// }
// const num = [1, 121, 25, 100, 144, 16];
// console.log(sumSquareRoot(num));

// 3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.

// function sumPositiveNum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }
// const num = [-1, -2, 1, 2, -3, 3];
// console.log(sumPositiveNum(num));

// 4
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// function sumNull(array) {
//       let sum = 0;
//       for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0 && array[i] < 10) {
//           sum += array[i];
//         }
//       }
//       return sum;
//     }
//     const num = [1, 2, 3, 4, 5, 15, 17, 9];
//     console.log(sumPositiveNum(num));