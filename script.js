//DEFINING GLOBAL VARIABLES
let currentPokemon;
let allPokemons = [];
let pokemonContainer = getElement('pokemon-container');
let cardContainer = getElement('card-container');
let lengthOfTypes = currentPokemon['types'].length; 


//FETCHING POKEMON DATA FROM API
async function loadAllPokemons() {
    pokemonContainer.innerHTML = '';
    for (let i = 1; i < 152; i++) {
        const pokemon = allPokemons[i];
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderSmallPokemonCards(i);
    }
    console.log ('Loaded all pokemons successfully');
}


function renderSmallPokemonCards(i)  {
    pokemonContainer.innerHTML += generatePokemonCardSmallHTML(i);
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateSecondTypeSmallHTML();
    }
    paintSmallCards(i);
}

function renderDetailCards(i) {


}


function openCard(){
    document.getElementById('card-container').classList.remove('d-none');
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('body').classList.add('oflow-y-hid');
    document.getElementById('body').classList.remove('oflow-y-unset');
}

function closeCard(){
    document.getElementById('card-container').classList.add('d-none');
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('body').classList.add ('oflow-y-unset');
    document.getElementById('body').classList.remove ('oflow-y-hidden');
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

// function openCard(i) {
//     console.log('Card', i, 'is working.')
// }


function changeBgtoBright() {
    getElement('body').style = "background-color: floralwhite !important;"
    getElement('bright-btn').classList.add('d-none');
    getElement('dark-btn').classList.remove('d-none');
}


function changeBgtoDark() {
    getElement('body').style = "background-color: #212529 !important;"
    getElement('bright-btn').classList.remove('d-none');
    getElement('dark-btn').classList.add('d-none');
}

function paintSmallCards(i){
    let type = currentPokemon['types'][0]['type']['name'];
    if (type == 'grass') {
        getElement(`card-s-${i}`).classList.add('bg-grass');
    }
    if (type == 'fire') {
        getElement(`card-s-${i}`).classList.add('bg-fire');
    }
    if (type == 'water') {
        getElement(`card-s-${i}`).classList.add('bg-water');
    }
    if (type == 'bug') {
        getElement(`card-s-${i}`).classList.add('bg-bug');
    }
    if (type == 'normal') {
        getElement(`card-s-${i}`).classList.add('bg-normal');
    }
    if (type == 'poison') {
        getElement(`card-s-${i}`).classList.add('bg-poison');
    }
    if (type == 'electric') {
        getElement(`card-s-${i}`).classList.add('bg-electric');
    }
    if (type == 'ground') {
        getElement(`card-s-${i}`).classList.add('bg-ground');
    }
    if (type == 'fairy') {
        getElement(`card-s-${i}`).classList.add('bg-fairy');
    }
    if (type == 'fighting') {
        getElement(`card-s-${i}`).classList.add('bg-fighting');
    }
    if (type == 'psychic') {
        getElement(`card-s-${i}`).classList.add('bg-psychic');
    }
    if (type == 'rock') {
        getElement(`card-s-${i}`).classList.add('bg-rock');
    }
    if (type == 'ghost') {
        getElement(`card-s-${i}`).classList.add('bg-ghost');
    }
    if (type == 'ice') {
        getElement(`card-s-${i}`).classList.add('bg-ice');
    }
    if (type == 'dragon') {
        getElement(`card-s-${i}`).classList.add('bg-dragon');
    }
}

// EVENT LISTENER

document.addEventListener('keydown', function(event){      
	if(event.key === "Escape"){
		closeCard();
	}
}); 





//     renderPokemonInfo();

// }

// function renderPokemonInfo() {
//     document.getElementById('pokemon-name').innerHTML = currentPokemon ['name'];
//     document.getElementById('pokemon-img').src = currentPokemon['sprites']['front_shiny'];
// }