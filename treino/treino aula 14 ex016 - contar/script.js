function contar() {
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if ( i == 0 || f == 0 ) {
        res.innerHTML = "Impossivel contar!"
    } else {
        res.innerHTML = "Contando: <br>"
          
        
        if (p <= 0) {   
            window.alert("Passo ínvalido! Considerando passo = 1 !")
            p = 1
        } 
            if ( i < f ) {
                for(var c = i; c <= f; c += p) {
                res.innerHTML += + c + " \u{1f449} "
                }
            } else {
                for(var c = i; c >= f; c -= p){
                res.innerHTML += + c + " \u{1f449} "
                }
            }
        res.innerHTML += ("Fim!")
    
    
    }
    

}