// create a node.js sever using only node.js that serves a simple "hello word" message at athe root url.

const http =require('http');
const server =http.createServer((req,res) => {
    res.end('Hello world');

});
const PORT =3000;
server.listen(PORT ,() => {
    console.log(`server is running at http://localhost:${PORT}`);

});