//1
// тернанрный оператор - это выражение инструкция
// Условие ? Выражение1 : Выражение2
// запись:
//     Условие
//  след      ? Выражение1
//            : Выражение2

// можно заменить 2 if


//2 исп-м с одной переменной
let val = 2;
 (val)
  ? console.log("This is a number")
  : console.log("It's not a number")

//3
// исплользуем и в функции и вызываем ф-цию

const a = 5
const b = 7

(a && b)
   ? console.log(myFunction (a,b))
   : console.log(myFunction())

//4
//можно присваивать значение переменой

const minus = 10
console.log((minus >= 0) ? minus : -minus)

let minus = -12
const res = (minus>=0 ? -minus : minus)
console.log(res)

