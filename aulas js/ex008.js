var data = new Date ()
var hora = data.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if (data < 12){
    console.log('bom dia!')
}else if(data <= 18){
    console.log('boa tarde!')
}else {
    console.log('boa noite!')
}