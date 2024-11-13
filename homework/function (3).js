// function getIndex(str) {
//   // console.log(str)
//   const result = str.slice(0, 3);
//   return result;
// }
// const word9 = "Цапля";
// const word8 = getIndex(word9);
// const word7 = getIndex("Жук");
// const word6 = getIndex("Улитка");

// console.log(word8, word7, word6);

// function setNewText(word1, word2, word3) {
//   return `${word1} ${word2} ${word3}`;
// }

// const res1 = setNewText("word1", "word2", "word3");
// const res2 = setNewText("word3", "word1", "word2");
// console.log(res1);
// console.log(res2);

// function setUpperWord(word) {
//   const word0 = word.slice(1, -1);
//   return word0.toLocaleUpperCase();
// }
// const res3 = setUpperWord("word");
// const res4 = setUpperWord("Hello");
// console.log(res3, res4);

// function setNameEmail(email) {
//   const index = email.indexOf("@");
//   return email.slice(0, index);
// }
// const email1 = setNameEmail("ivan@yandex.ru");
// const email2 = setNameEmail("alexander@gmail.com");
// console.log(email1);
// console.log(email2);

// function setYandexEmail(email) {
//     if (email.endsWith('@yandex.ru')) {
//         return email
//     } else {
//         const index = email.indexOf('@')
//         return email.slice(0, index) + '@yandex.ru'
//     }
// }
// console.log(setYandexEmail('max@yandex.ru'))
// console.log(setYandexEmail('nikita@gmail.com'))
// console.log(setYandexEmail('cat@dog.hru'))
// console.log(setYandexEmail('ivan@gmail.com'))

// function  checkValue(text) {
//     if (text.startsWith('www') && string.endsWith('ru')){
//         return 'Русский домен'
//     } else if (text.endsWith('com')) {
//         return 'Американский домен'
//     }
//      else {
//         return 'Неверный домен'
//     }
// }
// console.log(checkValue('www.rambler.ru'))
// console.log(checkValue('www.mail.com'))
// console.log(checkValue('ягоды'))

// #####################################################

// for (let i = 0; i < 10; i++) {
//     console.log('i =', i)
// }

// const text = 'Домик@ (p';

// // console.log(text[0])

// for (let i = 9; i < text.length; i++) {
//     console.log(text[i])
// }

// function changeWordA(text) {
//     let result = '';

//     for (let i = 0; i < text.length; i++) {
//         console.log(`Шаг номер ${i}`)
//         if (text[i] !== "а") {
//             console.log('text[i] =', text[i])
//             result = result + text[i]
//         } else {
//             console.log('text[i] =', text[i])
//             result = result + '#'
//         }
//     }
//     return result;
// }

// const newText = changeWordA('Машина')
// console.log(newText, 'newText')
// asdasd

// for (let i = 0; i >= 0; i++) {
//     console.log(i)
// }

// function customSlice(text, numStart, numEnd) {
//     let result = '';
//     for (let i = 0; i < text.length; i++) {
//         if (i === numStart) {
//             result = result + text[i];
//         } else if (result.length > 0 && i !== numEnd) {
//             result = result + text[i];
//         }
//     }
//     return result;
// }

// customSlice('Ягода', 1, 4)

const num1 = "100.214658201";
const text = "20";

// console.log(num1, String(num1), '' + num1, `${num1}`)
// console.log(text, Number(text), +text)
// console.log( num1 > +text)

// console.log(Math.floor(num1), 'Округление в меньшую')
// console.log(Math.ceil(num1), 'Округление в большую')
// console.log(Math.round(num1), 'Округление матиматически')
// console.log(Math.trunc(num1), 'Обрезать остаток')

// console.log(Number(num1.toFixed(3)), 'Детальное округление')

// console.log(Math.random(), 'Рандомное число')
// console.log(Math.max(3, 5, -10, 0, 1), 'Максимальное число из списка')
// console.log(Math.min(3, 5, -10, 0, 1), 'Минимальное число из списка')
// console.log(Math.pow(2, 2), 'Возведение в степень')

function randomNumber() {
  const numberRandom = Math.random();
  const stringRandom = String(numberRandom);
  const stringOneNumber = Number(stringRandom.at(-1));
  const stringTwoNumber = Number(stringRandom.at(2));
  const result = `${stringOneNumber}${stringTwoNumber}`;
  return result;
}

const num = randomNumber();
// console.log(num, "num");
// let user = null;

// user = 'Alex'
// user = 'Nick'

// console.log(user)
// randomNumber() => 12

// let fruits = ["Яблоко", "Апельсин", "Слива", 1, 2, undefined, null, true];

// console.log(fruits, 'fruits')
// // console.log(fruits[0], 'fruits[0]')

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i], typeof fruits[i], 'typeof fruits[i]')
//   if (typeof fruits[i] === 'string') {
//     console.log('###################')
//     console.log(fruits[i], 'fruits[i]')
//     console.log('###################')
//   }
// }

// let fruits = ["Яблоко"];
// console.log(fruits, 'fruits')

// МЕТОДЫ ДОБАВЛЕНИЯ В МАССИВ
// PUSH

// fruits.push('Ананас')
// fruits.push('Ананас1')
// fruits.push('Ананас2')

// console.log(fruits, 'fruits')

// UNSHIFT
// fruits.unshift('Ананас')
// fruits.unshift('Ананас1')
// fruits.unshift('Ананас2')

// МЕТОДЫ УДАЛЕНИЯ ИЗ МАССИВА

// POP
// fruits.pop()
// fruits.pop()
// console.log(fruits, 'fruits')

// SHIFT
// fruits.shift()
// fruits.shift()
// console.log(fruits, 'fruits')

function customSort(array) {
  let result = [];
  for (let i = 0; i <= array.length; i++) {
      if (typeof array[i] === 'string') {
        result.push(array[i])
        // console.log(result, 'result')
      }
  }
  return result;
}

// let fruits = ["Яблоко", "Апельсин", "Слива", 1, 2, undefined, null, true];
// let data = [1, 1, 2, 'asdasdsad'];
// console.log(fruits, "fruits");
// console.log(data, "data");

// const listStrings = customSort(fruits);
// const listData = customSort(data);

// console.log(listStrings, 'listStrings')
// console.log(listData, 'listData')

// let fruits = ["Яблоко", "Апельсин", "Слива", 1, 2, undefined, null, true];

function filterData(array) {
  let result = [];
  for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] === "string") {
      result.push(array[i]);
    } else {
      result.push(typeof array[i]);
    }
  }
  return result;
}

// const newFruits = filterData(fruits);

// console.log(fruits);
// console.log(newFruits, 'newFruits')

let fruits = ["Яблоко", "Апельсин", "Слива", 1, 2, undefined, null, true];

function deleteItem(array, index) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      result.push(array[i]);
    }
  }
  return result;
}

// const newFruits = deleteItem(fruits, 5);

// const list = fruits.filter((item) => typeof item === 'string')

// console.log(fruits, "fruits");
// console.log(newFruits, 'newFruits')
// console.log(list)

function maxNumber (listNumbers) {
  let max = 0;
  for (let i = 0; i < listNumbers.length; i++){
    if (listNumbers[i]>max){
      max = listNumbers[i]
    };
  }
  return max;
} 
// const num2 = maxNumber([0, 1, 2, 3, 4, 5]);
// console.log(num2)

function Nummber (array) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (array[i]%2 === 0){
      result.push(array[i])
    }
  }
  return result
}

const num3 = Nummber([0, 1, 2, 3, 4, 5]);
console.log(num3)

