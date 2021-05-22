// AGREGA EN CSS BTN AGREGAR UN CURSOR:POINTER


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
    <input type="text" id="input-oferta" name=${product.oferta} placeholder="Ingrese su Oferta" class="imput__textera">
    <a href="#" id="card1" class="card__btn">Ofertar</a>
    <div id="resultado"</div>
    <a href="#" id="AgregarCarrito" onclick=agregarCarrito(${product.id}) class="card__btn">AgregarCarrito</a>
`
contenedorTarjeta.appendChild(div)

})   

// OFERTA 

const ofertaIngresada = $('#input-oferta')

 
const ofertaButton = $('#card1')
const botonAgregarCarrito = $('#AgregarCarrito')

let mensajeOferta = $('#resultado') 


// no esta funcionando.

/* ofertaIngresada.on('change', ()=>{

    const ofertaUser = parseInt(ofertaIngresada.val()) 

    if (ofertaUser > 40) {
        ofertaUser.addClass('valido')
        ofertaUser.removeClass('imvalido')
    } else {
        ofertaUser.addClass('imvalido')
        ofertaUser.removeClass('valido')
    }

})
*/

ofertaButton.on ('click', function (event){

    event.preventDefault()
    console.log("click")

        const ofertaUser = parseInt(ofertaIngresada.val()) 
            console.log ( ofertaIngresada )
            console.log (typeof ofertaUser ) // el typeof me sale undefinide 


  if (ofertaUser > 40) {              // reemplazar por precio producto

            
                mensajeOferta.append ( `
                <p> 
                La oferta ingresada es oferta User es ${ofertaUser}
                <a href="#" id="AgregarCarrito"  class="card__btn">AgregarCarrito</a> 
                </p> `
        )
   //         botonAgregarCarrito.classList.add('AgregarCarrito-active')

            ofertaIngresada.val('') // para que refresque

 } else {
        alert ("tu oferta no fue aceptada")
            ofertaIngresada.val('') // para que refresque

  }
} )



/*
function ofertaUser (event) {
        // console.log (event.target)

// previene actualizacion de la pagima
    event.preventDefault()



   
    let ofertaIngresada = document.getElementById("input-oferta") 
    console.log(ofertaIngresada)
    
    let ofertaUser = parseInt(ofertaIngresada.value)
    console.log(ofertaUser) 
    console.log(typeof ofertaUser)
    





}

*/

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

     //console.log(carrito)   
}

function eliminarPorducto (id) {
    const productoEliminar = carrito.find (el =>el.id==id)

        // me devuelve el indicte (posicion) del producto en el ArrayCarrito (modal)
    const indice = carrito.indexOf(productoEliminar)
        
        // metodo splice elimina un producto
    carrito.splice(indice, 1 )
    console.log(carrito)

        // actualizdo contenido del Modal 
    productosSeleccionados () 

}


//AGREGRAR PRODUCTOS SELECCIONADOS A MODAL

function productosSeleccionados () {
    const contenedorCarrito = document.getElementById("carrito-contenedor")
    const contador = document.getElementById("contadorCarrito")
    
    // vaciar el carrito 
    contenedorCarrito.innerHTML=""

    carrito.forEach((product) => {
        contenedorCarrito.innerHTML += `
        <div class="productoEnCarrito">
        <p>${product.nombre}</p>
        <p>Precio: $1200</p>
        <button onclick=eliminarPorducto(${product.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>`
    })

    contador.innerText = carrito.length

}



carrito = []
