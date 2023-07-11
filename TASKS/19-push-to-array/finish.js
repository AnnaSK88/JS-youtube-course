/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
 const arr = [35, 78,'56', 'dream']
 const arrPush = arr.push(true, 'Amsterdam', null)

 console.log(arr) //[ 35, 78, '56', 'dream', true, 'Amsterdam', null ]
 console.log(arr.length)//7