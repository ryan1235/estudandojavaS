var idade = 65
console.log(`você tem ${idade} anos`)
if(idade < 16){
    console.log('você não vota')
}else if(idade < 18 || idade >= 65){
    console.log('Voto opicional')
}else{
    console.log('voto obrigatorio')
}