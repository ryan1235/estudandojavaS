var img;
        window.onload = function () {
            img = document.getElementById('imagem')
        }
var data = new Date()
var realano = data.getFullYear()
var ano = document.getElementById('txtnuber')
var res = document.getElementById('res')
var fsex = document.getElementsByClassName('radsex')
var idade = realano - Number(ano.value)

function clicar() {

    if (ano.value.length == 0 || ano.value > realano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        if (fsex[0].checked) {
            var genero = ''
            genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.src = '/img/CriancaHomem.jpg'
            } else if (idade < 18) {
                img.src = '/img/JovemHomem.jpg'
            } else if (idade < 60) {
                img.src = '/img/AdultoHomem.jpg'
            } else {
                img.src = '/img/IdosoHomem.jpg'
            }
        } else {


            genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                img.src = '/img/CriancaMulher.jpg'
            } else if (idade < 18) {
                img.src = '/img/JovemMulher.jpg'
            } else if (idade < 60) {
                img.src = '/img/AdultoMulher.jpg'
            } else {
                img.src = '/img/IdosoMulher.jpg'
            }
        }

        res.innerText == `você tem ${idade} anos`
    }
}