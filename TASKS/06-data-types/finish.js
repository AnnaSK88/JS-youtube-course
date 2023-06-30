/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const myStr = 'Hello!!!'
const myNum = 23
const myBool = true
const myNull = null
let myUndef
const myObj = {
    name: 'Anna',
    age: 32
}
const myArr = ['a', 11, true, null, {name:'Anna'}]
console.log(typeof myStr)
console.log(typeof myNum)
console.log(typeof myBool)
console.log(typeof myNull)
console.log(typeof myUndef)
console.log(typeof myObj)
console.log(typeof myArr)