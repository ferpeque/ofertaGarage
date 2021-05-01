const carritoAbrir = document.getElementById('boton-carrito');
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]


// al clickear agrega la clase para que se active 
carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.add('modal-active')
})


const carritoCerrar = document.getElementById('carritoCerrar');
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


// al clickear elimina la clase activa
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.remove('modal-active')
})



// al clickear afuera elimina la clase activa
contenedorModal.addEventListener('click', ()=>{
    contenedorModal.classList.remove('modal-active')
})

//en vez de add y remove se puede usar .toggle que agrega y elimina. 

// capturo el evento, que es lo que sucede cuando clickeo. 
    // hace que el click no se traspase a los elementos padre

modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})

