console.log("Array&Objects")


// creo una clase/objeto producto 

class tarjetaProducto {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}


const carrito = []

// va a recibir el array
let agregarProductos = () => {
    return carrito
}



// va a crear los objetos que se van a agregar al carrito
let crearProducto = (producto) => {
    carrito.push(producto)

}

const producto1 = new tarjetaProducto("Mini componente", 800, 1)
const producto2 = new tarjetaProducto("Canon D 60x", 1000, 1)

crearProducto (producto1)
crearProducto (producto2)
console.log(agregarProductos())