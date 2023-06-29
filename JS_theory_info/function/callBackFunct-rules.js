//1
//call Back Function
// example: одна фунция вызывает другую внутри себя

function printUserName(){
 console.log('Anna')
}
console.log("Start")
setTimeout(printUserName, 3000)// встроенная фунция вызывается через 1000мс

//2
//правила работы с функциями
//называть исходя из выполняемыз залдач
// 1 Ф выполнет 1 задачу - single properties
// не рекомендуется изменять внешние относительно Ф переменные- purer function
//можно вызывать неограниченное кол-во
// если у Ф нет return, то результат underfined

