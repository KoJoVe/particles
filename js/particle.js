// A funcao Particle significa na verdade o tipo Particle.
// Quando eu criar uma var particula = new Particle(), ela comecara com estes
// valores abaixo.
function Particle() {

  this.position = [0,0];
  this.velocity = [0,0];
  this.acceleration = [0,0];
  this.color = "#000000";
  this.radius = 0;

}

// Se eu criar uma var particula = new Particle(), eu posso chamar este metodo
// da particula desta forma: particula.draw(). Isso vai fazer a particula ser
// desenhada no nosso canvas.
Particle.prototype.draw = function() {

  ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

}

// Este metodo deve ser chamado a cada instante para atualizar a velocidade e
// a localizacao da particula, de acordo com sua aceleracao e velocidade.
Particle.prototype.update = function() {

  this.position[0] += this.velocity[0]/10;
	this.position[1] += this.velocity[1]/10;
	if(this.position[0] < 0 || this.position[0] > canv.width) this.velocity[0] = -this.velocity[0];
	if(this.position[1] < 0 || this.position[1] > canv.height) this.velocity[1] = -this.velocity[1];
	this.velocity[0] += this.acceleration[0]/10;
	this.velocity[1] += this.acceleration[1]/10;

}
