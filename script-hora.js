function carregar () {
    var msg = document.getElementById('mensagem')   
    var img = document.getElementById('imagem')     
    var agora = new Date()
    var hora = agora.getHours()
    if (hora < 5) {
        img.src = 'fmadru.jpg'                                     
        msg.innerHTML = `Agora são ${hora} horas. Boa madrugada!`  
        document.body.style.background = '#000000'
        document.body.style.color = 'red'
    } else if (hora >= 5 && hora <=12) {
        img.src = 'fmanha.png'                                      
        document.body.style.background = '#FFB529'                  
        msg.innerHTML= `Agora são ${hora} horas. Bom dia!`
    } else if (hora >= 13 && hora < 18) {
        img.src ='ftarde.png'                                       
        document.body.style.background = '#656CFC' 
        msg.innerHTML= `Agora são ${hora} horas. Boa tarde!`
    } else if (hora <= 24) {
        img.src = 'fnoite.png'                                      
        document.body.style.background = '#0C333D'
        msg.innerHTML= `Agora são ${hora} horas. Boa noite!` 
    } 
}