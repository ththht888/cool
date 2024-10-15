// // const userName = 'kolyashamvasha'; // Неизменяемая переменная const
// // // const name = 'Петя'; // Изменяемая переменная let
// // // "kolyashamvasha"
// // // 0-k, 1-o, 2-l ...
// // // console.log(userName, userName.length); // Это длина переменной

// // const wordA = userName[4]
// // const wordM = userName[8]

// // console.log(wordA, wordM)

// // const wordOne = 'кар';
// // const wordTwo = 'тошка';

// const wordResult = wordOne + wordTwo + " aaaaaa"; //'кар' + 'тошка' = 'картошка'
// const wordResultNew = `${wordOne}${wordTwo} aaaaaa`;
// // console.log(wordResult)
// // console.log(wordResultNew)

// // Дано неизменяемая переменная name, в которой хранится string 'Александр'
// // Нужно сделать другое слово используя буквы из этой переменной и тех который не хватает отдельно

// name = 'Вася';
// console.log(name);

// console.log('Название магазина "фывфыв"')

// const guestList = "Guests:\\ * John  * Pete * Mary";

// console.log(guestList);

// const userName = "Москва";

// const wordV = userName[0];
// const wordA = userName[5];

// const wordV = userName.at(-1);
// const wordA = userName.at(-2);

// console.log(wordV, wordA);

// const text = 'asdASDsdasAS';

// console.log(text.toLocaleUpperCase())
// console.log(text.toLocaleLowerCase())

const email = "ivan@yandex.ru";
const emailNik = "nikolay@mail.ru";
const numberIndex = email.indexOf("@yandex.ru")

console.log(numberIndex)

const textTwo = "Самолет летит в сторону юга";

const currentIndexEmail = email.indexOf("@");
const currentIndexEmailNik = emailNik.indexOf("@");
const resultSlice = textTwo.slice(8, 13);
const resultSliceTwo = textTwo.slice(14);

const nameIvan = email.slice(0, currentIndexEmail)
const nameNikoolai = emailNik.slice(0, currentIndexEmailNik)

console.log(nameIvan)
console.log(nameNikoolai)

