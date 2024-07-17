//배열 합치기
const a = [1, 2, 3];
const b = [4, 5];

const concat = a.concat(b);
console.log('concat:', concat);

//spread 연산자(...)
const spread = [...a, ...b];
console.log('spread:', spread);

//객체
const obj = {
    name: "Jerry",
    age: 6
}

console.log(obj);
//얕은 복사
console.log({...obj});

//깊은 복사 - 원래 객체를 안전하게 유지하면서도 필요한 변경을 할 수 있음
const newObj = { ...obj }
newObj.age = 16;
console.log("newObj", newObj);
console.log("obj", obj);

obj.age = 26;
console.log("obj", obj);

const str = "hello";
//배열로 출력
console.log([...str]);

//rest 파라미터
function get(a, b, c, ...rest){
    console.log(a, b, c);
    console.log(rest);
}
const arr = [10, 20, 30, 40, 50, 60];
get(...arr);

//실습
const word1 = "abc";
const word2 = "def";
const newword = [...word1, ...word2]
console.log(newword);