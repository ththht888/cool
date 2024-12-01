// 1
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// const arr = [-1, -2, -3, 0, 1, 2, 3];
// let num = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] < 0) num++;
// }
// console.log(num);

// 2
// Дан массив с числами. Оставьте в нем только положительные числа.
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) arr2.push(arr[i]);
// }
// console.log(arr2);

// 3
// Дана строка. Удалите предпоследний символ из этой строки.
// const str = 'строка'
// const str2 = str.slice(0, -2) + str.slice(-1);
// console.log(str2)

// 4
// Дан некоторый массив, например, вот такой:
// const arr = [1, 2, 3, 4, 5, 6];
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
// let sumOne = 0
// for (let i = 0; i< arr.length / 2; i++) sumOne = sumOne + arr[i];

// let sumTwo = 0
// for (let i = arr.length - 1; i >= arr.length / 2; i--) sumTwo = sumTwo + arr[i];

// console.log(sumTwo + sumOne)
