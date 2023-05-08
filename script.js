// Un restaurante te ah pedido que escribas una expresion condicional
// en la que verifique si una persona tiene edad para comprar una cerveza.
// como lo harias?

let edad = prompt("Digita tu edad por favor");

if(Number (edad)==edad){
 
    if(edad>18){
        alert("Edad verificada por favor pida la cerveza que desee al bartender");
    }

    else{
        document.write('Aun no eres mayor de edad');
    }
}

else{
    alert("Esa no es una edad valida")
}
