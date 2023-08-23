//endpoint https://rickandmortyapi.com/api/character

const idPair = async() => {
    let characters = [];
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const json = await response.json()
    characters = json.results
    const id = characters.filter(character => character.id % 2 === 0)

    console.log("Ejercicio 3 - Punto 1\n")
    console.log(id)

    id.forEach(character => {
        if(character.type === ""){
            character.type = "Programación Móvil"
        }
    })

    console.log("\nEjercicio 3 - Punto 2\n")
    console.log(id)

    const resultado = id.map(character => {
        return {
            personaje: character.name,
            episodios: character.episode.length,
            masDeCincoEpisodios: character.episode.length > 5 ? "Si" : "No",
        }
    })

    console.log("\nEjercicio 3 - Punto 3\n")
    console.log(resultado)
} 

idPair()