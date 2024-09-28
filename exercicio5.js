let nota1 = parseInt(prompt("Insira a nota da  primeira prova: "));
let nota2 = parseInt(prompt("Insira a nota da segunda prova: "));
let nota3 = parseInt(prompt("Insira a nota da terceira prova: "));

media = ((nota1 + nota2 + nota3) /3).toFixed(2);
console.log(`O resultado da média é ${media}`);

