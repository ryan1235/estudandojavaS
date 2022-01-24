let nome = document.getElementById('nome')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let tabela = document.getElementById('tabela')
let valor = []

function valid(nome, valor){
    if(valor.indexOf(nome.value) == 0){
        return true
    }else{
        return false
    }
}

function aproRepro(nu1, nu2){
    let media = Number(nu1.value) / Number(nu2.value)
    if(media.value >= 5){ //A
        return true
    }else{
        return false
    }
}

function add(){
    if(nome.value == 0 || n1.value == 0 || n1.value > 10 || n2.value == 0 || n2.value > 10){
        alert('[Erro] Preencha todos os campos corretamente')
    }else{
        if(!valid(nome, valor)){
            valor.push(nome.value)
            valor.sort()
            tabela.innerHTML = ''
            for(let i in valor){
                let var1 = document.createElement('tr')
                let var2 = document.createElement('td')
                var2.innerHTML = `${i}`
                let var3 = document.createElement('td')
                var3.innerHTML = `${valor[i]}`
                tabela.appendChild(var1)
                var1.appendChild(var2)
                var1.appendChild(var3)
                if(!aproRepro(n1.value, n2.value)){
                    let var4 = document.createElement('td')
                    var4.innerHTML = 'aprovado'
                    var1.appendChild(var4)
                }else{
                    let var4 = document.createElement('td')
                    var4.innerHTML = 'reprovado'
                    var1.appendChild(var4)
                }
            }
        }else{
            alert('Esse nome ja existe')
        }
        }
    }
