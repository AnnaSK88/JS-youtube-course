/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
console.log('Start for check: ')


// let i = 1

// const myMessageInterval = setInterval(() => {
//     console.log('Message ' + i)
//     i += 1
// }, 2000)

// setTimeout(() => clearInterval(myMessageInterval), 11000)

let i = 1
const myMessage = function message(){
    console.log('Message number' + i)
    i+=1
}
const setIntr = setInterval(myMessage, 2000)
setTimeout(() => clearInterval(setIntr), 11000)
