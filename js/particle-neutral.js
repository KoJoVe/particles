// Aqui e a definicao da particula basica.
function NeutralParticle(id) {

  // Isto pega os valores de base da Particle.
  Particle.call(this, id);

  // Quando a particula nasce, ela vai pra um lugar aleatorio
  this.position[0] = Math.floor((Math.random() * 500) + 1);
  this.position[1] = Math.floor((Math.random() * 500) + 1);

  // Com uma velocidade aleatoria
  this.velocity[0] = (Math.floor((Math.random() * 10) + 5)) * ((Math.round(Math.random()) == 1 ? -1 : 1));
  this.velocity[1] = (Math.floor((Math.random() * 10) + 5)) * ((Math.round(Math.random()) == 1 ? -1 : 1));

  // Cor branca com raio 10 e nome "Neutral"
  this.color = "#FFFFFF";
  this.radius = 10;
  this.name = "Neutral";

}
// Isto aqui ja pega as funcoes basicas da Particle (como draw() e update()) e
// ja coloca dentro da nossa NeuralParticle
NeutralParticle.prototype = Object.create(Particle.prototype);

// Se a particula colidir com qualquer uma, avisa
NeutralParticle.prototype.collide = function(particle) {
  console.log("Colidiu");
}
