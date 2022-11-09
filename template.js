function generatePokemonCardSmallHTML(i) {
 return `
        <div class="pokemon-card-s" id="card-s-${i}">
            <h3 class="card-s-heading">${capitalize(currentPokemon['name'])}</h3>
            <h5 class="card-s-id">#${i}</h5>
            <span class="card-s-type">${currentPokemon['types'][0]['type']['name']}</span>
            <img class="card-s-img" src= ${currentPokemon['sprites']['other']['official-artwork']['front_default']}>
        </div>
`
}

function generateSecondTypeHTML(){
   return ` <span class="card-s-type-2">${currentPokemon['types'][1]['type']['name']}</span> `
}