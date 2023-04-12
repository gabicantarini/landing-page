const fetchPokemon = () => {

    const url = `https://pokeapi.co/api/v2/pokemon/25`;
    
    fetch(url) //bring url from api - return promise 
        .then(response => response.json()) //return json response promise
        .then(pokemon => {
        console.log(pokemon)
    })
}

fetchPokemon();