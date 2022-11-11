//DEFINING GLOBAL VARIABLES
let currentPokemon;
let allPokemons = [];
let pokemonContainer = getElement('pokemon-container');
let cardContainer = getElement('card-container');
let pokemonNames = [];


// let searchbar = getElement('searchbar');

// searchbar.addEventListener('keyup', (e) => {
//     let searchString = e.target.value;
//     let filteredPokemons = allPokemons.filter( pokemon => {
//         return pokemon.name.includes(searchString);
//     });
//     console.log(filteredPokemons);

// })


function searchPokemons() {
    let searchString = getElement('searchbar').value;
    searchString = searchString.toLowerCase();
    pokemonContainer.innerHTML = "";
    for (let i = 0; i < 152; i++) {
        let name = allPokemons[i]['name'];
        if (name.toLowerCase().includes(searchString)){
            console.log(name)
            renderFilteredCardsSmall(i);
        }
    }
}

function renderFilteredCardsSmall(i)  {
    let pokemon = allPokemons[i];
    pokemonContainer.innerHTML += generateFilteredCardSmallHTML(i,pokemon);
    let lengthOfTypes = currentPokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateSecondTypeSmallHTML();
    }
    paintFilteredSmallCards(i);
}





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



// function filterPokemons() {
//     let inputvalue = getElement('searchbar').value;
//     inputvalue = inputvalue.toLowerCase();
//     console.log (inputvalue);

//     pokemonContainer.innerHTML = "";

//     for (let i = 0; i < 152; i++) {
//         const pokemon = allPokemons[i]['name'];
//         if (pokemon.includes(inputvalue)) {
//             pokemonContainer.innerHTML += generatePokemonCardSmallHTML(i);
//         }
//     }
// }





function renderSmallPokemonCards(i)  {
    pokemonContainer.innerHTML += generatePokemonCardSmallHTML(i);
    let lengthOfTypes = currentPokemon['types'].length; 
    if (lengthOfTypes == 2){
        getElement(`card-s-${i}`).innerHTML += generateSecondTypeSmallHTML();
    }
    paintSmallCards(i);
}




function openCard(i){
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


function closeCard(){
    getElement('card-container').classList.add('d-none');
    getElement('overlay').classList.add('d-none');
    getElement('body').classList.add ('oflow-y-unset');
    getElement('body').classList.remove ('oflow-y-hidden');
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
    getElement('searchbar').value = '';
    getElement('search-icon').classList.remove('d-none');
    getElement('close-icon').classList.add('d-none');
    searchPokemons();
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



// function paintProgressBar(pokemon) {
//     for (let i = 0; i < 6; i++) {
//         let statValue = (pokemon['stats'][i]['base_stat'])*0.649351;
//         if (statValue < 51.33) {
//             getElement(`progress${i}`).classList.add('bg-danger');
//         } else if (statValue > 51.33 && statValue < 102.66) {
//             getElement(`progress${i}`).classList.add('bg-warning');
//         } else {
//             getElement(`progress${i}`).classList.add('bg-success');
//         }
//     }
// }

