//하나의 모듈 파일에 여러 개의 모듈 만들기

//방법1
// const add = (x, y) => x + y
// const subtract = (x, y) => x - y

// module.exports = {add, subtract}

//방법 2
module.exports.add = function(x, y){
    return x + y;
}

module.exports.subtract = function(x, y){
    return x - y;
}