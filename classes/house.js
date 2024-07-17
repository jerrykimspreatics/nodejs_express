// 클래스
class House{
    //생성자
    constructor(type){
        this.type = type;
    }

    print(){
        console.log(`${this.type}에 삽니다.`);
    }

    door(){
        console.log("문을 열고 닫습니다.");
    }
}
// 인스턴스 생성
const house1 = new House("빌라");
house1.print();
house1.door();

//상속
class Villa extends House{
    constructor(type, floor){
        super(type);
        this.floor = floor;
    }

    elevator(){
        console.log(`${this.floor}층까지 있습니다.`)
    }

    //메서드 오버라이딩
    door(){
        console.log("현관문을 열고 닫습니다.");
    }
}

const myVilla = new Villa("파라다이스 빌라", 5);
myVilla.print();   //상속 메서드
myVilla.door();
myVilla.elevator();