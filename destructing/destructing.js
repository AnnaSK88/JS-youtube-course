//1
//деструктуризация обьектов 
// обьявление новых переменных и присваивание значений на основе значение свойств объектов

const userProfile = { 
   name: "Anna",
   dateOfBirth: 23,
   place: "Minsk",
}
const {name} = userProfile 
const { dateOfBirth, place} = userProfile
console.log(place)//Minsk
console.log(name) // Anna

//2
//destructing array

const fruit = ["apple", "banana"]
const [fruitOne, fruitTwo] = fruit
console.log(fruitOne)//apple
console.log(fruitTwo)//banana

//3
//destructing in function

const userProfile2 = { 
    name: "Anna",
    years: 32,
    place: "Minsk",
 }

 const infoUser = ({name, years}) =>
{
    if (years <= 30){
        return `User ${name} is less 30 years old `
    }
    return `User ${name} is ${years} years old`
}
console.log(infoUser(userProfile2))//User Anna is 32 years old