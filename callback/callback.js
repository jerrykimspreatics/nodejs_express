//동기 처리
// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);

//문제가 있는 코드
//마트에 가서
function goMart(){
    console.log("마트에서 어떤 음료를 살 지 고민");
}

//음료 결정(3초 소요)
function pickDrink(){
    setTimeout(() => {
        console.log("고민끝");
        product = "제로콜라";
        price = 3000;
    }, 3000);
}

//지불
function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;
goMart();
pickDrink();
pay(product, price);