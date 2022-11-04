// let currentPokemon;


// async function loadPokemon() {
//     let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
//     let response = await fetch(url);
//     currentPokemon = await response.json();

//     console.log ('Loaded pokemon', currentPokemon);

//     renderPokemonInfo();

// }

// function renderPokemonInfo() {
//     document.getElementById('pokemon-name').innerHTML = currentPokemon ['name'];
//     document.getElementById('pokemon-img').src = currentPokemon['sprites']['front_shiny'];
// }



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