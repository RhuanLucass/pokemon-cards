const ul = document.querySelector("main ul");
const number = 100;
const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`;
var pokemon;
var count = 1;

connect();
function connect(){
  fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    getPokemon(data);
  })
  .catch((err) => console.log(err));
}

function getPokemon(data) {
  const pokemon = data.results;
  pokemon.forEach(element =>{
    setPokemon(element);
  })
}

function setPokemon(pokemon){
  fetch(pokemon.url)
  .then((response) => response.json())
  .then((data) => {
    insertCard(data);
    
    if(count === 1)
      select();
    if(count === number)
      getLis();
    count++;
  })
  .catch((err) => console.log(err))
}

function insertCard(pokemon){
  const descricao = document.querySelector("main ul li .descricao");
  var name = pokemon.name;
  var hp = pokemon.base_experience;
  var imagePokemon = pokemon.sprites.other.home.front_default;
  const id = pokemon.id;

  if(pokemon.abilities[0] !== undefined){
    var ability1 = pokemon.abilities[0].ability.name;
    ability1 = ability1[0].toUpperCase() + ability1.substr(1);
  }
  if(pokemon.abilities[1] !== undefined){
    var ability2 = pokemon.abilities[1].ability.name;
    ability2 = ability2[0].toUpperCase() + ability2.substr(1);
  }
  
  name = name[0].toUpperCase() + name.substr(1);

  const html = `
      <li class="fundo">
      <div class="informacoes">
          <h2>${name}</h2>
          <p>ID ${id}</p>
          <p>HP ${hp}</p>
      </div>
      <div class="container-img">
      <img src="${imagePokemon}" alt="Imagem do ${name}">
      </div>
      <div class="descricao">
          <h3>Habilidades</h3>
          <p>${ability1}</p>
          <p>${ability2}</p>
      </div>
      </li>
  `;

  ul.innerHTML += html;
}

function select(){
  const addSelect = document.querySelectorAll('main ul li');
  addSelect[0].classList.add('select');
}

function getLis(){
  const lis = document.querySelectorAll('main ul li');
  script();
}