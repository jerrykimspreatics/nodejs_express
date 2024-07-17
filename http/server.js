const http = require('http')

const server = http.createServer((req, res) => {
    res.write("<h2>hello httpServer!</h2>")
    res.end("end")
})

server.listen(8000, () => {
    console.log(`http://localhost:8000`);
})