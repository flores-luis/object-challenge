/*
    Here I will write the program to display data 
    from the pokemon_data js file
    to index.html
*/ 

let html = '';

for ( let i = 0; i < pokemon.length; i++) {
    poke = pokemon[i];
    html += `
        <h2>${poke.name}</h2>
        <h6>${poke.type}</h6>
        <h6>${poke.species}</h6>
        <h6>${poke.ability}</h6>
        <img src="${poke.photo}" alt="${poke.type}">
    `;
}

//console.log(html); --this was used to test and view at console if code was working

document.querySelector('p').insertAdjacentHTML('beforeend',html)