/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const personID = {
    name: 'Anna',
    surname: 'SK',
    favoriteNumber: 23
}
const personalInfo = `My name is ${personID.name} ${personID.surname} and my favorite number is ${personID.favoriteNumber}`;
console.log(personalInfo)