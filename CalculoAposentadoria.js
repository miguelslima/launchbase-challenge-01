const nome = 'Miguel';
const sexo = 'M';
const idade = 48;
const contribuicao = 47;

const nomeF = 'Magda';
const sexoF = 'F';
const idadeF = 50;
const contribuicaoF = 35;

somaContribuicaoM = idade + contribuicao;
somaContribuicaoF = idadeF + contribuicaoF;

if(sexo === 'M' && somaContribuicaoM >=95 && contribuicao >= 35 ) {
  console.log(`${nomeM} pode se aposetar`);
} else if(sexo === 'F' && somaContribuicaoF >= 85 && contribuicao >= 30 ) {
    console.log(`${nomeF} pode se aposetar`);
} else {
  console.log(`${nome} não pode se aposentar`)
}

if(sexoF === 'M' && somaContribuicaoM >=95 && contribuicao >= 35 ) {
  console.log(`${nomeM} pode se aposetar`);
} else if(sexoF === 'F' && somaContribuicaoF >= 85 && contribuicao >= 30 ) {
    console.log(`${nomeF} pode se aposetar`);
} else {
  console.log(`${nome} não pode se aposentar`)
}
