let plato1 ={
    nombre : "Cannelloni trufado",
    precio: '27.000' ,
    descripcion: 'DE POLLO Y SETAS, En salsa cremosa de trufa,gratinados con queso mozzarella y queso parmesano, finalizados con almendras crocantes y brotes.',
    categoria : 'Plato fuerte'
}

let plato2 = {
    nombre: 'Camaron y pollo carbonara',
    precio:'34.000',
    descripcion:'Camarones y julianas de pollo a la parrilla, sobre pasta artesanal penne en salsa cremosa carbonara y queso parmesano',
    categoria:'Plato fuerte'
}

let plato3 = {
    nombre:'Crema champiñones',
    precio:'14.900',
    descripcion:'Cremosa preparación con champiñones frescos con un toque de quinoa crocante,queso parmesano y crema, finalizadocon brotes',
    categoria:'Entrada'
}


let plato4 = {
    nombre:'Soda de coco',
    precio:'12.000',
    descripcion:'Refrescante soda con sabor a coco ',
    categoria:'Bebida'
}


let plato5 = {
    nombre:'Micao de arequipe redondo',
    precio: '67.000',
    descripcion:'Postre',
    categoria:'Postre'
}

let platos = Array(plato1,plato2,plato3,plato4,plato5)

//metodo 1. forEach
platos.forEach(function(plato){
    console.log(plato.nombre)
})

//metodo 2. filter(debe haber una condicion)
//categoria = postre
let resultado = platos.filter(function(plato){
    return(plato.categoria=='Postre')
})
console.log(resultado)

//precio menor igual a 20.000
resultado = platos.filter(function(plato){
    return(plato.precio <= '20.000')
})
console.log(resultado)

//precio menor a 20.000 y categoria = entrada, devuelve arreglo
resultado = platos.filter(function(plato){
    return(plato.precio <= '20.000' && plato.categoria == 'Entrada')
})
console.log(resultado)

//metodo 3. find , solo devuelve un solo elemento del arreglo, el primero que encuentra
let busqueda = platos.find(function(plato){
    return(plato.categoria == 'Bebida')
})
console.log(busqueda)

//metodo 4. map, REEMPLAZA 
let mapear = platos.map(function(plato){
    return(plato.categoria ='Ensalada')
})
console.log(mapear)

//metodo 5. push , agrega un elemnto nuevo al arreglo
let plato6 = {
    nombre:'Mixto solomito fungi',
    precio: '36.900',
    descripcion:'Medallón de solomito a la parrilla bañado en salsade champiñonesyperejil, acompañado de pasta corta rigatoni en salsa pomodoro con queso parmesano y ensalada de kale conaderezo césar, quinoa crocante y queso parmesano.',
    categoria:'Postre'
}

platos.push(plato6)
console.log(platos)
