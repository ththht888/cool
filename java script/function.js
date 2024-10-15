function getIndex(str){
    // console.log(str)
    const result = str.slice(0,3)
    return result
}
const word9 = "Цапля"
const word8 = getIndex(word9)
const word7 = getIndex("Жук")
const word6 = getIndex("Улитка")

console.log(word8,word7,word6)


function setNewText(word1, word2, word3){
    return `${word1} ${word2} ${word3}`
}

const res1 = setNewText('word1', 'word2', 'word3')
const res2 = setNewText('word3', 'word1', 'word2')
console.log(res1)
console.log(res2)


function setUpperWord(word){
    const word0 = word.slice(1, -1)
    return word0.toLocaleUpperCase()
}
const res3 = setUpperWord('word')
const res4 = setUpperWord('Hello')
console.log(res3,res4)


function setNameEmail(email){
    const index = email.indexOf('@')
    return email.slice(0, index)
}
const email1 = setNameEmail('ivan@yandex.ru')
const email2 = setNameEmail('alexander@gmail.com')
console.log(email1)
console.log(email2)