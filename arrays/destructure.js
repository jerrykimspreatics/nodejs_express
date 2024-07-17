//구조 분해 햘당(destructuring assignment)
//배열 구조 분해 할당
let list = ['banana', 'apple', 'peach'];

// let [fruit1, fruit2, fruit3] = list;
// console.log(fruit1, fruit2);

let [fruit1, fruit2, fruit3, fruit4='grape'] = list;
console.log(fruit1, fruit2, fruit3, fruit4);

//요소 수정
fruit1 = "orange";
console.log(fruit1);

//전체 조회
list.forEach(element => {
    console.log(element);
});

//교환(swap)
let x = 1, y = 2;
console.log(x, y);

[x, y] = [y, x]
console.log(x, y);

//객체 구조분해 할당
const obj = {
    id: "know123",
    age: 5,
    gender: 'M',
    friends: ['Luna', "John"]
}

const { gender, id, age } = obj;
console.log(gender, id, age);
