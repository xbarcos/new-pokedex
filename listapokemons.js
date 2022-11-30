function getPokemons() {
    return [
        {
            nome: 'Pikachu',
            tipo: 'Electric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            nome: 'Squirtle',
            tipo: 'Water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        },
        {
            nome: 'Bulbasaur',
            tipo: 'Grass',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        {
            nome: 'Charmander',
            tipo: 'Fire',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        },
        {
            nome: 'Meowth',
            tipo: 'Normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
        },
        {
            nome: 'Rattata',
            tipo: 'Normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
        },
        {
            nome: 'Jigglypuff',
            tipo: 'Normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
        }
    ]
}

const arrayPokemons = getPokemons();
const container = document.getElementById('container');
const cardTemplate = document.getElementById('cardTemplate');
const selectType = document.getElementById('inputSelect')
function cleanPokemonCards() {
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}
function getPokemonCard() {
    cleanPokemonCards();
    for (let index = 0; index < arrayPokemons.length; index++) {
        let pokemon = arrayPokemons[index];
        let card = cardTemplate.content.cloneNode(true).getElementById('card').outerHTML;
        if (selectType.value == 'Todos') {
            card = card.replace(/{{name}}/g, pokemon.nome);
            card = card.replace(/{{type}}/g, pokemon.tipo);
            card = card.replace(/{{image}}/g, pokemon.imagem);
            container.innerHTML += card;
        }
        if (selectType.value == pokemon.tipo) {
            card = card.replace(/{{name}}/g, pokemon.nome);
            card = card.replace(/{{type}}/g, pokemon.tipo);
            card = card.replace(/{{image}}/g, pokemon.imagem);
            container.innerHTML += card;
        }
    }
}
