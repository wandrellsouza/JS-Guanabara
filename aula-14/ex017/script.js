function tabuada(){
    let num =  document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0){//para pegar o valor de um input se usa o .value, o .length é pra definir o minimo de caracteres para um input
        alert('Valor Inserido é Inválido')
    }else{
        let n = Number(num.value)//Number transforma strings em numeros(tanto inteiros,quanto decimais)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')//cria as options dentro do select de forma dinamica
            item.text = (`${n} x ${c} = ${n*c}`)//cria o texto de uma option
            item.value = `tab${c}`//adiciona um value a um option
            tab.appendChild(item)
            c++
        }
        
    }

}