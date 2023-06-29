//1
//fuction expression - anonymous функциональноке выражение
fucrion (a,b) {
    let c =a+b
    return c
}

//2
// fuction declaration - обьявленная ф
function myFunc (a,b){
    let c = a+b;
    return c
}

// отличия:
// обьявленная функция имеет имя, можно использовать автономно
//одинаково: можно присваивать перемеенонй и исп-ть как callback function

//how to use funct expres
setTimeout(function(){
    console.log("Wait one second");
}, 1000)

//3
// стрелочные ф-ции - arrow funct
// alwaya anynoumous
//(a+b) - анонимное функциональное выражение
const myFun = (a,b) => a+b //impleased return

// arrow funct use like callback
setTimeout(()=> console.log("uppps"), 1000)

//4 
// значение параметров функции по умолчанию
// default parametrs
//если нет значения в параметрах, то присвается условно заданное

function myFn( value, multi = 1) {
    return value * multi
}
//пример посложнее c default param

const userFunction = (user, addAt = Date()) => ({
    ...user,
    addAt,
})
const firstUser = {
    id: 1,
    name: "David"
}
userFunction(firstUser)

const copuUserFn = (user, addAt = Date()) => {
    let newUser = 
    {...user, addAt}
     return newUser;
}
 






