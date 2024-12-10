// 1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// const str = "asd2udj4u8";
// let position = 0;

// for (let i = 0; i < str.length; i++) {
//   if (+str[i]) {
//     console.log(i);
//     break;
//   }
// }

// console.log(position);

// 2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const obj = { a: 1, b: 2, c: 3 };

// const keys = Object.keys(obj);
// const values = Object.values(obj);

// console.log(keys);
// console.log(values);

// 3
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// const num = 1234567890
// const numStr = String(num)

// let count = 0

// for (let i = 0; i < numStr.length; i++) {
//     if (+numStr[i] % 2 === 0) count++
// }
// console.log(count)

// 4
// Дана некоторая строка:
// const str = "abcde";
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);

// 5
// Дана некоторая строка со словами:
const str = "aaa bbb ccc";
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
const strSplit = str.split(" ");
let result = "";

for (let i = 0; i < str.length; i++) {
  const value = strSplit[i];
  const text = value[0].toUpperCase() + value.slice(1);

  if (i === strSplit.length - 1) {
    result += text;
  } else {
    result += text + " ";
  }
}
strSplit.forEach((item, index) => {
  const text = item[0].toUpperCase() + item.slice(1);
  result = result + text + (index === strSplit.length - 1 ? "" : " ");
});
console.log(result)