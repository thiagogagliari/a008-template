// EXERCICIO 01
const minhaIdade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade do seu amigo?")
let resultado = minhaIdade > idadeAmigo
36
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log("A diferença de idade é", minhaIdade - idadeAmigo)

// EXERCICIO 02

const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d
b && a && !d
a || d
c && !d
