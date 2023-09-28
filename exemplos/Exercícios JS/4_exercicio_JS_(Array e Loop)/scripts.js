document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let carros = [
    "Ferrari", "Porsche", "Koenigsegg", "Lamborghini" , "Bugatti"
];

let tamanho = carros.length

for (let i = 0; i < tamanho; i = i+1) {
    document.write(`Os carros mais rápidos são da: <strong>${carros[i]}</strong><br>`);
}



