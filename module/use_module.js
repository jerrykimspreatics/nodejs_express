const connect = require('./module1')
const calculator = require('./module2')
// const {add, subtract} = require('./module2')

//모듈1
const result = connect()
console.log(result);

//모듈2
console.log(calculator.add(3, 4))
console.log(calculator.subtract(3, 4))

//모듈2 객체 구조 분해
// console.log(add(3, 4));
// console.log(subtract(3, 4));
