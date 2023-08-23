function ejercicio1(){
    let cadena = "estaCadenaTiene6Palabras";
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === cadena[i].toUpperCase() && /\d+/.test(cadena[i]) === false){
            cadena = cadena.replace(cadena[i], "_" + cadena[i].toLowerCase());
            contador++;
        }
    }
    contador++;
    console.log("Se han encontrado " + contador + " palabras");
    console.log(cadena);
}

ejercicio1();