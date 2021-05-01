console.log("---- Desafío: Crear un algoritmo JS simple ----")

    let nombre = prompt ("ingrese su nombre");
    let apellido = prompt ("ingrese su apellido");
            console.log(`Bienvenido a OfertaGarafe ${nombre} ${apellido}`) // template String


    const precio1 = 500;
    let oferta = prompt ("ingrese su oferta del producto");
        oferta = parseInt(oferta);

    let ganancia = oferta - precio1;

            console.log(`La ganancia de la venta es ${ganancia}`);

    let seleccion1 = prompt ("Ingrese si busca cámaras analógicas o manuales");
 
    let seleccion2 = prompt ("Seleccione ingresando la marca que busca");

        alert(`${nombre} ${apellido} hace click en Aceptar y te mostraremos las cámaras ${seleccion1} de la marca ${seleccion2} que tenemos en stock`);
        

console.log("---- Desafío: crear un algoritmo con un condicional ----")



if (oferta < precio1) { 
    alert (` ${nombre} ${apellido} su oferta es muy baja, pruebe otra vez.`)

        } else if (oferta === precio1) { 
                 alert (` ${nombre} ${apellido} esta es tu oferta final ?`)

                    } else {
                        alert ( `${nombre} ${apellido} el producto es tuyo !!!. Agregalo al carrito`) 
}

if (seleccion1 === "analógicas") {
    console.log (` ${nombre} ${apellido} es un nostálgico`)
        } else if (seleccion1 === "manuales") {
            console.log (` ${nombre} ${apellido} le gusta la tecnología`)
                } else  {
                    alert ("Escriba una opción correctamente") // se ve último. 

}

let pago = prompt ("ingrese su modo de pago: efectivo o tarjeta");

switch (pago) {
    case "efectivo":
        console.log ("Eligio pagar con efectivo")
          break;
    case "tarjeta":
        console.log ("eligio pagar con tarjeta")
            break;
    default:  // = else   
        console.log("No sabe con que modo pagar")   
            break;
}





 
 