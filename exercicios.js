// 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2
// let numero = Number(prompt("Digite um número: "))
// for(let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// 3
// let n = Number(prompt("Digite um número: "))
// let soma = 0
// let conta = ""
// for (let i = 1; i <= n; i++) {
//     soma += i
//     conta += i

//     if (i < n) {
//         conta += " + "
//     }
// }
// console.log(`${conta} = ${soma}`)

//Intermediario

// 1
// for (let i = 1; i <= 50; i++) {

//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }

// 2
// let numeroSecreto = Math.floor(Math.random() * 100) + 1
// let tentativa
// do {
//     tentativa = Number(prompt("Digite um número de 1 a 100:"))
//     if (tentativa > numeroSecreto) {
//         alert("O número secreto é menor!")
//     } else if (tentativa < numeroSecreto) {
//         alert("O número secreto é maior!")
//     } else {
//         alert("Parabéns! Você acertou!")
//     }
// } while (tentativa !== numeroSecreto)

// 3 
// let numero = Number(prompt("Digite um número:"))
// do {
//     console.log(numero)
//     numero--
// } while (numero >= 0)

// 4
// let senha = 1234
// let resposta 

// do {
//     resposta = Number(prompt("Digite a senha para entrar no programa: "))
//     if (resposta === senha) {
//         alert("Senha correta, seja bem-vindo(a)!")
//     } else {
//         alert("Senha incorreta, tente novamente.")
//     }
// } while (resposta !== senha)

// 5
// let soma = 0
// let valor = Number(prompt("Digite um número ou 0 para parar o sistema"))

// while (valor !== 0) {
//     soma += valor
//     valor = Number(prompt("Digite um número ou 0 para parar: "))
// }
// console.log("Total da soma: " + soma);


// 6
let somaDeValores = 0;
for (let i = 1; i <= 3; i++) {
    let valor = Number(prompt(`Digite o ${i}° número: `))
    somaDeValores += valor
}
let media = somaDeValores / 3
console.log("A média dos valores é: " + media);


// Avançado

// 2
let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {

    console.log(numero + " x " + i + " = " + (numero * i));

}