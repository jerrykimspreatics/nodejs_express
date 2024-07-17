//콜백을 사용하는 이유
//1. 비동기 작업의 완료를 처리하기 위해
//2. 비동기 작업의 순서를 제어하기 위해
//3. 이벤트기반 프로그램밍을 지원하기 위해

//비동기 처리 - 콜백함수 사용
function goMart(){
    console.log("어떤 음료 살지 고민");
}

function pickDrink(cb){
    setTimeout(() => {
        console.log("고민끝");
        product = "제로콜라";
        price = 2000;
        cb(product, price);
    }, 3000);
}

//이름있는 함수
function payCallback(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}
//함수 실행
goMart();
pickDrink(payCallback);