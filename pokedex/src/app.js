const fetchPokemon = () => {

    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemonPrmoises = [];

    for (let i = 1; i <= 150; i++) {
        pokemonPrmoises.push(fetch(getPokemonUrl(i)).then(response => response.json())) 
    }


    Promise.all(pokemonPrmoises) //return a promise after resolve all the pokemonPrmoises
        .then( pokemons => {

            const lisPokemons = pokemons.reduce((acumulator, pokemon) => {
               const types =  pokemon.types.map(typeInfo => typeInfo.type.name);
                
                acumulator += `
                <li class="card">
                <img class="card-image ${types[0]}" alt="${pokemon.name}" src="https://pokers.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
                <h2 class="card-title>${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtitle>${types.join(' | ')}</p>
                </li>`
                return acumulator;
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]');
            ul.innerHTML = lisPokemons;
        })

}

fetchPokemon();