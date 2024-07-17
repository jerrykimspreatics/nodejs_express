//모듈 설치 - npm install express
//npm install ejs
const express = require('express')
const app = express()
const PORT = 8000;

//뷰 템플릿
app.set('view engine', 'ejs')
//생략 가능함 : 반드시 views 폴더로 만듬
app.set('views', './views')

//정적 파일(css, js, images)
app.use(express.static(__dirname + '/public'))

//body-parser 사용하기
//app.use(express.urlencoded({extended: true}))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    //res.send("Hello Express!!")
    //res.send("<h2>Hello Express!!</h2>")
    //index.ejs
    res.render('index');
})

app.get('/test', (req, res) => {
    res.render('test', {name: 'Jerry'})
})

app.get('/gugu', (req, res) => {
    res.render('gugudan', {dan: 4})
})

app.get('/fruit', (req, res) => {
    res.render('fruits', {
        fruits: [
            {name: 'watermelon', kor: '수박'},
            {name: 'grape', kor: '포도'},
            {name: 'strawberry', kor: '딸기'},
        ]
    })
})

// 폼 관련
app.get('/form', (req, res) => {
    res.render('forms');
})

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result', {
        title: 'GET 요청 결과',
        userInfo: req.query
    });
})

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', {
        title: 'POST 요청 결과',
        userInfo: req.body
    });
})

//회원 가입
app.get("/signupForm", (req, res) => {
    res.render('signupForm');
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.render('memberList', {
        memberInfo: req.body
    })
})


app.listen(PORT, () => {
    console.log(`포트: ${PORT}에서 서버 실행중`);
})