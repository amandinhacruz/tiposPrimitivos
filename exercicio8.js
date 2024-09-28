let valor = 350.00
let conversorDolar = (valor * 0.18).toFixed(2);
let conversorEuro = (valor * 0.16).toFixed(2);
let conversorPesoArgentino = (valor * 177.74).toFixed(2);

console.log(`Bem-vinde à casa da moeda! Convertendo R$${valor} para dolar, fica: $${conversorDolar}`);
console.log(`Bem-vinde à casa da moeda! Convertendo R$${valor} para euro, fica: €${conversorEuro}`);
console.log(`Bem-vinde à casa da moeda! Convertendo R$${valor} para peso argentino, fica: $${conversorPesoArgentino}`);