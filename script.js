//DEFINING GLOBAL VARIABLES
let currentPokemon;
let allPokemons = [];
let pokemonContainer = getElement('pokemon-container');
let cardContainer = getElement('card-container');
let pokemonNames = [];
let currentOpenedPokemon;
let cardOpened = false;


//FETCHING POKEMON DATA FROM API
async function loadAllPokemons() {
    pokemonContainer.innerHTML = '';
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderSmallPokemonCards(i);
    }
    console.log ('Loaded all pokemons successfully');
}


//MAIN FUNCTIONALITY
function renderSmallPokemonCards(i)  {
    pokemonContainer.innerHTML += generatePokemonCardSmallHTML(i);
    let lengthOfTypes = currentPokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateSecondTypeSmallHTML();
    }
    paintSmallCards(i);
}


function openCard(i){
    currentOpenedPokemon = i ;
    cardOpened = true;
    getElement('card-container').classList.remove('d-none');
    getElement('overlay').classList.remove('d-none');
    getElement('body').classList.add('oflow-y-hid');
    getElement('body').classList.remove('oflow-y-unset');
    renderDetailCard(i);
}


function renderDetailCard(i) {
    let pokemon = allPokemons[i-1];
    cardContainer.innerHTML = generateDetailCardHTML(i, pokemon);
    let lengthOfTypes = pokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-${i}`).innerHTML += generateSecondTypeHTML(pokemon);
    }
    paintDetailCard(i, pokemon);
}


//SEARCH FUNCTION 
function filterPokemons() {
    let searchString = getElement('searchbar').value;
    searchString = searchString.toLowerCase();
    pokemonContainer.innerHTML = "";
    for (let i = 0; i < 152; i++) {
        let pokemonName = allPokemons[i]['name'];
        if (pokemonName.toLowerCase().includes(searchString)){
            renderFilteredCardsSmall(i);
        } 
    }
}


function renderFilteredCardsSmall(i)  {
    let pokemon = allPokemons[i];
    pokemonContainer.innerHTML += generateFilteredCardSmallHTML(i,pokemon);
    let lengthOfTypes = pokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateTypeFilteredHTML(pokemon);
    }
    paintFilteredSmallCards(i);
}


//
function nextCard(i){
    if (i == 151) {
        openCard(1);
    } else {
        openCard(i+1);
    }
}

function previousCard(i) {
    if (i == 1) {
        openCard(151);
    } else {
        openCard(i-1);
    }
}


function closeCard(){
    getElement('card-container').classList.add('d-none');
    getElement('overlay').classList.add('d-none');
    getElement('body').classList.add ('oflow-y-unset');
    getElement('body').classList.remove ('oflow-y-hidden');
    cardOpened = false;
}


function openSearch() {
    getElement('search-icon').classList.add('d-none');
    getElement('close-icon').classList.remove('d-none');
}


function closeSearch() {
    getElement('searchbar').value = '';
    getElement('search-icon').classList.remove('d-none');
    getElement('close-icon').classList.add('d-none');
    filterPokemons();
}


//HELP FUNCTIONS 
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}


function getElement(id) {
    return document.getElementById(id);
}


function changeBgtoBright() {
    getElement('body').style = "background-color: #fff8eb !important;"
    getElement('bright-btn').classList.add('d-none');
    getElement('dark-btn').classList.remove('d-none');
}


function changeBgtoDark() {
    getElement('body').style = "background-color: #212529 !important;"
    getElement('bright-btn').classList.remove('d-none');
    getElement('dark-btn').classList.add('d-none');
}

function scrollToTop() {
    window.scrollTo({ top: 16, behavior: 'smooth' });
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

function paintFilteredSmallCards(i){
    let type = allPokemons[i]['types'][0]['type']['name'];
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


function paintDetailCard(i,pokemon){
    let type = pokemon['types'][0]['type']['name'];
    if (type == 'grass') {
        getElement(`card-${i}`).classList.add('bg-grass');
    }
    if (type == 'fire') {
        getElement(`card-${i}`).classList.add('bg-fire');
    }
    if (type == 'water') {
        getElement(`card-${i}`).classList.add('bg-water');
    }
    if (type == 'bug') {
        getElement(`card-${i}`).classList.add('bg-bug');
    }
    if (type == 'normal') {
        getElement(`card-${i}`).classList.add('bg-normal');
    }
    if (type == 'poison') {
        getElement(`card-${i}`).classList.add('bg-poison');
    }
    if (type == 'electric') {
        getElement(`card-${i}`).classList.add('bg-electric');
    }
    if (type == 'ground') {
        getElement(`card-${i}`).classList.add('bg-ground');
    }
    if (type == 'fairy') {
        getElement(`card-${i}`).classList.add('bg-fairy');
    }
    if (type == 'fighting') {
        getElement(`card-${i}`).classList.add('bg-fighting');
    }
    if (type == 'psychic') {
        getElement(`card-${i}`).classList.add('bg-psychic');
    }
    if (type == 'rock') {
        getElement(`card-${i}`).classList.add('bg-rock');
    }
    if (type == 'ghost') {
        getElement(`card-${i}`).classList.add('bg-ghost');
    }
    if (type == 'ice') {
        getElement(`card-${i}`).classList.add('bg-ice');
    }
    if (type == 'dragon') {
        getElement(`card-${i}`).classList.add('bg-dragon');
    }
}

// EVENT LISTENERS

document.addEventListener('keydown', function(event){      
	if(event.key === "Escape"){
		closeCard();
	}
}); 

document.addEventListener('keydown', function(event){      
    if(event.key === "ArrowRight" && cardOpened == true){
        nextCard(currentOpenedPokemon);
    }
}); 
document.addEventListener('keydown', function(event){      
    if(event.key === "ArrowLeft" && cardOpened == true){
        previousCard(currentOpenedPokemon);
    }
});


let searchbar = getElement('searchbar');

searchbar.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        openCard();
    }
})
