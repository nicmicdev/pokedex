let currentPokemon;
let allPokemons = [];
let pokemonContainer = document.getElementById('pokemon-container');

async function loadAllPokemons() {
    
    pokemonContainer.innerHTML = '';
    for (let i = 1; i < 152; i++) {
        const pokemon = allPokemons[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderSmallPokemonCards(currentPokemon, i);
    }


    
    
    console.log ('Loaded all pokemons successfully');
}

function renderSmallPokemonCards(currentPokemon,i)  {
    let lengthOfTypes = currentPokemon['types'].length; 
    
    pokemonContainer.innerHTML += generatePokemonCardSmallHTML(i);
    
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateSecondTypeHTML();
    }
    
    paintSmallCards(i);
}




function paintSmallCards(i){
    let type = currentPokemon['types'][0]['type']['name'];
    if (type == 'grass') {
        document.getElementById(`card-s-${i}`).classList.add('bg-grass');
    }
    if (type == 'fire') {
        document.getElementById(`card-s-${i}`).classList.add('bg-fire');
    }
    if (type == 'water') {
        document.getElementById(`card-s-${i}`).classList.add('bg-water');
    }
    if (type == 'electric') {
        document.getElementById(`card-s-${i}`).classList.add('bg-electric');
    }
    if (type == 'bug') {
        document.getElementById(`card-s-${i}`).classList.add('bg-bug');
    }
    if (type == 'normal') {
        document.getElementById(`card-s-${i}`).classList.add('bg-normal');
    }
    if (type == 'poison') {
        document.getElementById(`card-s-${i}`).classList.add('bg-poison');
    }

}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}


function getElement(id) {
    return document.getElementById(id);
}


function openSearch() {
    getElement('search-icon').classList.add('d-none');
    getElement('close-icon').classList.remove('d-none');
}


function closeSearch() {
    getElement('search-icon').classList.remove('d-none');
    getElement('close-icon').classList.add('d-none');
    getElement('searchbar').value = '';
}





//     renderPokemonInfo();

// }

// function renderPokemonInfo() {
//     document.getElementById('pokemon-name').innerHTML = currentPokemon ['name'];
//     document.getElementById('pokemon-img').src = currentPokemon['sprites']['front_shiny'];
// }