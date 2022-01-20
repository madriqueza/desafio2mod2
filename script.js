//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let name = "Henrique"
let age = 22
let souHumano = true
let birthMonth = "Janeiro"


console.log(age >= 18)
console.log(souHumano)

if(age >= 18){
    console.log("Você é maior de idade.")
}else{
    console.log("Você não é maior de idade.")
}

if(birthMonth == "Janeiro" || "Dezembro"){
    console.log("Você faz aniversário em Janeiro ou Dezembro.")
}else{
    console.log("Você não faz aniversário em Janeiro ou Dezembro.")
}