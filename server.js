const http = require('http');

const users = [
    {
        id: 1,
        name: "Aamir Mahmood"
    },
    {
        id: 2,
        name:  "Shahid Afridi"
    },
    {
        id: 3,
        name: "Hassan Ali"
    }
]

const server = http.createServer((req , res)=>{

    //listen to request...
        console.log(req.method);

    //Send some headers.... Headers are automatically managed by the express framework.
        //res.setHeader('content-type' , 'text/plain');
         //res.setHeader('Content-Type' , 'text/html');
         //res.setHeader('content-type' , 'application/json');

    //we can write headers line by line using setHeader function 
    // ================or=========================== 
    //can write as header object using writeHead function

    //use writeheader to write the data into headers as object...
        const STATUS_CODE = 404;
        res.writeHead(
            STATUS_CODE,
            {
                'content-type' : 'application/json',
            }
        );     

    //write to response....
        //res.write("<h1>Welcome to Api</h1>")

    //end  the response...
        res.end(JSON.stringify(
            {
                success: false,
                error :  'No Data Found',
                data : null
            }
        ));
});

const PORT = 5000;

server.listen(PORT,()=>console.log(`Server Listening at port ${PORT}`));