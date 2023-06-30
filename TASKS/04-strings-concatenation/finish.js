/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const myName = 'Anna'
const mySurname = 'SK'
const myProfession = 'Junior Web-Developer'

//OPTION 1
const personalInfo =
    `My name is ${myName} ${mySurname} and I am ${myProfession}`

console.log(personalInfo)


//OPTION 2
const personalInfo2 =
    'My name is ' + myName + ' ' + mySurname + ' and I am  ' + myProfession
console.log(personalInfo2)