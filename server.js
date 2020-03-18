const http = require('http');

const server = http.createServer((req , res)=>{

    //listen to request...
    console.log(req.method);

    //write to response....
    res.write("Welcome to Api")

    //end  the response...
    res.end();
});

const PORT = 5000;

server.listen(PORT,()=>console.log(`Server Listening at port ${PORT}`));