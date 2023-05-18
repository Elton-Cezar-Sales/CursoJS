function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data =  new Date()
    var hora = data.getHours()
    msg.innerHTML = "Agora são " + hora + " horas! "
        if (hora < 12) {
        msg.innerHTML += " Bom dia!"
        img.src = "imagens/fotomanha.png"
        document.body.style.backgroundColor = "yellow"
    }   else if (hora < 18) {     
        msg.innerHTML += " Boa tarde!"
        img.src = "imagens/fototarde.png"
        document.body.style.backgroundColor = "brown"
    }   else {
        msg.innerHTML += " Boa noite!"
        img.src = "imagens/fotonoite.png"
        document.body.style.backgroundColor = "black"
    }
}