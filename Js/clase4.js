
class TarjetaProducto {
    constructor (nombre, precio, id, categoría, stock, oferta) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.categoría = categoría  // .toLowerCase() -- no me lo toma .. xq ??
        this.stock = stock
        this.oferta = oferta
    }
}


// Array de productos
const carrito =  []

// validacion - no me sale. 
/*
if (!carrito) {          
       carrito = []
        
}
*/

// Retorna los productos agregados
let productosDelCarrito = () => {
    return carrito
}

// Agregar productos - BOTON 
let AgregarProducto = (producto) => {
    carrito.push(producto)

}

/*
// Mis productos son 

        // const product1 = new TarjetaProducto ("Mini componente", 800, 1, "audio",10, 100)
const product2 = new TarjetaProducto ("Canon D 60x", 1000, 2, "fotografia",20, 200) 
const product3 = new TarjetaProducto ("El conde de Montecristo", 700, 3, "literatura",5, 300)

// CLICK BOTON AGREGAR

        //AgergarProducto(product1)
AgergarProducto(product2)
AgergarProducto(product3)

let productosSeleccionados =  productosDelCarrito()

//almacenados los productos del carritos. 
localStorage.setItem("carrito", JSON.stringify(productosSeleccionados) ) 
JSON.parse(localStorage.getItem("carrito"))

//productos del carrito
console.log(productosDelCarrito())

*/


//recupero estructura hmtl del producto
const tarjetaPrducto = document.getElementById("card1")
let ofertaIngresada = document.getElementById("input-oferta") 
let mensajeOferta = document.getElementById("resultado") 

console.log (tarjetaPrducto)
console.log (ofertaIngresada)


// mo me funciono en la tarjeta que tengo
  // creo que es porque no esta adentro de un form  

tarjetaPrducto.addEventListener("submit", (event) => { 
    // previene actualizacion de la pagima
    event.preventDefault()
    console.log ("se apreto el boton")
   

// recupero oferta del User
let ofertaUser = parseInt(ofertaIngresada.value)
console.log(ofertaUser)

//creo producto con la ofertaUser
const product1 = new TarjetaProducto ("Mini componente", 800, 1, "audio",10, ofertaUser)

// se supone que agrega al array Carrito
AgregarProducto(product1)

// muestro el producto con la ofertaUser
console.log( product1)

//limpia lo escrito
//ofertaIngresada.value=""

let itemOferta = document.createElement('p')
itemOferta.textContent = `La oferta ingresada es  ${ofertaUser} `

mensajeOferta.appendChild(itemOferta)

})

