//CHECK TYPE CONDITIONS
    //CHECK AND PAINT SMALL CARDS
    function checkSmallType1To4(type,i) {
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
    }
    
    function checkSmallType5To8(type,i) {
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
    }
    
    function checkSmallType9To12(type,i) {
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
    }
    
    function checkSmallType13To15(type,i) {
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
    
    
        //CHECK AND PAINT DETAIL VIEW
    function checkDetailType1to4(type,i) {
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
    }
    
    
    function checkDetailType5to8(type,i) {
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
    }
    
    function checkDetailType9to12(type,i) {
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
    }
    
    function checkDetailType12to15(type,i) {
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
    