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

function colliding(a,b) {
  if(a.id == b.id) return false;
  if(Math.abs(a.position[0] - b.position[0]) > (a.radius + b.radius) || Math.abs(a.position[1] - b.position[1]) > (a.radius + b.radius)) {
		return false;
	} else {
		return true;
	}
}

var particles = [];

// Funcao executada logo no inicio
function setup() {
  particles.push(new NeutralParticle(0));
  particles.push(new NeutralParticle(1));
  particles.push(new NeutralParticle(2));
  particles.push(new NeutralParticle(3));
  particles.push(new NeutralParticle(4));
  particles.push(new NeutralParticle(5));
}

// Loop do jogo. Essa funcao e executada 60 vezes por segundo
function loop() {

  // Pinta tudo de preto
  ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,canv.width,canv.height);

  // Atualiza as posicoes das particulas e desenha elas
  for (var i = 0; i < particles.length; i++) {

    for (var k = 0; k < particles.length; k++) {
      if(colliding(particles[k],particles[i])) {
        particles[i].collide(particles[k]);
        particles[k].collide(particles[i]);
      }
    }

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
