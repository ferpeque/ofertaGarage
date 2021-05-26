// AGREGA EN CSS BTN AGREGAR UN CURSOR:POINTER
console.log("funciona")




let contenedorTarjeta = document.getElementById("container-product")


const url = 'app/productos.json'


$.get((`${url}`), function (products) {
    console.log(products)
    


    // forEach recorre todo el Array
products.forEach(product => {

    //Creo tarjeta producto.
let div = document.createElement("div")
    div.classList.add("card")

div.innerHTML =
     `
        <img src=${product.img} alt="" class="card__img">
        <h4 class="card__title">${product.nombre}</h4>
        <p class="card__description">${product.desc}</p>
        <form class="form-ofert">
             <input type="number" id="input-oferta-${product.nombre}" name=${product.oferta} placeholder="Ingrese su Oferta" class="imput__textera" required>
             <input type="hidden" name="oferta-id" value="${product.nombre}">
             <input type="hidden" name="precio" value="${product.precio}">
             <input type="submit" class="card__btn2 oferta_btn" value="Ofertar">
        </form>
        <div id="resultado-${product.nombre}"</div>
        <a href="#"  id="AgregarCarrito-${product.nombre}" onclick=agregarCarrito(${product.id}) class="card__btn">AgregarCarrito</a>
    `
contenedorTarjeta.appendChild(div)

})   
})

// OFERTA 

const ofertaButton = $('.form-ofert');

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

ofertaButton.on ('submit', function (event){
    event.preventDefault()
    const oferta = event.target[0].value;
    console.log(oferta)
    const precio = event.target[2].value;
    console.log(precio)
    const id = event.target[1].value;


    if (oferta >= (precio+200)) {
        console.log("oferta correcta")
            let mensajeOferta = $(`#resultado-${id}`);
                mensajeOferta.prepend(`
        <p> 
            La oferta ingresada es oferta User es ${oferta}
            <a href="#" id="AgregarCarrito"  class="card__btn">AgregarCarrito</a>
        </p>
    `)
    $('p').slideDown(2000); // creo que no me está funcionando ! 
    $('.card__btn').show();
   
}
 else {

    let mensajeRechazado = $(`#resultado-${id}`);
    mensajeRechazado .prepend(`
    <p> 
        Oferta más ! 
    </p>
`)
     }

})


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
