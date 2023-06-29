// мутация примитивных типов неывозможна
let a = 10
let  b = 20
b = a
b = 30
console.log(b) // 30
console.log(a) // 10

// мутация ссылочных типов возможна!
// при копировании и внесении изменений обьекта изменяется не только копия но и первоначальный обьект
const person = {
    name: "Stepa",
    age: 45,
  
}

const person2 = person

person2.age = 99
console.log(person.age) // 99





//КАК ИЗБЕЖАТЬ МУТАЦИИ обьектов
//1 вариант - Object.assign()
//исп-тть если нет ВЛОЖЕННЫХ ОБЬКТОВ

const person3 = Object.assign({}, person)

person3.age = 5
console.log(person3.age)//5
console.log(person.age)//99

//2 вариант
//{...} spreed operator
//don't use with вложенными объектами

const person4 = {...person}
person4.name = "Alla"
console.log (person4.name) // Alla
console.log(person.name) // Stepa

//3 вариант
//полностью избежать мутации с json !!!!
// создание абсолютно нового обьекта включая вложенные ссылки
const person5 = JSON.parse(JSON.stringify(person))

person5.name = 'Olga'


console.log(person5.name)// olga
console.log(person.name)// stepa
console.log(person5)//{ name: 'Olga', age: 99 }
