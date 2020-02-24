const usuarios = [
  { nome: 'Miguel', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Magda', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Bernardo', tecnologias: ['HTML', 'Node.js'] },
  { nome: 'Yuri', tecnologias: ['JavaScript', 'Node.js'] }
];

for(let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com as tecnologias: ${usuarios[i].tecnologias.join(', ')} `);
}

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  for(let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === 'CSS') {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  } 
}