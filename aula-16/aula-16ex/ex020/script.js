let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n))!= -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou ja inserido na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Impossivel executar  está ação')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = soma/total.toFixed(2)
            if(valores[pos] > maior)
            maior =  valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${total} números cadastrados` 
        res.innerHTML += `<p>O maior valor indicado é:  ${maior}</p>`
        res.innerHTML += `<p>O menor valor indicado é:  ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números indicados é de:  ${soma}</p>`
        res.innerHTML += `<p>A média dos valores indicados é de:  ${media}</p>`
    }
}