var n1 = document.getElementById('nu1')
var n2 = document.getElementById('nu2')
var n3 = document.getElementById('nu3')
var ress = document.getElementById('res')
function contar() {
    if(n1.value == 0 || n2.value == 0) {
        ress.innerHTML = '<p>Impossivel contar</p>'
        alert('[Erro] Prencha todos os valores')
    } else {
        ress.innerHTML = '<p>Contando...</p>'
        let Inicio = Number(n1.value)
        let fim = Number(n2.value)
        let passo = Number(n3.value)
        if(passo <= 0){
            alert('Passo invalido foi considera passo 1')
            passo = 1
        }
        if(Inicio < fim) {
            //contagem crecente
            for (let c = Inicio; c <= fim; c += passo) {
                ress.innerHTML += `<p>${c}\u{27A1}</p>`
            }
            }else{
                //cpmtagem regresiva
                for(let c = Inicio; c >= fim; c -= passo){
                    ress.innerHTML += `<p>${c}\u{27A1}</p>`  
                }
            }
            ress.innerHTML += `<p>\u{1F3C1}</p>`
        }

    }
