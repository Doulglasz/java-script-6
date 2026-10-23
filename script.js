// exercicio 1
    function calcularMedia(valor1, valor2, valor3, media){
        valor1 = Number(prompt("Digite o primeiro valor para calcular a média"));
        valor2 = Number(prompt("Digite o segundo valor"));
        valor3 = Number(prompt("Digite o terceiro valor"));

        media = (valor1 + valor2 + valor3) / 3

        if(media >= 7){
            return console.log("Aprovado");
        }else{
            return console.log("Reprovado");
        }
    }

    calcularMedia();


// exercicio 2 !!!ARRUMAR!!!
//    function tipo(valor){
//        valor = prompt("Digite um valor para verificar o tipo");
//        console.log("O tipo de " + valor + " é " + typeof valor);
//   }


// exercicio 3
    const idade = prompt("Digite a idade");
    const status = idade >= 18 ? "Maior de idade" : "Menos de idade";

    console.log(status);


// exercicio 4
    const num = Number(prompt("Digite um número para imprimir a tabuada (de 1 a 10)"));
    let resultado;

    for(let i = 1; i <= 10; i++){
        resultado = num * i;
        console.log(num + " x " + i + " = " + resultado);
    }


// exercicio 5
    let diaSemana = Number(prompt("Digite um num de 1 a 7"));

    switch(diaSemana){
        case 1:
            console.log("Domingo");
            break;

        case 2:
            console.log("Segunda-feira");
            break;
            
        case 3:
            console.log("Terça-feira");
            break;
            
        case 4:
            console.log("Quarta-feira");
            break;
            
        case 5:
            console.log("Quinta-feira");
            break;
            
        case 6:
            console.log("Sexta-feira");
            break;
            
        case 7:
            console.log("Sábado");
            break;
            
        default:
            console.log("Valor inválido");
            break;
    }


// exercicio 6
    const calcularArea = (base, altura) => base * altura;

    const baseEx = 8;
    const alturaEx = 6;
    const area = calcularArea(baseEx, alturaEx);

    console.log("A área é " + area);


// exercicio 7
    let listaDeCompras = ['Arroz', 'Feijâo', 'Batata'];

    listaDeCompras.push('Macarrão');
    listaDeCompras.unshift('Suco');
    listaDeCompras.pop();

    console.log(listaDeCompras);


// exercicio 8
    const alunos = [
        { nome: 'Ana', nota: 8.5, idade: 20 },
        { nome: 'João', nota: 6.7, idade: 22 },
        { nome: 'Maria', nota: 9.3, idade: 19 },
        { nome: 'Carlos', nota: 5.0, idade: 21 },
        { nome: 'Beatriz', nota: 7.8, idade: 20 }
    ];

    const aprovados = alunos.filter(alunos => alunos.nota >= 7);
    console.log(aprovados);

    const nomesAlunos = alunos.map(alunos => alunos.nome);
    console.log(nomesAlunos);

    const somaIdade = alunos.reduce((acumulador, aluno) => acumulador + aluno.idade, 0);
    const mediaIdade = somaIdade / alunos.length;
    console.log(mediaIdade);

    const menorSeis = alunos.find(alunos => alunos.nota < 6);
    console.log(menorSeis);


// exercicio 9
    