const http = require('node:http'); 
const HOSTNAME = 'localhost';
const PORT =  1000;
const requestListener = (req, res) =>{
    res.end("Hello world")
}
const server = http.createServer(requestListener);
server.listen(PORT, HOSTNAME,()=>{
    console.log(`http://${HOSTNAME}:${PORT}`)
})

