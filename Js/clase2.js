console.log ("** Simulador Interctivo **")

function obtenerOferta () {
    let oferta = prompt ("ingrese su oferta")
        oferta = parseInt(oferta)
            return oferta

}


function resultado (valor1, valor2) {
    let resultado = valor2 - valor1
        console.log(resultado)

}

function ganancia () { 
    let precio = prompt ("ingrese su producto")

    if (precio === "producto1") {
        let oferta =  obtenerOferta ()
           let precio = 500
                resultado (precio, oferta)
                
        } else if  (precio === "producto2") {
            let oferta =  obtenerOferta ()
                let precio = 800
                    resultado (precio, oferta)
            
            } else   {
                alert ("ingrese su producto seleccionado, por favor.")
}

}

 ganancia ()





let precio = 1 

function agregarProducto () {

for (precio; precio <=7; precio++) {
    let ingresaProducto = prompt ("Desea agregar más cantidad")
    if  (ingresaProducto === "si") {
        alert ("El precio es " + precio*2)
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