// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   console.log('abc')
// }
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// dog.eat() // abc
// monkey.eat() // abc
// monkey.constructor.prototype.eat = function () {
//   console.log('def')
// }
// dog.eat() // def
// monkey.eat() // def

// class Box {
//   constructor (num1, num2) {
//     this.num1 = num1
//     this.num2 = num2
//   }
//   // 可以直接拿对象信息
//   sum () {
//     return Box.multiply(this.num1, this.num2)
//   }

//   static multiply (num1, num2) {
//     return num1 * num2
//   }
// }
// let box = new Box(3, 2)
// console.log(box.sum())

// let s = new Set()
// // let s = new Set([1, 2, 3, 4]) // 接受的对象不只是数组，是一个可遍历的对象
// // s.add('hello')
// s.add('hello').add('bye') // 级联操作
// // s.delete('hello') // 删除指定数据
// // s.clear() // 全部清空
// // s.has('hello') // 查找
// // s.size // 数据量

// // 遍历
// s.keys() // SetIterator {"hello", "bye"}
// s.values() // SetIterator {"hello", "bye"}
// s.entries() // SetIterator {"hello" => "hello", "bye" => "bye"}
// s.forEach(item => {
//   console.log(item) // hello bye
// })
// for (let item of s) {
//   console.log(item) // hello bye
// }

// const target = {
//   b: 4,
//   c: 5
// }
// const source = null
// Object.assign(target, source)
// console.log(target)

const s = 'aaa_aa_a'
const r1 = /a+/g
const r2 = /a+/y

console.log(r1.exec(s))
