console.log("Array&Objects")


// creo una clase/objeto producto 

class TarjetaProducto {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}


const carrito = []

// va a recibir el array
let agregarProductoAlCarrito = () => {
    return carrito
}



// va a crear los objetos que se van a agregar al carrito
let crearProducto = (producto) => {
    carrito.push(producto)

}

const producto1 = new TarjetaProducto("Mini componente", 800, 1)
const producto2 = new TarjetaProducto("Canon D 60x", 1000, 1)

crearProducto (producto1)
crearProducto (producto2)
console.log(agregarProductoAlCarrito())

// ****************************** nuevo objeto ************************

class TarjetaProducto2 {
    constructor (nombre, precio, id, categoría, stock) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.categoría = categoría  // .toLowerCase() -- no me lo toma .. xq ??
        this.stock = stock
    }
}


const buscador = []

// va a recibir el array
let listaProductos = () => {
    return buscador
}
let crearBusqueda = (producto) => {
    buscador.push(producto)

}

// mis productos a la venta 

const product1 = new TarjetaProducto2 ("Mini componente", 800, 1, "audio",10)
const product2 = new TarjetaProducto2 ("Canon D 60x", 1000, 2, "fotografia",20) 
const product3 = new TarjetaProducto2 ("El conde de Montecristo", 700, 3, "literatura",5)



const findOne = (categorías)  => {

    const busquedaActiva = buscador.find ((TarjetaProducto2) => {
       if (TarjetaProducto2.categoría ===  categorías) {
                          return TarjetaProducto2 } 
    })


    return busquedaActiva 
}

/* 
ERROR Y CORTA LA BUSQUEDA. 

    if (!busquedaActiva) {
        throw new Error ("No existe  ${categorías}")
    }
*/

// esto agrega a la lista
crearBusqueda (product1)
crearBusqueda (product2)
crearBusqueda (product3)

console.log(listaProductos())


function busqueda () {
    let  categoría = prompt("Ingresa una categoría que desea buscar (audio, fotografia o literatura")
        return  categoría

}

let categorías = busqueda()

console.log(categorías)

console.log(findOne(categorías))



let precio = 1 

function agregarProducto () {

    // en teoria ya eligio un producto y quiere agregar más del mismo item. 
        // por ahora me agrega 5 productos porque la variable precio aumenta. 

for (precio; precio < product1.stock ; precio++) {
    let ingresaProducto = prompt ("Desea agregar más cantidad")
    if  (ingresaProducto === "si") {
        alert ("El precio es " + precio*2)
            console.log(precio)
            if (precio === 5) {
                alert ("No hay más stock")
                break;
            }
    }
        else if (ingresaProducto === "no") { 
            break;
           
        }
        else {
            console.error("el usuario no eligio")

        }

} 

}

agregarProducto () 

console.log(product1.stock)

// update -- actualiza .. puedo actualizar la cant de algo  
// o cambiar algun tipo de información. 
// ver para qué lo puedo utilizar. 

update = (categorías, stock) => {
    const TarjetaProducto2 = findOne(categorías)
   
    if (TarjetaProducto2) {
        TarjetaProducto2.stock = stock

    }
}

 // update ("audio", 20)



// remove que seria como eliminar el producto seleccionado
// para elimnar necesto conocer el indice
// no funca .. por qué ? (1:40)

const remove = (nombre) => {
    const index = listaProductos.findIndex ( TarjetaProducto2 => TarjetaProducto2.nombre === nombre )
// si no encuentas uno me devuelve -1 -- no existe
    if (index >= o) {
        listaProductos.splice(index, 1)
    }
}

remove("Mini componente")

// console.log(getAll()) -- funiciona igual ? 
console.log(listaProductos())   

/*
class / getAll / create / findOne / update / remove


*/
