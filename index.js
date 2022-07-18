const aluno =(nome,materia)=>{
  return new Promise((resolve,reject)=>{
    if(typeof nome === 'string' && typeof materia === 'string'){
      resolve(`${nome} está apto para fazer a prova de ${materia}`);
    }else{
      reject(`${nome} e ou ${materia} estão inválidos`);
    }
  });
};

const prova =returnAluno=>{
  let rnd = Math.floor(Math.random()*11);
  console.log(returnAluno);
  return new Promise((resolve,reject)=>{
   rnd>=5?resolve('Parabéns'):reject('Você não passou!!!!')});
};

const testeFinal =async(nome,materia)=>{
  try{
    let validacao = await aluno(nome,materia);
    let resultadoProva= await prova(validacao);
    console.log(resultadoProva); 
  }catch(erro){
    console.log(erro);
  }finally{
    console.log('Programa finalizado');
  }
};

testeFinal('Arthur','Matemática');