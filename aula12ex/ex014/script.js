function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    var minutos = data.getMinutes()
    var comprimento = "Bom dia"
    if (hora >= 0 && hora < 12) {
        comprimento = "Bom dia!"
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        comprimento = "Boa Tarde!"
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        comprimento = 'Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    msg.innerHTML = `${comprimento}<br> Agora são ${hora} horas e ${minutos} minutos.`
}