// 1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
const num = 1223456789
const numStr = String(num);
for (let i = 1; i < numStr.length; i++) {
  if (+numStr[i] <= +numStr[i - 1]) {
    console.log('false')
  }
}