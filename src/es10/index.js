let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

// ----------------------

let array1 = [1, 2, 3, 4, 5]

console.log(array1.flatMap(value => [value, value * 2]))

// -----------------------

let hello = '          hello world!'
console.log(hello)
console.log(hello.trimStart())

// -----------------------

let hello1 = 'hello world!             '
console.log(hello1)
console.log(hello1.trimEnd())

// -----------------------

try {

} catch {
  // error...
}

// ------------------------

let entries = [["name", "Bernardino"], ["age", 32]]

console.log(Object.fromEntries(entries))

// ------------------------

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol)
console.log(symbol.description)