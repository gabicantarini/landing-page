
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => {
    return pokemons.reduce((acumulator, pokemon) => {
       const types =  pokemon.types.map(typeInfo => typeInfo.type.name);
        
        acumulator += `
        <li class="card">
        <img class="card-image ${types[0]}" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">${types.join(' | ')}</p>
        </li>`
        return acumulator;
    }, '')
}

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = pokemons;
}


const pokemonPrmoises = generatePokemonPromises();

Promise.all(pokemonPrmoises)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)
