function saudar () {
    var txth = document.getElementById("txthora")
    var saud = document.querySelector("div#saud")
    var hora = Number(txth.value)
    saud.innerHTML = "Agora são : " + hora + " horas! "
    if ( hora > 24 ) {
        window.alert = "Hora inválida"
    } else if ( hora < 6 ) {
        saud.innerHTML += " Boa madrugada! "
    } else if ( hora < 12) {
        saud.innerHTML += " Bom dia! "
    } else if ( hora < 18 ) {
        saud.innerHTML += " Boa tarde! "
    } else {
        saud.innerHTML += " Boa noite! "
    }
}