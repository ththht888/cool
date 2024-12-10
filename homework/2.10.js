//1
// Дано число. Получите первую четную цифру с конца этого числа.
const num = 123456789
const str = String(num);
for (let i = 0; i > str.length - 1; i--) {
    const result = +str[i];
    if (result % 2 === 0) {
        console.log(result)
    }
}
