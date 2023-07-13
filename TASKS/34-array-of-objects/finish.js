/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
 const myArray = [
     {carBrand: 'Mazda', price:  23000, isAvailableForSale: true },
     {carBrand: 'BMV', price:  83000, isAvailableForSale: false },
     {carBrand: 'Volvo', price:  63000, isAvailableForSale: true }
    ]
    // can use push(), unshift()

    const newCar = {carBrand: 'Mercedes', price:  103000, isAvailableForSale: true }
    myArray.push(newCar)
    console.log(myArray)