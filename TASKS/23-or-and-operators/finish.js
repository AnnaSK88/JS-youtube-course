/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)//true
/* rules: 
при операторе ИЛИ ищется первое правдивое значение, если нет - вывод последнее значение
при операторе И ищется первое ложное, если нет - вывод последнее значение
*/