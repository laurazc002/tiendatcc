//function para pintar productos de la tienda
export function pintarProductos(productos){
    //Pasos para pintar (hacer render) de etiquetas html desde js
    //Traversing
    //1. Crear una referencia en memoria(variable) 
    //que almacene la etique sobre la cual voy a pintar (etiqueta padre o  etiqueta raiz)
    let fila = document.getElementById("fila")
    //2. recorro el arreglo de datos y aplico traversing
    productos.forEach(function(producto){

    //2.1 creando una columna desde js
    let columna = document.createElement("div")
    columna.classList.add("col")
    //2.2 creando la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100", "text-center")
    //2.3 Creando la foto
    let FotoProducto = document.createElement("img")
    FotoProducto.classList.add("img-fluid","w-100")
    FotoProducto.src = producto.fotos[0]
    //2.4 creando nombre del producto
    let nombreProducto = document.createElement("h1")
    nombreProducto.textContent = producto.nombre
    // 2.5 creando el precio del producto
    let precioProducto = document.createElement("h6")
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent ='$'+ producto.precio + 'COP'
    //2.6 DETECTANDO EVENTOS

    columna.addEventListener("mouseover", function(){
        FotoProducto.src = producto.fotos[1]
    })

    columna.addEventListener("mouseleave", function(){
        FotoProducto.src = producto.fotos[0]
    })
    //3. defino padres e hijos
    tarjeta.appendChild(FotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
}


//buscador
/*let buscador = document.getElementById("busqueda")
buscador.addEventListener("keypress", function(evento){
    console.log(evento.target.value)
})*/
