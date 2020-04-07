// Parametros por defecto


// function saludo (saludo, nombre, apellido) {
//   saludo = saludo || 'Hola'
//   nombre = nombre || 'Bernardino'
//   apellido = apellido || 'Villagra'
//   return `${saludo} ${nombre} ${apellido}`
// }

// console.log(saludo('Hola'))


// es6
function saludo (saludo, nombre = 'Juan', apellido = 'Perez') {
  return `${saludo} ${nombre} ${apellido}`
}

console.log(saludo('Hola'))

// template literal

// let hello = 'Hello'
// let world = 'World'
// let epicPhrase = hello + ' ' + world
// console.log(epicPhrase)

// es6

let hello = 'Hello'
let world = 'World'
console.log(`${hello} ${world}`)

// strings multilineas

// let lorem = "Quiero escribir una frase epica relacionado a Javascript \n" 
// + "Otra frase epica que necesitamos."
// console.log(lorem)

// es6

let lorem = `Quiero escribir una frase epica relacionado a Javascript
Otra frase epica que necesitamos.`
console.log(lorem)

// Desestructuracion

let person = {
  'name': 'Bernardino',
  'age': 28,
  'country': 'Paraguay'
}

console.log(`Hola, soy ${person.name} tengo ${person.age} años y soy de ${person.country}`)

// es6

let {name, age, country} = person

console.log(`Hola, soy ${name} tengo ${age} años y soy de ${country}`)

// Operadores de propagacion

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yessica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)
{
  var globalVar = 'Global var' // disponible en el scope Global
}

{
  let globalLet = 'Global let' // disponible solo en el scope Local
  console.log(globalVar)
  console.log(globalLet)
}

// console.log(globalVar)
// console.log(globalLet)

const a = 'b'
// a = 'a'

console.log(a)

// Asignar variables a objeto

let nombre = 'Bernardino'
let edad = 28

// es5

obj = {
  name: nombre,
  age: edad
}

// es6

obj2 = {
  nombre, edad
}

console.log(obj2)

// Funciones de tipo flecha o Arrow functions

const names = [
  {name: 'Bernardino', age: 28},
  {name: 'Yesica', age: 22}
]

// let listOfNames = names.map( function (item) {
//   console.log(item.name)
// })

let listOfNames = names.map(item => {
  console.log(item.name)
})

// Asincronismo

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Ops!')
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

// Clases

class calculator {
  constructor () {
    this.valorA = 0
    this.valorB = 0
  }

  sumar(valorA, valorB) {
    this.valorA = valorA
    this.valorB = valorB
    return this.valorA + this.valorB
  }

  restar(valorA, valorB) {
    this.valorA = valorA
    this.valorB = valorB
    return this.valorA - this.valorB
  }
}

const calc = new calculator()
console.log(calc.sumar(2,22))
console.log(calc.restar(25, 5))

import {hello} from './module'

console.log(hello())

// Generators

function* helloWorld() {
  if (true) {
    yield 'Hello';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)