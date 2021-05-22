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
        <form class="form-ofert">
             <input type="number" id="input-oferta-${product.nombre}" name=${product.oferta} placeholder="Ingrese su Oferta" class="imput__textera" required>
             <input type="hidden" name="oferta-id" value="${product.nombre}">
             <input type="submit" class="card__btn oferta_btn" value="Ofertar">
        </form>
        <div id="resultado-${product.nombre}"</div>
        <a href="#" id="AgregarCarrito-${product.nombre}" onclick=agregarCarrito(${product.id}) class="card__btn">AgregarCarrito</a>
    `
    contenedorTarjeta.appendChild(div)

})   

// OFERTA 

const ofertaButton = $('.form-ofert');

ofertaButton.on('submit', function (event){
    event.preventDefault()
    const oferta = event.target[0].value;
    const id = event.target[1].value;
    if (id.length >= 1) {

        let mensajeOferta = $(`#resultado-${id}`);

        mensajeOferta.append(`
            <p> 
                La oferta ingresada es oferta User es ${oferta}
                <a href="#" id="AgregarCarrito"  class="card__btn">AgregarCarrito</a>
            </p>
        `);
    }
});



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
