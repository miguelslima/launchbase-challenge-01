const programador = {
  nome: 'Miguel',
  idade: 33,
  tecnologias: [
    {nome: 'C++', especialidade: 'Web/Mobile'},
    {nome: 'JavaScript', especialidade: 'Desktop'}
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
