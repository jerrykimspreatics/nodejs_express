// Promise chain
let add = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = num1 + num2;
            resolve(result);
        }, 1000);
    })
}

let mul = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = num * 2;
            resolve(result);
        }, 700);
    })
}

let sub = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = num - 2;
            resolve(result);
        }, 500);
    })
}

/*
add(4, 3)
    .then((res) => {
        console.log("add: ", res);
        return mul(res);
    })
    .then((res2) => {
        console.log("mul: ", res2);
        return sub(res2);
    })
    .then((res3) => {
        console.log("sub: ", res3);
    })
*/

//실습
let call = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

let back = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

let hell = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('callback hell');
        }, 1000);
    })
}

call('Jerry')
    .then((name) => {
        console.log(`${name}, 반가워!!`);
        return back();
    })
    .then((text) => {
        console.log(`${text}을 실행했구나!`);
        return hell();
    })
    .then((msg) => {
        console.log(`여기는 ${msg}`);
    })
