//1 ФУНКЦИЯ (Ф)
// функция это блок кода для повторного использования
function sum(a,b){
    return a+b
}
console.log(sum(2,3))
//2
// Ф мб именнованой, анонимной, присвоена переменной, аргументом при вызове др Ф и значением св-ва обьекта

// Ф это Обьект и у нее есть св-ва
console.dir(sum)

//structure
//имя - sum, тело - {}, параметры(как переменные внутри Ф)- (a.b) и результат(return)
// если нет return, то Ф underfined

// параметраы определяются в момент вызова Ф и становятся аргументами
//наименоваие параметров не меняется, а вот аргументы меняются в момент вызова ф-ции

//передача значения по ссылке
// внутри функции не рекомендуется мутировать объекты
//пример
const userName = {
    name: 'Bob',
    age : 19
}

function changeUserAge(user){
    userName.age += 1
    return user
}
changeUserAge(userName);
console.log(userName.age)//20

// как поступить чтобы не мутиовать обьект внутри ф-ции
// нужно создать и работать с копией переменной
//вот какЖ

function updateChangeAge(user){
    const updateUserName = {...user}
    updateUserName.age += 1;
    return updateUserName;
}

const userNameAge = updateChangeAge(userName);
console.log(userName.age)//20 остается без вторичных изменений
console.log(userNameAge.age)//21 - копия мутирует