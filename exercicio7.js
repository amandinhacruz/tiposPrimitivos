let salario = 2826.66

if (salario <= 2259.20 ) {
    console.log("Você está isento de pagar imposto de renda")
} else if ( salario > 2259.20 && salario <= 2826.65) {
    let imposto = (salario * 0.075).toFixed(2);
    console.log(`O valor do imposto a pagar é R$${imposto}`);
} else if (salario > 2826.65 && salario <= 3751.05) {
    let imposto = (salario * 0.15).toFixed(2);
    console.log(`O valor do imposto a pagar é R$${imposto}`);
} else if (salario > 3751.05 && salario < 4664.68){
    let imposto = (salario * 0.225).toFixed(2);
    console.log(`O valor do imposto a pagar é R$${imposto}`);
} else {
    let imposto = (salario * 0.275).toFixed(2);
    console.log(`O valor do imposto a pagar é R$${imposto}`);
}