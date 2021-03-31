console.log ("** Simulador Interctivo **")


function saberproducto () { 
    let producto = prompt ("Ingrese producto1, producto2 o producto3").toLowerCase()
   return producto
}


function precioproducto () { 

let producto = saberproducto ()


switch (producto) {
    case "producto1" :
            let precio = 500
                    precio = parseInt(precio)
                        console.log (precio)
                            console.log(typeof precio)
            break
    case "producto2":
            let precio2 = 600
                    precio2 = parseInt(precio2)
                        console.log (precio2)
                            console.log(typeof precio2)
            break
    case "producto3":
            let precio3 = 700
                    precio3 = parseInt(precio3)
                        console.log (precio3)
                            console.log(typeof precio3)
            break
    default: // esto es sino se da ningun caso
        console.error("ingreso mal nombre prodcuto"); 
            break
}
  
   
}

precioproducto ()

// como recupero valor elegido para volver a usar ? 






let oferta = prompt ("ingerese su oferta")
        oferta = parseInt (oferta)
   
 /*      

function ganancia () {
    let gananciaproducto = oferta - precio1;

            console.log(`La ganancia de la venta es ${gananciaproducto}`);

}
*/
