/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */
//1
 const arroyFunct = () => {
     return 'Hello, world!'
 }
 console.log(arroyFunct())

//2
 const arroyFunct1 = (str) => {
    return str
}
console.log(arroyFunct('Hello, world!'))

//3
const arroyFunct2 = (str) => 'Hello, world!'
console.log(arroyFunct2())
