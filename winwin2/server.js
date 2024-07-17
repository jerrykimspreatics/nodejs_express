//모듈 설치 - npm install express
//npm install ejs
const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8000;

//mysql connect
//npm install mysql2
const conn = require("./config/db_local.js")

//뷰 템플릿
app.set('view engine', 'ejs')
//생략 가능함 : 반드시 views 폴더로 만듬
app.set('views', './views')

//정적 파일(css, js, images)
//app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))

//body-parser 사용하기
//app.use(express.urlencoded({extended: true}))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

//파일 업로드
let storage = multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "./public/uploads");
    },
    filename: function (req, file, done) {
        //확장자 추출
        const ext = path.extname(file.originalname);
        //파일이름 추출(중복시 시간이 포함된 파일 이름)
        const savedname = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, savedname);
    },
});
    
//router
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

//문의 게시판(검색)
app.get('/contactlist', (req, res) => {
    let kw = req.query.keyword;
    console.log(kw);

    if(kw){
        let sql = `select * from contact where title like "%${kw}%" order by id desc`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            res.render('contactlist', {lists: results, kw:kw})
        });
    }else{
        let sql = `select * from contact order by id desc`;
        conn.query(sql, (err, results) => {
            if(err) throw err;
            res.render('contactlist', {lists: results, kw:kw})
        });
    }
})

// 문의하기
let upload = multer({ storage: storage });
app.post('/contact', upload.single('userfile'), (req, res) => {
    /*
    const username = req.body.username;
    const email = req.body.email;
    const title = req.body.title;
    const content = req.body.content;
    */
    //구조 분해 할당
    const { username, email, title, content } = req.body;

    // 파일
    console.log(req.file);
    let filename = "";
    if (req.file !== undefined) {
        filename = `/uploads/${req.file.filename}`;
    }

    let sql = `insert into contact (username, email, title, content, filename, regdate)
            values ("${username}", "${email}", "${title}", "${content}", "${filename}", now())`;

    conn.query(sql, function(err, results){
        if(err) throw err;
        res.send("<script>alert('문의 사항이 등록되었습니다.'); location.href='/contactlist'</script>");
    })
})

//문의 상세보기
app.get("/detail/:id", (req, res) => {
    let id = req.params.id;

    let sql = "select * from contact where id = ?"
    conn.query(sql, [id], (err, results) => {
        if(err) throw err;
        if(results.length === 0){
            res.status(400).send("요청하신 데이터를 찾을 수 없습니다.")
        }else{
            const contact = results[0]
            res.render('detail', {contact: contact})
        }
    })
})


app.listen(PORT, () => {
    console.log(`포트: ${PORT}에서 서버 실행중`);
})