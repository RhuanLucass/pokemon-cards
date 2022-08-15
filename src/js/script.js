function script(){
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll("main ul li");

var cartaoAtual = 0;

function esconderCartao(){
  const cartaoSelecionado = document.querySelector(".select");
  cartaoSelecionado.classList.remove("select");
}

function mostrarCartao(cartaoAtual){
  cartoes[cartaoAtual].classList.add("select");
}

btnAvancar.addEventListener("click", avancar);

function avancar() {
  if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1;
  
  esconderCartao();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
}

btnVoltar.addEventListener("click", voltar);

function voltar() {
  if (cartaoAtual === 0) cartaoAtual = cartoes.length;
  
  esconderCartao();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
}
}

// TODO: Adicionar sistema para mudar página de pokemons
// TODO: Adicionar sistema para pesquisa por nome