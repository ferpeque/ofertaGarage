
document.getElementById("buscador").addEventListener("input", e => {
   const busqueda =  e.target.value.replace(" ", "%20");
   $.get({
       url: `https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`,
       data: "json",
       datatype: "json",
       success: mostrarBusqueda
   })
})

function mostrarBusqueda (busqueda) {
    const { results } = busqueda 
    const contenedor = document.getElementById("products-container");
    contenedor.innerHTML = '';
    for(let i = 0; i < 2; i++){
        const { thumbnail, price, title } = results[i];
        const element = document.createElement("div");
        element.classList.add("product");
        element.innerHTML = `
                <img src="${thumbnail}" alt="icono">
                <div class="product-info">
                    <h3>${title}</h3>
                    <p>$${price}</p>
                </div>
                <button onclick='agregarCarrito(${price}, "${title}")' class="btn-agregar">Comparar</button>
        `;

        contenedor.appendChild(element);
       
        console.log(contenedor.appendChild(element))
    }
}


