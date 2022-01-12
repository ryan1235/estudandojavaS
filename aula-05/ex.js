function clicar() {
    var data = new Date()
    var realano = data.getFullYear()
    var ano = document.getElementById('txtnuber')
    var res = document.getElementById('res')
    if (ano.value == 0 || ano.value > realano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = realano - Number(ano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if (fsex[0].checked) {
            var genero = 'masculino'
            if (idade >= 0 && idade < 10) {
                img.src = '/estudandojavaS/img/CriancaHomem.jpg'
            } else if (idade > 10 && idade < 18) {
                img.src = '/estudandojavaS/img/JovemHomem.jpg'
            } else if (idade > 18 && idade < 60) {
                img.src = '/estudandojavaS/img/AdultoHomem.jpg'
            } else {
                img.src = '/estudandojavaS/img/IdosoHomem.jpg'
            }}else {


            var genero = 'feminino'
            if (idade >= 0 && idade < 10) {
                img.src = '/estudandojavaS/img/CriancaMulher.jpg'
            } else if (idade > 10 && idade < 18) {
                img.src = '/estudandojavaS/img/JovemMulher.jpg'
            } else if (idade > 18 && idade < 60) {
                img.src = '/estudandojavaS/img/AdultoMulher.jpg'
            } else {
                img.src = '/estudandojavaS/img/IdosoMulher.jpg'
            }
        }

        res.innerText = `você tem ${idade} anos`
    }
}