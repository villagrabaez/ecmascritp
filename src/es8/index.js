// Objeto a matriz

// const data = {
//   frontend: 'Bernardino',
//   backend: 'Isabel',
//   design: 'Ana'
// }

// const entries = Object.entries(data)
// console.log(entries)
// console.log(entries.length)

const data = {
  frontend: 'Bernardino',
  backend: 'Isabel',
  design: 'Ana',
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

// Padding

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-------'))

// Async y await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ?
      setTimeout(() => {resolve('Hey!')}, 3000)
      :
      reject(new Error('Test Error'))
      // setTimeout(() => {reject('Oops!')}, 3000)
      // setTimeout(() => {reject(new Error('Error!!!'))}, 3000)
  });
}

// helloWorld()
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()