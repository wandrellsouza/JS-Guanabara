/*
    um array || vetor || uma variavel composta
    é uma variavel que tem varios elementos;
    cada elemento é composto por seu valor||conteudo 
    e indice || numero || identificador
*/

let num = [1 , 5 , 2 , 9 , 3 , 7]
num[6] = 0//para add um novo item ao array,se usa "nomeDaVariavel[posição a ser adicionada] = numero a ser adicionado"
num[8] = 8
num.push(4)//para add um item ao final do array,utilize "variavel.push(numero a adicionar)"
num.push(6)
num.sort()//.sort() organiza a lista em ordem crescente
console.log(`${num}`)
console.log(`sua lista possui ${num.length } números`)

let n = [6, 5, 4, 9 ,8 ,7]
n.sort()
console.log(`${n}`)
console.log(`O vetor possui ${n.length} posições`)

/*for(let pos = 0 ;pos<n.length ;pos++ ){//assim você escreve os números do array de forma automatizada
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}*/

for( let pos in n ){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
    console.log(n.indexOf(9))//usar o .indexOf(numero a ser procurado) para procurar a posição de um numero especifico
    
}
