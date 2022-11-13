function generatePokemonCardSmallHTML(i) {
    return `
        <div class="pokemon-card-s" id="card-s-${i}" onclick="openCard(${i})">
            <h3 class="card-s-heading">${capitalize(currentPokemon['name'])}</h3>
            <h5 class="card-s-id">#${i}</h5>
            <span class="card-s-type">${currentPokemon['types'][0]['type']['name']}</span>
            <img class="card-s-img" src= ${currentPokemon['sprites']['other']['official-artwork']['front_default']}>
        </div>
`
}

function generateFilteredCardSmallHTML(i,pokemon) {
    return `
        <div class="pokemon-card-s" id="card-s-${i}" onclick="openCard(${i+1})">
            <h3 class="card-s-heading">${capitalize(pokemon['name'])}</h3>
            <h5 class="card-s-id">#${i+1}</h5>
            <span class="card-s-type">${pokemon['types'][0]['type']['name']}</span>
            <img class="card-s-img" src= ${pokemon['sprites']['other']['official-artwork']['front_default']}>
        </div>
`
}


function generateSecondTypeSmallHTML() {
    return ` <span class="card-s-type-2">${currentPokemon['types'][1]['type']['name']}</span> `
}


function generateTypeFilteredHTML(pokemon) {
    return ` <span class="card-s-type-2">${pokemon['types'][1]['type']['name']}</span> `
}


function generateSecondTypeHTML(pokemon) {
    return ` <span class="card-type-2">${pokemon['types'][1]['type']['name']}</span> `
}


function generateDetailCardHTML(i,pokemon) {
    return `
    <div class="card-top" id="card-${i}">
        <h2 class="card-heading">${capitalize(pokemon['name'])}</h2>
        <h2 class="card-id">#${i}</h2>
        <h2 class="card-close" onclick="closeCard()" title="Close (ESC)">x</h2>
        <h2 class="card-arrow-left" title="Previous Pokémon" onclick="previousCard(${i})"><</h2>
        <h2 class="card-arrow-right" title="Next Pokémon" onclick="nextCard(${i})">></h2>
        <span class="card-type">${pokemon['types'][0]['type']['name']}</span>
        <div class="card-pic-container" >        
            <img class="card-pic" src="${pokemon['sprites']['other']['official-artwork']['front_default']}">
        </div>
        <span class="card-experience" title="The base experience gained for defeating this Pokémon.">Base Experience: <b>${pokemon['base_experience']}</b></span>
        <span class="card-weight" title="Hectogram">Weight: <b>${pokemon['weight']}</b></span>
        <span class="card-h8" title="Decimetres">Height: <b>${pokemon['height']}</b></span>
    </div>

    <div class="card-bottom">
        <h5 class="bottom-heading">Base Stats</h5>

        <div class="stats-container">
        
            <div class="stats-titles">
                <span>HP</span>
                <span>Attack</span>
                <span>Defense</span>
                <span>Special-Attack</span>
                <span>Special-Defense</span>
                <span>Speed</span>
            </div>

            <div class="stats-numbers">
                <span>${pokemon['stats'][0]['base_stat']}</span>
                <span>${pokemon['stats'][1]['base_stat']}</span>
                <span>${pokemon['stats'][2]['base_stat']}</span>
                <span>${pokemon['stats'][3]['base_stat']}</span>
                <span>${pokemon['stats'][4]['base_stat']}</span>
                <span>${pokemon['stats'][5]['base_stat']}</span>
            </div>

            <div class="stats-progress">
            
                <div class="progress" >
                    <div class="progress-bar bg-secondary" id="progress-0" style="width: ${(pokemon['stats'][0]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>

                <div class="progress" >
                    <div class="progress-bar  bg-secondary" id="progress-1" style="width: ${(pokemon['stats'][1]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>

                <div class="progress" >
                    <div class="progress-bar  bg-secondary" id="progress-2" style="width: ${(pokemon['stats'][2]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>

                <div class="progress" >
                    <div class="progress-bar  bg-secondary" id="progress-3" style="width: ${(pokemon['stats'][3]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>

                <div class="progress" >
                    <div class="progress-bar bg-secondary" id="progress-4" style="width: ${(pokemon['stats'][4]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>

                <div class="progress" >
                    <div class="progress-bar bg-secondary" id="progress-5" style="width: ${(pokemon['stats'][5]['base_stat'])*0.649351}%;" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="154"></div>
                </div>
            
            </div>

    </div>
`
}

