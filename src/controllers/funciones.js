//codigo artesanal
//entradas
/*let numero1 = 10
let numero2 = 20
//proceso
let suma = numero1 + numero2
//salida
console.log("La suma es: "+ suma)

let numero3 = 30
let numero4 = 40
let suma2 = numero3 + numero4
console.log("la suma es : " + suma2)*/

//codigo automatico (funciones)
let numero1 = 50
let numero2 = 12
//delaracion de la funcion
function sumarDosNumeros(numero1, numero2){
    let suma = numero1 + numero2
    console.log("la suma es : " + suma)
}

//para usar una funcion yo la debo llamar
//global
sumarDosNumeros(numero1,numero2)
//local
sumarDosNumeros(2,5)
sumarDosNumeros(10,5)

