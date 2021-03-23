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

