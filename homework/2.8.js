// 1
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
const str = "HHgg"
let strUp = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
  }
}


// 2
// Дана некоторая строка:

// const str = '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:

// '1 22 333 22 1'
// function deleteStr(str) {
// return str.split(' ').filter(item => item.length <= 3).join(' ');
// }
// console.log(deleteStr(str))

// 3
// Даны два массива:
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let twoArr = [];

// for (let i = 0; i < 2; i++) {
//   twoArr.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++) {
//   twoArr.push(arr2[i]);
// }
// twoArr.push(arr1[2]);

// console.log(twoArr);
