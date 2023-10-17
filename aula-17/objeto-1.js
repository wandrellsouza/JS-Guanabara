let amigo ={
nome:'José', 
sexo:'M', 
peso:85.4, 
engordar(p=0){    
    console.log('engordou')
    this.peso += p

}}
amigo.engordar(7)
console.log(`Olá ${amigo.nome}, você atualmente pesa ${amigo.peso}kg`)
console.log(typeof amigo)
console.log(amigo)

