// 1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
// const word1 = 'двор'
// const word2 = 'работа'
// const res = word1.at(-1) === word2.at(0);
// console.log(res)

// 2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.
// const num = 34054034030345603450;
// const str = String(num);

// let check = 0

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] === '0') {
//         check ++
//         console.log(check)
//         if (check === 3) console.log(str.indexOf('0', i))
//     }
// }


// 3
// Даны числа, разделенные запятыми:
// const num = '12,34,56'
// Найдите сумму этих чисел.
// let sum = 0;
// const numbers = num.split(',');

// for (let i = 0; i < numbers.length; i++) {
//   sum += +numbers[i]; 
// }

// console.log(sum); 

// 4
// const str = '2025-12-31';
// const [year, month, day] = str.split('-');

// const date = {
//   year: year,
//   month: month,
//   day: day
// };

// console.log(date);