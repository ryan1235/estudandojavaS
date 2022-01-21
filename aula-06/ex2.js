function tabuada(){
    let nuntxt = document.getElementById('txtnun')
    let tab = document.getElementById('seltable')
    let nun = Number(nuntxt.value)
    if(nun == 0){
        alert('Por favor digite um numero')
    }else{
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${nun} x ${c} = ${nun*c}`
            item.value = `${c}`
            tab.appendChild(item)
        }
    }
    
}