$(document).ready(function(){

    //Configuracion para utilizar el script
    const config = {
        'selectorDOM': '.content', // La clase o la id del elemento oculto
        'addClassDOM': 'content-active' // La clase que se añadira en el dom
    }
    // Desestructuración del objeto config
    const {selectorDOM,addClassDOM} = config;

    function effectDown(selector) {
    // Compribacion para saber si estamos sobre un elemento oculto
        $(selector).each(function(){ 
            if($(document).scrollTop() >= calcular($(this).position().top)){
                $(this).addClass(addClassDOM);
            }
        });
        // Cuando se mueva el scroll en Y se ejecuta la funcion
        $(document).scroll(function () { 
            // Buscar todos los elementos uno a uno para comprobar su posicion actual
            $(selector).each(function(){
                //Posicion actual del elemento guardada en una variable
                let position =  $(this).position();
                // Si la posicion del scroll es mayor o igual a la posicion del elemento
                if($(document).scrollTop() >= calcular(position.top)){
                    // Si todo es correcto añade una clase al selector
                    $(this).addClass(addClassDOM);
                }
            });  
        });
        // Funcion para restar cierta cantidad 
        function calcular(elemento){
            // Devuelve la cantidad que contenga el elemento menos 900 para que antes de llegar completamente al elemento se le añada una clase
            return elemento - 900;
        }
     }
    //  Se ejecuta la funcion effectDown con la clase del dom effectDown('.clase')
    effectDown(selectorDOM);
});