
let stockProductos = []
let contenedorTarjeta = document.getElementById("container-product")

fetch('app/productos.json')
    .then(resp => resp.json())
        .then(data => {
            stockProductos = data 
            mostrarProdcutos (stockProductos)
            console.log(stockProductos)
        })

function mostrarProdcutos (array) { 

array.forEach(product => {

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
    

const ofertaButton = $('.form-ofert');

ofertaButton.on ('submit', function (event){
    event.preventDefault()
    const oferta = event.target[0].value;
    console.log(oferta)
    const precio = event.target[2].value;
    console.log(precio)
    const id = event.target[1].value;
   
    if (oferta >= precio) {
        console.log("oferta correcta")
       
            let mensajeOferta = $(`#resultado-${id}`);
            
                mensajeOferta.prepend(`
        <p class="oferta"> 
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

   
}

let carrito = []


let carritoStorage = JSON.parse(localStorage.getItem('carrito'))

if (carritoStorage) {
    carrito = carritoStorage
    productosSeleccionados ()

}

function agregarCarrito (id) {
    
    const productoElegido = productos.find( el => el.id == id) 

     if (productoElegido) {
        carrito.push(productoElegido)
     }

    localStorage.setItem('carrito', JSON.stringify(carrito))
     productosSeleccionados ()
 
}

const search = document.getElementById("boton-Busqueda")

    search.addEventListener("click", ( event ) => {
        event.preventDefault() 
        console.log("click")
        const busqueda = $('#buscador').val()
        console.log(busqueda)
        const product = productos.filter( el => el.nombre == busqueda) 
            if (!product ) {
                throw new Error(`No existe ${nombre}`)
    }
       mostrarProdcutos (product)
       console.log(product)
       

    })


function eliminarPorducto (id) {
    const productoEliminar = carrito.find (el =>el.id==id)
    const indice = carrito.indexOf(productoEliminar)
        
    carrito.splice(indice, 1 )
    console.log(carrito)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    productosSeleccionados () 

}

function productosSeleccionados () {
    const contenedorCarrito = document.getElementById("carrito-contenedor")
    const contador = document.getElementById("contadorCarrito")
    const precioTotal = document.getElementById("precioTotal")
   
    contenedorCarrito.innerHTML=""

    carrito.forEach((product) => {
        contenedorCarrito.innerHTML += `
        <div class="productoEnCarrito">
        <p>${product.nombre}</p>
        <p>Precio: $ ${product.precio}</p>
        <button onclick=eliminarPorducto(${product.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    </div>`
    })

    contador.innerText = carrito.length

    precioTotal.innerText =  carrito.reduce ((acc, el) => acc += el.precio, 0 )
    
}



