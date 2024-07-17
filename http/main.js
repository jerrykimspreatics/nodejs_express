//서버에 파일 표시하기
const http = require('http')
const fs = require('fs')
const PORT = 8000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(404);
            res.end(err.message);
            return;
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    })
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})