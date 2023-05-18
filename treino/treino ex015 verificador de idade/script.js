function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")   
        if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("ERRO: data inválida")
        } else {
            var fsex = document.getElementsByName("radsex")
            var idade = ano - Number(fano.value)
            var genero = ""
            var img = document.createElement("img")
            img.setAttribute("id", "foto")
            if (fsex[0].checked) {
                genero = "homem"
                if (idade < 10) {
                    //criança
                    img.setAttribute("src", "foto-bebe-m.jpg")
                } else if ( idade < 21) {
                    //jovem
                    img.setAttribute("src", "foto-jovem-m.jpg")
                } else if ( idade < 65) {
                    //adulto
                    img.setAttribute("src", "foto-adulto-m.jpg")
                } else {
                    //idoso
                    img.setAttribute("src", "foto-idoso-m.jpg")
                }
            } else if (fsex[1].checked) {
                genero = "mulher"
                if (idade < 10) {
                    //criança
                    img.setAttribute("src", "foto-bebe-f.jpg")
                } else if ( idade < 21) {
                    //jovem
                    img.setAttribute("src", "foto-jovem-f.jpg")
                } else if ( idade < 65) {
                    //adulto
                    img.setAttribute("src", "foto-adulto-f.jpg")
                } else {
                    //idoso
                    img.setAttribute("src", "foto-idoso-f.jpg")
                }
            }
            res.style.textAlign = "center"
            res.innerHTML = "Detectamos: " + genero + " de " + idade + " anos!"
            res.appendChild(img)
        
    }

}