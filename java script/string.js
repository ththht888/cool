// const Name = "aлександр"
// const wordA = Name[0]
// const wordL = Name[1]
// const wordE = Name[2]
// const wordK = Name[3]
// const wordS = Name[4]
// const wordN = Name[6]
// const wordD = Name[7]
// const wordR = Name[8]
// const wordOne = "тошка"

// console.log (wordA + wordR + wordS + wordE + wordN + wordA + wordL)
// console.log (wordE + wordL + wordK + wordA)

// const wordResult = wordK + wordA + wordR + wordOne;
// console.log(wordResult)

// const wordTwo = Name+" "+wordResult;
// console.log(wordTwo)

const textOne = "машина"
const textTwo = "едет"
const textThree = "в Дагестан"
const resOne = `${textOne} ${textThree} ${textTwo}`
const resTwo = `${textThree} ${textOne} ${textTwo}`
const resThree = `${textTwo} ${textThree} ${textOne}`
console.log(resThree)
console.log(resTwo)
console.log(resOne)

const str ="ПрИкОлДеС"
const wordOne = str.slice(0,6)
const ressOne = wordOne.toLocaleUpperCase()
const wordTwo = str.slice(6)
const ressTwo = wordTwo.toLocaleLowerCase()
const resultOne = `${ressOne}${ressTwo}`
console.log(resultOne)

const word4 = str.slice(0,5)
const res3 = word4.toLocaleLowerCase()
const word5 = str.slice(5)
const res4 = word5.toLocaleUpperCase()
const res5 = `${res3}${res4}` 
console.log(res5)


const word0 = str.slice(0,3)
const res0 = word0.toLocaleUpperCase()
const word00 = str.slice(3,6)
const res00 = word00.toLocaleLowerCase()
const word000 = str.slice(6)
const res000 = word000.toLocaleUpperCase()
const res0000 = `${res0}-${res00}-${res000}`
console.log(res0000)
