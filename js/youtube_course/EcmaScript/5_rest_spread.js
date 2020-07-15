// Rest

function average(a, ...args) {

   return args.reduce((acc, i) => acc += i, 0) / args.length
}

// console.log(average(10, 20, 30, 40, 50))


//Spread

// const array = [1, 2, 3, 5, 8, 13]

// console.log(...array)


// console.log(Math.max(...array))
// console.log(Math.min(...array))
// console.log(Math.min.apply(null, array))

// const fib = [1, ...array]

// console.log(fib)


// Desctructuring
const array = [1, undefined, 3, 5, 8, 13]

// const [a, b = 42, ...c] = array
// console.log(a, b, c)

// const [a, , b] = array

// console.log(a, b)

// Object 

const address = {
   country: 'Russia',
   city: 'Moscow',
   street: 'Lenina',
   concat: function () {
      return `${this.country}, ${this.city}, ${this.street} `
   }
}



// const { city, country, street = 'Tverskaya', concat: addressConcat } = address

// console.log(addressConcat.call(address))
// console.log(street)

const { city, ...rest } = address

console.log(city)
console.log(rest)


const newAddress = { ...address, street: 'Tverskaya', code: 1234 }

console.log(newAddress)

// console.log(address.concat())