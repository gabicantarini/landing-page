const fetchPokemon = () => {

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemonPrmoises = [];

    for (let i = 1; i <= 150; i++) {
        pokemonPrmoises.push(fetch(getPokemonUrl(i)).then(response => response.json())) 
    }


    Promise.all(pokemonPrmoises) //return a promise after resolve all the pokemonPrmoises
        .then( pokemons => {
            console.log("pokemons: ", pokemons);
        })

    /*fetch(url) //bring url from api - return promise 
        .then(response => response.json()) //return json response promise
        .then(pokemon => {
        console.log(pokemon)
    })*/
}

fetchPokemon();