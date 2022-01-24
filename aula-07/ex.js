let n1 = document.getElementById("number")
let numeros = document.getElementById("numeros")
let valor = []
let res = document.getElementById("format")



function valid(n, v){
    if(v.indexOf(Number(n.value)) != -1){
        return true
    }else{
        return false
    }
}

function valid2(n){
    if(Number(n) <= 100 && Number(n) > 0){
      return false
    }else{
        return true
    }
}

function adicionar(){
    if(n1.value == 0){
        alert("[Erro] Você não colocou um numero")
    }else{
        if(!valid(n1, valor) && !valid2(n1.value)){
                valor.push(Number(n1.value))
                let num = document.createElement('option')
                num.text = `${n1.value}`
                numeros.appendChild(num)
                res.innerHTML = ''
        }else{
            alert('erro')
        }
    }
    n1.value = ''
    n1.focus()
}

function formar(){
   if(valor.length == 0){
       alert('[Erro] Não A numeros adicionados')
   }else{
       let total = valor.length
       let maior = valor[0]
       let menor = valor[0]
       let soma = 0
       for(let i in valor){
        soma += valor[i]
         if(valor[i] > maior){
            maior = valor[i]
         }else{
            menor = valor[i]
         }
       }
       let media = soma / total

       res.innerHTML = ''
       res.innerHTML += `<p>Ao todo temos <strong>${total} </strong>numeros!</p>`
       res.innerHTML += `<p><strong>${menor}</strong> é o menor valor!</p>`
       res.innerHTML += `<p><strong>${maior}</strong> é o maior valor!</p>`
       res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}</strong></p>`
       res.innerHTML += `<p>A media de todos os valores da <strong>${media}</strong></p>`
   }
}