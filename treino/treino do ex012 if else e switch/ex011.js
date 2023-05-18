var idade = 2
    console.log("Sua idade é " + idade + " anos!")
if (idade < 16) {
    console.log("Não vota!")
} else if (idade < 18 || idade > 65) {
    console.log("Voto não obrigatório")
} else {
    console.log("Voto obrigatório!")
}