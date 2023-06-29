//1
// create Arrays
// массив- обьект с цифровыми именами св-в: 0,1,2

const myArray = [1,2,4,6]
console.log(myArray)

const myArray2 = new Array(1,2,4,6)//новый экземпляр класса
console.log(myArray2);
console.log(myArray2.length);

console.log(myArray === myArray2)//false

const myArray3 = myArray
console.log(myArray3 === myArray);//true

//2
//сравним массив и обьект     
    //2.1 отличается при выводе прототипом и соответст-но доступными методами
    // н обьекта прототип обьект, у массива _proto_: Array()


    //2.2чтение массива [], object - .

const myArray4 = [1, true, 'Anna'];
console.log(myArray4.length)
console.log(myArray4[0])//1
console.log(myArray4[2])//"anna"

    //2.3 порядок следования элементов в массиве важен

//3
//3.1.меняет значение в массиве по индексу

const myArray5 =[ 1,2,3,4,5]
myArray5[1] ="DDDD"
console.log(myArray5)

// 3.2 добавляет в конец массива, зная длинну массива
console.log(myArray5.length)//5
myArray5[5] = true;
console.log(myArray5)
console.log(myArray5.length)//6

//4

//for add and delete elements in the begin and end of arrays
// эти методы называются Функциями высшего порядка
// или функция или метод прототипа!!!

//5
    // push = add in the end
const myArray6 = [1,2,3]
myArray6.push(4)
console.log(myArray6)//[ 1, 2, 3, 4 ]

    //pop - delete in the end
const removedElement = myArray6.pop()//4 -return deleted element
console.log(myArray6)//[ 1, 2, 3 ]

    //unshift - add element in the end
myArray6.unshift('hello')
console.log(myArray6)//[ 'hello', 1, 2, 3 ]

    //shift - delete the first element
const deleteFirtEl = myArray6.shift()
console.log(deleteFirtEl)//'hello'
console.log(myArray6)//[ 1, 2, 3 ]

    // forEach - for every elements array, callBack function
    // don't change the origin array, the callBack 
    //перебираем все элементы массива, при этом делая с ним манипуляции и оригинал массива не меняется
    const res = myArray6.forEach(el => console.log(el * 2));// 2 4 6
    console.log(myArray6)//[ 1, 2, 3 ]
    console.log(res) // underfined, ешго задача перебор и изменение каждого элемента
    

    //map - create a new array and original array doesn't change
    //but the length will be the same!!!!
    const newArray = myArray6.map(el => el*10)
    
    console.log(newArray)//[ 10, 20, 30 ]
    console.log(myArray6)//[ 1, 2, 3 ]

  

