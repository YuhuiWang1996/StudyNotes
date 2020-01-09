# Object, Set, Map

## Object属性简写

```js
let x = 1
let y = 2
let z = 3
let obj = {
    x: x,
    y,
    [z + y]: 6                  // ES6
    hello: function () {        // ES5
        console.log('hello')
    }
    hello () {                  // 常规函数
        console.log('hello')    // ES6
    }
    * hello() {                 // 异步函数
        console.log('hello')
    }
}
obj[z] = 5                      // ES5
// function* functionName() {
// }
```

## Set

- 存储的数据不能是重复的

```js
let s = new Set()
let s = new Set([1,2,3,4])          // 接受的对象不只是数组，是一个可遍历的对象
s.add('hello')
s.add('hello').add('bye')           // 级联操作
s.delete('hello')                   // 删除指定数据
s.clear()                           // 全部清空
s.has('hello')                      // 查找
s.size                              // 数据量

// 遍历
s.keys()                            // SetIterator {"hello", "bye"}
s.values()                          // SetIterator {"hello", "bye"}
s.entries()                         // SetIterator {"hello" => "hello", "bye" => "bye"}
s.forEach(item => {                 // Set.prototype.forEach
    console.log(item)               // hello bye
})
for (let item of s) {
    console.log(item)               // hello bye
}
```

## Map

```js
let map = new Map([[1, 2], [3, 4]])
let map = new Map()
map.set(1, 2)                       // 添加数据，修改数据
map.set(3, 4)
map.set(1, 3)
map.delete(1)                       // 删除key
map.clear()                         // 全部清空
map.size
map.has(1)                          // 查key
map.get(1)                          // 获取值
map.keys()                          // MapIterator {1, 3}
map.values()                        // MapIterator {2, 4}
map.entries()                       // MapIterator {1 => 2, 3 => 4}

map.forEach((value, key) => {
    console.log(value, key)
})
for (let [key, value] of map) {
    console.log(key, value)
}
```

## 对象拷贝

- ES5
  - 对象遍历再赋值给另一个对象
- ES6
  - assign 浅复制
    - 引用类型，地址复制
    - 不是引用类型，值复制

```js
const target = {}
const source = { b: 4, c: 5 }
Object.assign(target, source)

const target = {}
const source = { a: { b: { c: { d: 1}}, e: 2, f: 3}}
Object.assign(target, source)

const target = { a: { b: { c: { d: 4 }}, e: 5, f: 6, h: 10 }}
const source = { a: { b: { c: { d: 1 }}, e: 2, f: 3 }}
Object.assign(target, source)                   // h也没有了 数据丢失

const target = null // undefined
const source = { b: 4, c: 5 }
Object.assign(target, source) // 异常 null不能转化成object

const target = { b: 4, c: 5 }
const source = null
Object.assign(target, source) // target还是原来的值
```
