
const proximo = document.querySelector('.button.btn-next');
const anterior = document.querySelector('.button.btn-prev');
let pokemonId = 1;

proximo.addEventListener('click', function () {
    pokemonId++;
    api(pokemonId);
});

anterior.addEventListener('click', function () {
    if (pokemonId > 1) {
        pokemonId--;
        api(pokemonId);
    }
});

const api = async function(nome) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        const result = await data.json()

        const img = document.querySelector('.pokemon__image')
        img.setAttribute('src', result.sprites.front_shiny)

        const pokedata = document.querySelector('.pokemon__data')
      
        pokedata.innerHTML = ''
        
        const span = document.createElement('span')
        span.setAttribute('class', 'pokemon__number')
        span.innerHTML = result.id + "-"
        pokedata.appendChild(span)

        const spanone = document.createElement('span')
        spanone.setAttribute('class', 'pokemon__name')
        spanone.innerHTML = result.name
        pokedata.appendChild(spanone)

        console.log(result)
    } catch (error) {
        console.error(error)
    }
}



document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault()
    var inputValue = document.querySelector('.input__search').value
    api(inputValue)
})
