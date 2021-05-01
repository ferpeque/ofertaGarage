


// Recupero estructura hmtl del producto
let contenedorTarjeta = document.getElementById("container-product")
    //console.log(contenedorTarjeta)

// forEach recorre todo el Array
productos.forEach(product => {
        //console.log (product)

//Creo tarjeta producto.
//Por cada product me crea un html 
let div = document.createElement("div")
div.classList.add("card")
        //console.log(div)

div.innerHTML = `

    <img src=${product.img} alt="" class="card__img">
    <h4 class="card__title">${product.nombre}</h4>
    <p class="card__description">${product.desc}</p>
    <input type="text" id="input-oferta" name="Oferta1" placeholder="Ingrese su Oferta" class="imput__textera">
    <a href="#" id="card1" onclick=ofertaUser(event) class="card__btn">Ofertar</a>
    <div id="resultado"
    <a href="#" id="AgregarCarrito" onclick=agregarCarrito(${product.id}) class="card__btn">AgregarCarrito</a>
`
contenedorTarjeta.appendChild(div)

})   




function ofertaUser (event) {
        // console.log (event.target)

// previene actualizacion de la pagima
    event.preventDefault()
   
    let ofertaIngresada = document.getElementById("input-oferta") 
    console.log(ofertaIngresada)
    
    let ofertaUser = parseInt(ofertaIngresada.value)
    console.log(ofertaUser) 
    console.log(typeof ofertaUser)
    
/*


    let mensajeOferta = document.getElementById("resultado") 
     // muestro resultado del User y agrego boton carrito
        let itemOferta = document.createElement('p')
        itemOferta.textContent = `La oferta ingresada es  ${ofertaUser} `
        itemOferta.innerHTML = `
        <button onclick=agregarAlCarrito() class="btn" type="submit"> Agregar carrito </button> `
        mensajeOferta.appendChild(itemOferta) 

*/    
}

//


//BOTON
function agregarCarrito (id) {
    //recuperar el elemento elegito al clickear
    const productoElegido = productos.find( el => el.id == id) 
     //console.log(productoElegido)

    // si elegiste, sumar al array del carrito. 
     if (productoElegido) {
        carrito.push(productoElegido)
     }

     productosSeleccionados ()

     console.log(carrito)   
    
}

//AGREGRAR PRODUCTOS SELECCIONADOS A MODAL

function productosSeleccionados () {
    const contenedorCarrito = document.getElementById("carrito-contenedor")
    
    // vaciar el carrito 
    contenedorCarrito.innerHTML=""

    carrito.forEach((product) => {
        contenedorCarrito.innerHTML += `
        <div class="productoEnCarrito">
        <p>${product.nombre}</p>
        <p>Precio: $1200</p>
        <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>`
    })

}



carrito = []
