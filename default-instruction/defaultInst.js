    //1
//default instruction
// if(условие){блок кода, выполняемый однократно если условие ПРАВДИВО}
let val = 20
if(val > 5) {
    val+=10
}
console.log(val)//30

const person = {
    age: 45,
}
if (!person.name){
    console.log("Name isn't find")
}


    //2 
// if else
// if (условие)Х выплняется если правдиво, иначе выполнится второй блок

let num = 10
if (num<=5){
    num+=20
} else {
    num-=3
}
console.log(num)//7


    //3
//if else if - можно переписать с исп-ем if

// if (условие1) ..блок кода, выпол-мый однократно, если условие 1 правдиво
// else if (условие2).. блок кода, выполн-мый однократно, если условие2 правдиво
// else  .. если предыдущие ложны
let age = 8;

if (age >= 18 ){
  console.log("Is adult")
} else if( age >= 12){
    console.log("Is teenager")
} else {
    console.log("Is child")
}

let randomNum = 20
if (randomNum > 30){
    console.log("More than 30")
}
if(randomNum > 20 && randomNum <=30) {
    console.log("Between 20 and 30 including")
}
if(randomNum <= 20 ) {
    console.log ('Less than 20 including')
}


    //4
// if in the Function


const findMaxNumber = (a,b)=> {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return " One of the arguments isn't a number"
    } else {
        return a + b;
    }
}
console.log(findMaxNumber(2, 10))
console.log(findMaxNumber(true,10))

    //5
//switch


// альтернатива if else if
// switch(выражение){
//     caseA: если выражение  === А
    //       break
    // case B: если ыражение  === В
    //     break
    // default: по умолчанию 
// }

let month = 6
switch (month) {
    case 12:
        console.log("December")
        break
        case 2:
            console.log("February")
            break
        default:
            console.log(" It's not a winter")
}
