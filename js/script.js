const alunos = [
    {nome: "Alice", nota: 85},
    {nome: "Henrique", nota: 83},
    {nome: "Carlos", nota: 76},
    {nome: "Maria", nota: 56},
    {nome: "Jose", nota: 96},
    {nome: "Luciana", nota: 45}
]

const aprovados = alunos.filter(aluno => aluno.nota >= 80);
const NomesAprovados = aprovados.map(aluno => aluno.nome);

const produtos = [
    { nome: "Maçã", categoria: "Frutas" },
    { nome: "Banana", categoria: "Frutas" },
    { nome: "Carro", categoria: "Veículos" },
    { nome: "Bicicleta", categoria: "Veículos" },
    { nome: "Pera", categoria: "Frutas" },
    { nome: "Laranja", categoria: "Frutas" },
    { nome: "Moto", categoria: "Veículos" },
    { nome: "Caminhão", categoria: "Veículos" },
    { nome: "Morango", categoria: "Frutas" },
    { nome: "Abacaxi", categoria: "Frutas" },
    { nome: "Avião", categoria: "Veículos" },
    { nome: "Barco", categoria: "Veículos" },
    { nome: "Uva", categoria: "Frutas" },
    { nome: "Kiwi", categoria: "Frutas" },
    { nome: "Ônibus", categoria: "Veículos" },
    { nome: "Skate", categoria: "Esportes" },
    { nome: "Tênis", categoria: "Esportes" },
    { nome: "Bola de Futebol", categoria: "Esportes" },
  ];

const numeros = [10,12,4,7,9,23,60,85,105,67,23]
const numerosPares = numeros.filter(numero => numero % 2 === 0);
const minimo = Math.min(...numeros);
const maximo = Math.max(...numeros);

const produtosPorCategoria = produtos.reduce((agrupados, produto) => {
(agrupados[produto.categoria] = agrupados[produto.categoria] || []).push(produto.nome);
return agrupados;
}, {});


var botao = document.getElementById('botao1');
botao.addEventListener('click', function(){
    console.log("Aprovados" + " " + NomesAprovados)
})

var botao1 = document.getElementById('botao2');
botao1.addEventListener('mouseover', function(){
    console.log("Produtos por Categoria:", produtosPorCategoria);
})

var botao2 = document.getElementsByClassName('botao3');

for (var i = 0; i < botao2.length; i++) {
    botao2[i].addEventListener('mouseout', function() {
        console.log("Números pares:", numerosPares);
    });
}

var botao3 = document.getElementById('botao4');
botao3.addEventListener('click', function(){
    console.log("Numero menor: ", minimo)
    console.log("Numero maior: ", maximo)
})