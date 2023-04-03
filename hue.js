//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

/*var number1 = parseInt(prompt('Insira aqui o primeiro valor'))
var number2 = parseInt(prompt('Insira aqui o segundo valor, ele não pode ser 0 ou negativo!'))
const divisao = number1 / number2

while(number2 <= 0) { 
  number2 = alert(`Valor inválido. Digite um segundo valor maior que zero`)
}
alert(`O resultado da divisão é: ${divisao}`)*/

//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

/*var contagemInicio = 30
var contagemFinal = 0

alert(`A bomba será acionada em:`)
while(contagemInicio > contagemFinal){
  contagemInicio--;
  alert(`${contagemInicio}`)
}
document.write(`BOOM!!!!`)*/

//3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

/*var numeroInicio = 0
var numeroFinal = 10

alert(`A contagem será iniciada em ordem crescente agora mesmo!`)
while(numeroInicio < numeroFinal){
  numeroInicio++
  alert(`${numeroInicio}`)
}
alert('ZIIII ZIIIII, A contagem acabou!')

var numeroInicio = 11
var numeroFinal = 1

alert(`A contagem decrescente será iniciada agora mesmo!`)
while(numeroInicio > numeroFinal){
  numeroInicio--
  alert(`${numeroInicio}`)
}
alert('ZIIII ZIIIII, A contagem acabou!')*/

//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
    /*var contar = 0
    var somar = 0
    
    for(i = 15; i <= 100; i++){
      contar++
      somar += i
    }

    var media = somar / contar
    alert(`A media aritimética entre 15 e 100 é: ${media}`)*/


//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.*/

    /*var numero1 = parseInt(prompt('Insira aqui o primeiro número:'))
    var numero2 = parseInt(prompt('Insira aqui o segundo número, ele deve ser maior que o primeiro informado:'))
    
    
    while(numero1>numero2){
            numero2 = Number(prompt("O segundo número deve ser maior que o primeiro.\nDigite um número válido: "));
        }
    
    var soma = numero1 + numero2
    var media = soma / 2
    alert(`A média entre os dois número informados é: ${media}`)*/

    

   

//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

/*var alunosOkay = 0

do {
  var nota1 = parseFloat(prompt('Digite a primeira nota do aluno:'));
  var nota2 = parseFloat(prompt('Digite a segunda nota do aluno:'));

  var mediaNota = (nota1 + nota2) / 2;

  if (mediaNota >= 9.5) {
    alunosOkay++;
    alert(`O aluno foi aprovado com média: ${mediaNota}`);
  } else {
    alert(`O aluno foi reprovado com média ${mediaNota}`);
  }
  var resposta = prompt("Calcular a média de outro aluno? (S/N)");

} while (resposta == "S");

alert(`Foram aprovados ${alunosOkay} alunos.`);*/


//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

/*let somadeNotas = 0

for (let i = 1; i < 7; i++) {
  var nota = parseFloat(prompt(`Insira a ${i}º nota aqui, meu consagrado`))

  while(nota < 0 || nota > 10) {
    nota = parseFloat(prompt(`Essa nota é inválida. Insira novamente um número entre 0 e 10!`))
  
}
somadeNotas += nota
}
const mediaFinal = somadeNotas / 6
alert(`A média é: ${mediaFinal}`)*/




//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

/*let valorN = parseInt(prompt('Insira o valor de N, o valor deve ser maior que 0'))
valorPadrao = 1

while (valorN >= valorPadrao){
  alert(valorPadrao)
  valorPadrao++
}*/



//9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
/*let valorPadrao = 100

while(valorPadrao <= 110) {
alert(valorPadrao)
valorPadrao++;
}*/


//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

/*let letraN = parseInt(prompt('Digite um número inteiro para a tabuada:'));
for (let i = 1; i <= letraN; i++) {
  let tabuada = '';
  for (let j = 1; j <= 10; j++) {
    tabuada += `${i} x ${j} = ${i * j}\n`;
  }
  console.log(tabuada);
}*/

//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

/*let numeroDentro = 0;
let numeroFora = 0;

for (let i = 1; i < 11; i++) {
  let valor = parseInt(prompt(`Insira o ${i}º valor:`));
  
  if (valor >= 24 && valor <= 42) {
    numeroDentro++;
  } else {
    numeroFora++;
  }
}
alert(`´Valores que estão entre 24 e 42 são: ${numeroDentro}\n os que ficaram fora de 24 e 42: ${numeroFora}`)*/



