// 1
//переменные дают возможность овторного оступа к значениям
//name variables: 

//  - PascalCase = называем типы и классы
//  - DB_RASSWORD = значения известы до запуска приложения и не меняются
//  - camelCase = все остальные переменные

//переменные дб понятными и читабельным для вас и других

//обьявление переменных
let name;// variable declaration

 const lastName = 10 // declaration and definition variable

 //2
 //тип переменной определяется типом присвоенного значения
 //примитивные тип: string, number, boolean, null, underfined, symbol
 // ссылочный тип: object

 const objectA = {
     a: 10,
     b: true,
 }
 const copyOfA = objectA;
 copyOfA.a = 20;
 copyOfA.c = 'abc'
 console.log(objectA)
 console.log(copyOfA.c)
 console.log(objectA.c)

 //3
 //динамическая типизация
function a(){
    console.log("Hei there!")
 }
 a = 10
 console.log(a());//it's not a function!!! 
 console.log(a)//10
 
// чтобы не изменить нечаянно тип данных следует испт-ть стрелочную функцию
const abc = () => {
    console.log('good morning!');
}
console.log(abc) //good morning

abc = 10; //typeError
console.log(abc)// программа не дойдет до этой строки выполнения