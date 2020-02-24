const nome = 'Miguel';
const sexo = 'M';
const idade = 48;
const contribuicao = 47;

const nomeF = 'Magda';
const sexoF = 'F';
const idadeF = 50;
const contribuicaoF = 35;

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
//enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

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
