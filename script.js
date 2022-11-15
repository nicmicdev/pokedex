//DEFINING GLOBAL VARIABLES
let currentPokemon;
let allPokemons = [];
let pokemonNames = [];
let currentOpenedPokemon;
let cardOpened = false;
let loading;
let pokemonContainer = getElement('pokemon-container');
let cardContainer = getElement('card-container');


//FETCHING POKEMON DATA FROM API
async function loadAllPokemons() {
    pokemonContainer.innerHTML = '';
    for (let i = 1; i < 152; i++) {
        getElement('inputfield').classList.add('no-click');
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemons.push(currentPokemon);
        renderSmallPokemonCards(i);
    }
    getElement('inputfield').classList.remove('no-click');
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


function renderDetailCard(i) {
    let pokemon = allPokemons[i-1];
    cardContainer.innerHTML = generateDetailCardHTML(i, pokemon);
    let lengthOfTypes = pokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-${i}`).innerHTML += generateSecondTypeHTML(pokemon);
    }
    paintDetailCard(i, pokemon);
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


//SEARCH FUNCTION 
function filterPokemons() {
    let searchString = getElement('searchbar').value;
    searchString = searchString.toLowerCase();
    pokemonContainer.innerHTML = "";
    for (let i = 0; i < 151; i++) {
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


//TOGGLE SEARCHBAR
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


//MODE SWITCH (DARK AND LIGHT)
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


//HELP FUNCTIONS 
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}


function getElement(id) {
    return document.getElementById(id);
}


function scrollToTop() {
    window.scrollTo({ top: 16, behavior: 'smooth' });
}


function paintSmallCards(i){
    let type = currentPokemon['types'][0]['type']['name'];
    checkTypesSmall(type,i)    
}


function paintFilteredSmallCards(i){
    let type = allPokemons[i]['types'][0]['type']['name'];
    checkTypesSmall(type,i);
}


function checkTypesSmall(type,i) {
    checkSmallType1To4(type,i);
    checkSmallType5To8(type,i);
    checkSmallType9To12(type,i);
    checkSmallType13To15(type,i);
}


function paintDetailCard(i){
    let type = allPokemons[i-1]['types'][0]['type']['name'];
    checkDetailType1to4(type,i);
    checkDetailType5to8(type,i);
    checkDetailType9to12(type,i);
    checkDetailType12to15(type,i);
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