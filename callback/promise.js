// Promise 함수
//flag - 상태 변수(true/false)
function promiseFunc(flag){
    return new Promise((resolve, reject) => {
        if(flag){
            resolve(`promise 상태는 fullfilled, then으로 연결됨`)
        }else{
            reject(`promise 상태는 rejected, catch로 연결됨`)
        }
    })
}

//사용(true, false 경우 전달)
/*
promiseFunc(true)
    .then(function(message){
        console.log(message);
    })
    .catch(function(err){
        console.log(err);
    })
*/

//마트 예제
function goMart(){
    console.log(`어떤 음료를 살 지 고민함`);
}

//Promise 클래스 생성
function pickDrink(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("고민 끝");
            product = '과일 주스';
            price = 3000;
            resolve();
        }, 2000);
    });
}

// function pay(){
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

goMart()
// pickDrink().then(pay)
pickDrink()
    .then(()=> {
        console.log(`상품명: ${product}, 가격: ${price}`);
    })