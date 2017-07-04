// Esta e a primeira funcao a ser carregada no programa.
window.onload=function() {
  // Pegamos o canvas (note que canv e ctx sao variaveis globais)
  canv=document.getElementById("mainCanvas");
  // Pegamos o contexto 2D, para desenhar em 2 dimensoes no canvas
  ctx=canv.getContext("2d");
  // Aqui nos dizemos que quando qualquer tecla for pressionada, keyPush() sera executada
  document.addEventListener("keydown",keyPush);
  // Executamos a funcao setup, onde definimos o inicio do jogo
  setup();
  // Aqui comecamos a executar o loop do jogo
  setTimeout(loop,1000/60);
}

var particles = [];

// Funcao executada logo no inicio
function setup() {
  particles.push(new NeutralParticle());
  particles.push(new NeutralParticle());
  particles.push(new NeutralParticle());
  particles.push(new NeutralParticle());
  particles.push(new NeutralParticle());
  particles.push(new NeutralParticle());
}

// Loop do jogo. Essa funcao e executada 60 vezes por segundo
function loop() {

  // Pinta tudo de preto
  ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,canv.width,canv.height);

  // Atualiza as posicoes das particulas e desenha elas
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  // Volta pro loop daqui a 1000/60 milesimos de segundo
  setTimeout(loop,1000/60);

}

// Caso a gente pressione uma tecla ele executa essa funcao
function keyPush(evt) {
  //evt.keyCode
}
