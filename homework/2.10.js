//2
// Дано число. Получите первую четную цифру с конца этого числа.
// const num = 123456789
// const str = String(num);

// for (let i = str.length - 1; i > 0; i--) {
//     const result = +str[i];
//     if (result % 2 === 0) {
//         console.log(result)
//         break;
//     }
// }

// 1
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.


// 3
// Дана некоторая строка:

// const str = 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
// const arr = str.split(' ')

// let result = ''
// for (let i = 0; i < arr.length; i++) {
//     result += '!' + arr[i].slice(1)
// }
// console.log(result)

// 4
// Дан массив с числами:

// const arr = [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//         console.log('два одинаковых числа')
//     } 
// }
