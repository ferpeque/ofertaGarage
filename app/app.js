
        //function oferta () {
        //    console.log("ingrese su oferta")
        //}


// Recupero estructura hmtl del producto
let contenedorTarjeta = document.getElementById("container-product")
    //console.log(contenedorTarjeta)

// forEach recorre todo el Array
productos.forEach(product => {
    console.log (product)

//Creo tarjeta producto.
//Por cada product me crea un html 
let div = document.createElement("div")
div.classList.add("card")
console.log(div)

div.innerHTML = `

    <img src=${product.img} alt="" class="card__img">
    <h4 class="card__title">${product.nombre}</h4>
    <p class="card__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quaerat ut
    debitis. Animi reprehenderit quis similique expedita! Suscipit, deleniti eos!</p>
    <input type="text" id="input-oferta" name="Oferta1" placeholder="Ingrese su Oferta" id="Oferta1" class="imput__textera">
    <a href="#" id="card1" class="card__btn">Leer más</a>
    <div id="resultado"

`
contenedorTarjeta.appendChild(div)
})   

const tarjetaProducto = document.getElementById("card1")
let ofertaIngresada = document.getElementById("input-oferta") 
let mensajeOferta = document.getElementById("resultado") 

//console.log (tarjetaProducto)
// console.log (ofertaIngresada)

