// 1

//обьект -  набор свойств "имя:значение" +тип переменных + ссылочный тип
//порядок свойтв не имеет значения
const cityMy = {
    city: "Amsterdam",
    popular: true,
    country: 'NL'
}
console.log(cityMy.popular)//true - доступ к значению - dot notation

//change the value

cityMy.city = "Almere"
console.log(cityMy.city)

//add new value
cityMy.year = 1976
console.log(cityMy)

//delete the value

delete cityMy.popular
console.log(cityMy)


// доступ к обьъкту с исп-ем  [] - bracket notation
// исп-ся для примения имени любое выражение

cityMy['language'] = 'Netherlands';
console.log(cityMy);

const bestDish = 'traditional food';
cityMy[bestDish] = 'herring'
console.log(cityMy)

//вложенные свойста и обьект

const myName = {
name: 'Anna',
age: 32,
info: {
    hobby: 'dancing',
    course: 'JS',
}
}
console.log(myName.info.hobby)//dancing
delete myName.info['course']
console.log(myName.info)
myName.info['female'] = true
console.log(myName)

//2
//использование переменных
//сокращенная запись свойств: 
//-запись с меньшего к большему (как пирмадка)
//- расположение дб вначале свойств объкта для читабельности
 const name = 'Anna'
 const useLanguage='Russian'
 const postsQty  = 32

 const userProfile = {
     name, //name:name
     postsQty,// postsQty: postsQty 
     useLanguage,
     placeOfBirth: "USSR"
 }
 console.log(userProfile);

 //3
 //global objects
 // window - web-browzer
 //global - node.js
 //globalThis - и там и там!!!!!!и в браузере и Node.js


 //4
 //свойства global объекта
 //properties og global objects
 console.log(10)
 //window.console.log(10)
 //global.console.log(10)

//5
//object methods - св-во обьекта, значение к-го ФУНКЦИЯ
const myCat = {
    name: 'Dymka',
    sayHello: function(){
        console.log('Muaaw');
    }
}
console.log(myCat.name)// value свойство
console.log(myCat.sayHello()) // метод
console.log(myCat.sayHello) // funct...

// 6