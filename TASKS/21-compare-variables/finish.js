/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'
let myVariable2String = myVariable2.toString()

console.log(myVariable1 <= myVariable2String)


// Напишите код здесь

myVariable1 = '20'
myVariable2 = 100


myVariable1String = myVariable2.toString()

console.log(myVariable1String <= myVariable2String)