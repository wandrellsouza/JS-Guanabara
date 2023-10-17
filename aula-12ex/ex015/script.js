function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fAno.value.length === 0 || fAno.value > ano){
        alert('[ERRO] verifique os dados e tente novamente')
    }else{
        let fsexo = document.getElementsByName('radsex')
        let idade = (ano - fAno.value)
        
        let genero = ''
        let img = document.createElement('img')//para criar uma img utilizando js use esse comando
        img.setAttribute('id', 'foto')//para definir id´s/classes use esse
        if(fsexo[0].checked){
            genero = ('Homem')
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'menino-crianca.png')//assim você adiciona uma imagem ao seu site só usando js
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            }else if(idade > 21){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            }
        }else if(fsexo[1].checked){
            genero = ('Mulher')
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'menina-crianca.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            }else if(idade > 21){
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            }
        }
        res.style.textAlign = 'center' //com esse comando você centraliza o texto usando o js
        res.innerHTML = (`Detectamos ${genero}, com ${idade} anos`)
        res.appendChild(img)//você utiliza esse comando pra te retornar as imagens selecionadas anteriormente
    }
   
}