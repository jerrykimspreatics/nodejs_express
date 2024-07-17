//모듈 설치 - npm install express
//npm install ejs
const express = require('express')
const app = express()
const PORT = 9000;

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

//json() 데이터 처리
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/ajax', (req, res) => {
    console.log('요청값: ', req.query);
    const {username, email} = req.query;
    res.send({username: `${username}님`, email: `이메일주소는 ${email}`})
})

app.post('/ajax', (req, res) => {
    console.log('요청값: ', req.body);
    const {username, email} = req.body;
    const data = {
        username: `${username}님`, 
        email: `이메일주소는 ${email}`
    }
    res.send(data);
})

//axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    const { username, email } = req.query;
    //응답
    const value = {
        result: true,
        username,
        email,
    };
    //json으로 보내기
    res.json(value);
});

app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    //응답
    const value = {
        username,
        email,
    };
    res.json(value);
});

//fetch()
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    const { username, email } = req.query;
    //응답
    const value = {
        result: true,
        username,
        email,
    };
    res.json(value);
});

app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    //응답
    const value = {
        result: true,
        username,
        email,
    };
    res.json(value);
});

app.use('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`포트: ${PORT}에서 서버 실행중`);
})