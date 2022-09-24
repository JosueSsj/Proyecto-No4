const pokemonContainer = document.querySelector(".pokemon-Container")

function fetchpokemon(id)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>res.json())
    .then(data =>  {
        crearPokemon(data);
    })
}

function random(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

let n1 = random(1,807)
const n2 = n1+5
function fetchpokemons(number)
{
    for (let i = n1;i <=number;i++){
        fetchpokemon(i);
    }
}



function crearPokemon(pokemon)
{
    const card = document.createElement(`div`);
    card.classList.add("pokemon-block");

    
    const spriteContainer = document.createElement(`div`);
    spriteContainer.classList.add(`img-container`);

    const sprite = document.createElement(`img`);
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement(`p`);
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement(`p`);
    name.classList.add(`name`);
    name.textContent = pokemon.name;

    card.appendChild(name)
    card.appendChild(spriteContainer)
    card.appendChild(number)
    
    pokemonContainer.appendChild(card);

}

fetchpokemons(n2);