function combinaciones(array) {
    let resultado = [[]];
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        const tamres = resultado.length;
        for (let j = 0; j < tamres; j++) {
            const actual = resultado[j];
            resultado.push(actual.concat(elemento));
        }
    }
    return resultado;
}

console.log(combinaciones([1, 2, 3, 4, 5]));
