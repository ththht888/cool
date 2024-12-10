// 1
// Дан массив с некоторыми числами, например, вот такой:
// const arr = [123, 456, 789];
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]
// let arr2 = [];

// 1 вариант
// const arr3 = arr.map((item) => {
//   const strNum = String(item);
//   let result = "";
//   for (let x = strNum.length - 1; x >= 0; x--) result += strNum[x];
//   return +result
// });
// console.log(arr3)

// 2 вариант

// for (let i = 0; i < arr.length; i++) {
//   const strNum = String(arr[i]);
//   let result = "";
//   for (let x = strNum.length - 1; x >= 0; x--) {
//     result += strNum[x];
//   }
//   arr2.push(+result);
// }
// console.log(arr2);

// 3
// Дана некоторая строка с числом:

// const str = "1234567";
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// ("1 234 567");
// let result = "";
// let num = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   num = str[i] + num;
//   if (num.length % 3 === 0) {
//     num = " " + num;
//     result = `${num}${result}`;
//     num = "";
//   }
//   if (i == 0) {
//     result = `${num}${result}`;
//     num = "";
//   }
// }
// console.log(result);

// второй вариант
// console.log(Number(str).toLocaleString('ru-RU'))

// 4
// Сменить регистр на противоположный
// const str = "AbCdE";
// let text = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toLocaleLowerCase()) {
//     text += str[i].toLocaleLowerCase();
//   } else {
//     text += str[i].toLocaleUpperCase();
//   }
// }
// console.log(text);

// 5
// Дан некоторый массив с числами, например, вот такой:

// const arr = [1, 2, 3, 4, 5, 6];
// Слейте пары элементов вместе:

// [12, 34, 56]
// const arr2 = [];
// for (let i = 0; i < arr.length; i += 2) {
//   arr2.push(+(arr.slice(i, i + 2).join("")));
// }
// console.log(arr2)

// 6
// Дана некоторая строка со словами:

// const str = "aaa bbb ccc eee fff";
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'
// const strSplit = str.split(" ");
// let result = "";
// for (let i = 0; i < strSplit.length; i++) {
//   const value = strSplit[i];
//   const text = value[0].toLocaleUpperCase() + value.slice(1);

//   if (i === str.length - 1) {
//     result += text;
//   } else {
//     result += text + " ";
//   }
// }
// console.log(result);
