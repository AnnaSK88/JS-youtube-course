//1
//вывод непойманных ошибок
const findError = () => {
    throw new Error(" some error...")}

findError()  // Uncaught Error:  some error...
            //at findError (<anonymous>:2:11)
console.log("rererere")

//2
//поймать ошибку для продолжения работы кода
// try/catch
try{
    //выполнение кода блока
} catch {
    // этот блок вып-тся в случае возникновения ошибок в блоке try
}

//как это будет

try {
    findError()
} catch {
    console.error(error)
    console.log(error.message)
}
console.log("workkkkkk")
 
