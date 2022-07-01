let poliitico = {
    nombre: 'alvaro',
    poder: 'dinero',
    edad : '64',
}

//controlando etiquetas 
//1.necesito almacenar una etiqueta en una variable
let titulo = document.getElementById("titulo")
let imagen =  document.getElementById("foto")
let titulo2 = document.getElementById("titulo2")
let boton = document.getElementById("boton")

//2. identifico que quiero controlar
//2.1 cambiando el texto

//2.2 cambiar la fuente src

// 3. Modificando estilos
//3.1 Agregandod una clase
titulo.classList.add('text-danger', 'fuente2')

//3.2 Quitando una clase
titulo2.classList.remove('text-info')
titulo2.classList.add('text-danger')

//4. escuchando eventos
boton.addEventListener("click", function(){
    titulo.textContent = "chao"
    imagen.src= "https://placeimg.com/640/480/any"
})

