'use strict'
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// 1. Literals and properties
const obj1 = {} // 'Object literal' syntax
const obj2 = new Object() // 'Object constructor' syntax
function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const tom = { name: 'tom', age: 14 }
print(tom)

// with JavaScript magic (dynamically typed language)
// can add properties later
tom.hasJob = true
console.log(tom.hasJob)

// can delete properties later
delete tom.hasJob
console.log(tom.hasJob)

// 2. Computed properties
// key chould be always string
console.log(tom.name)
console.log(tom['name']) // When determined at runtime
tom['hasJob'] = true
console.log(tom.hasJob)

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(tom, 'name')
printValue(tom, 'age')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('kim', 30)
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
    // this = {}
    this.name = name,
    this.age = age
    // return this
}

// 5. in operator: property existence check (key in obj)
console.log('name' in tom)
console.log('age' in tom)
console.log('random' in tom)
console.log(tom.random)

// 6. for..in vs for..of
// for (key in obj)
console.clear()
for(key in tom) {
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5]
for(value of array) {
    console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'mini', age : '10' }
const user2 = user
console.log(user)

// old way
const user3 = {}
for(key in user) {
    user3[key] = user[key]
}
console.clear()
console.log(user3)

const user4 = Object.assign({}, user)
console.log(user4)

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'bule', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color) // bule
console.log(mixed.size) // big