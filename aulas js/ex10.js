let num = [1, 5, 10]
num.push(2, 10, 50)
num.sort()
/*for(let pos=0; pos < num.length;pos++){
    console.log(`numero: ${num[pos]}`)
    num.sort()
}
*/
let pesquisa = num.indexOf(80)
console.log(pesquisa)
for(let pos in num){
    console.log(`numero: ${num[pos]}`)
}