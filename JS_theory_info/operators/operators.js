//1
//оператор это встроенная функция. Бывают
    //1.1 сивольные: ,
    // - арифметические: + - * /
    // - сравнения === <= >= !==
    // - логические: не! && ||
    // - присваивания =

    //1.2 тектовые: new delete typeof instanseof

//2
// операнд
a = 10//a lefthand 10-rigth hand operand

//унарные операторы- один операнд
delete Object.name
typeof a

//бинарные операторы имеет 2 операнда
 b= 10, a === b, s <= c
 
 //3
 //3.1форматы записи:
    // инфиксная запись
    a = true, a + b, a += 5, a || b , a > b
    // префиксная запись
    ++a, delete nameTG.name, typeof b
    // постфиксная запись
    myFunc(), a++

//4
// приоритетность операторов
// таблица  см. и как в матем-ке

//5
//логические операторы ! || &&
//возвращает всегда boolean одного из 2х операндов

//6
//ложные значение 
// при приведении к булеван всегда false 5stuk
false, 0, '', undefined, null
(Boolean(value)) //false

//7
// оператор не !
// двойное отрицание !! позволяет проверить ложность значения
!!false // false
!!''//false

//8
// short secwent
    // выражение1 && выражение2
    //если выражение1 ложно, то выражение 2 игнорируется и возвр значение выражения1
    // если выр1 правдиво то результат оценивается по результату ВЫРАЖЕНИЯ2

    // ОПЕРАТОР ||
    // выражение1 || выражение2
    // если выражение1 ИСТИННО, то выражение2 игнорируется и возр результат выраж1
    // если выражение1 ложно, то оцениваем и возвр выражени2

    let b =10
   b && console.log("done") // done
                            //undefined
    let c
    c && console.log("hello") // underfined                      
//9
//цепочка операторов
 a && b && c && d // ищем первое ложное, перебираеем и выводим
 a || b || c || d

 //10
 // оператор разделения на свойства ...
 // исп-ть в начале перезаписи

 const button = {
     width: 200,
     text:"push"
 }
const colorButton= {
    ...button,
    color:"red"
}
console.table(colorButton)

//11
// конкатенация строк +
console.log("Hello, " + " Anna")

const hello = "Good morning"
const names = " Anna"
console.log(hello + " " + names);
 
//шаблонные строки
const greeting = `${hello} ${names}`


const myName = "Anna"
const myCity = "Almere"

console.log("My name is " + `${myName}` + "and I live in " + `${myCity}`);
 //My name is Annaand I live in Almere

