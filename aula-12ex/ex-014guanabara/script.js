function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    

    msg.innerHTML = (`Agora são ${hora} horas`)

    if(hora >= 0 && hora <12){
        //Bom Dia
        img.src = 'imgs/manha.png'
        document.body.style.background = '#e5cd9f'
    }else if(hora >=12 && hora <18){
        //Boa tarde
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#b2864f'
    }else{
        //Boa noite
        img.src = 'imgs/noite.png'
        document.body.style.background = '#595954'
    }
}


