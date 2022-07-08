//Datos d la DB
let productosBD = [

     {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj1.webp?alt=media&token=35ecfa1a-97e4-4105-b7f1-d9c46ab015ea'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
   {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj2...webp?alt=media&token=008d51c1-c9dd-4d71-a4bd-adb47f7e391b'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
    {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj3.webp?alt=media&token=480858c3-4796-4aeb-b80a-cdc20be679c3'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
    {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj4.....webp?alt=media&token=000dc8e6-931c-4502-8c31-0c8219f47dec'],
        descripcion : 'Reloj Cartier de mujer'
    },
   
    {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj5...webp?alt=media&token=42edde32-a527-487d-ae23-6cfa1b5a6e4b'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
     {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj6.webp?alt=media&token=599ba8a8-c3ab-495b-9fa0-0e6ca0a8049e'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
    {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj7...webp?alt=media&token=8db75dbf-b3d3-4f07-a367-24f352f20e6c'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
     {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj8.webp?alt=media&token=c673ef6c-4d5a-4d40-916b-62e020b25ba0'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
     {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj9.webp?alt=media&token=223ceec3-40ea-46b0-b36a-01597d097e5b'],
        descripcion : 'Reloj Cartier de mujer'
    },
    
    
     {
        nombre : 'Reloj',
        precio : '45200000',
        cantidad : '0',
        fotos : ['https://firebasestorage.googleapis.com/v0/b/tiendatcc-bccd5.appspot.com/o/reloj10.webp?alt=media&token=4a31a8d4-3fc5-48a6-ab43-1b2dd3194f52'],
        descripcion : 'Reloj Cartier de mujer'
    }
    
    
    
    



]

//Pasos para pintar (hacer render) de etiquetas html desde js
//Traversing
//1. Crear una referencia en memoria(variable) 
//que almacene la etique sobre la cual voy a pintar (etiqueta padre o  etiqueta raiz)
let fila = document.getElementById("fila")
//2. recorro el arreglo de datos y aplico traversing
productosBD.forEach(function(producto){

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



