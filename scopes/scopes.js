//область видимости опр-т границы действия переменной
// глобальная, локальная переменные
let a, b

function myFn(){
 let b
 a = false
 b = 10
 console.log(b)
}
myFn()
console.log(a)//false - ПЕРЕПИСАЛА ПЕРЕМЕННУЮ!!! ТАК НЕЛЬЗЯ
console.log(b)//underfin

// 2
//типы областей видимости: глобальная, фунции и блока({})


//3
//нельзя необьвленную переменную писать в функции,
// тк она становится глобальной авто
//пример
function neverDoIt(){
    a = 100
    console.log(10)
} 
neverDoIt()
console.log(a)//100- global 

//можно исправить использовать строгий режим
//'use strict' или в глобал или вначале Ф

//ПРАВИЛА РАБОТЫ С ПЕРЕМЕННЫМИ
// 1 обьявлять переменнные перед исп-нием
// 2 исп-ть const где возможго а потом let
// 3 внутри ф не изменять переменые с внешней области видимости