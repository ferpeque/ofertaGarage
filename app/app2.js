
const url = 'app/productos.json'


$.get(`${url}`), function (response, status) {
    console.log(response)
    console.log(status)
}




/*
$.ajax({
   
    success: function (responde, status) {
        
        console.log(responde)
        console.log(status)
       
    }
});

error: function (xhr, status, errorThrown) {
        console.log(xhr)
        console.log(status)
        console.log(errorThrown)
    }
*/