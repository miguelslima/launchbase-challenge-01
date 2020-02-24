const nome = 'Miguel';
const peso = 85;
const altura = 1.78;

const imc = peso / (altura * altura);

if(imc >= 30) {
  return console.log(`${nome} está acima do peso`);
}
if(imc <= 29.9) {
  return console.log (`${nome} não está acima do peso`); 
}
