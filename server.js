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

 //const server = http.createServer((req , res)=>{

//     //listen to request...
//         console.log(req.body);

//     //Send some headers.... Headers are automatically managed by the express framework.
//         //res.setHeader('content-type' , 'text/plain');
//          //res.setHeader('Content-Type' , 'text/html');
//          //res.setHeader('content-type' , 'application/json');

//     //we can write headers line by line using setHeader function 
//     // ================or=========================== 
//     //can write as header object using writeHead function

//     //use writeheader to write the data into headers as object...
//         const STATUS_CODE = 404;
//         res.writeHead(
//             STATUS_CODE,
//             {
//                 'content-type' : 'application/json',
//             }
//         );     

//     //write to response....
//         //res.write("<h1>Welcome to Api</h1>")

//     //end  the response...
//         res.end(JSON.stringify(
//             {
//                 success: false,
//                 error :  'No Data Found',
//                 data : null
//             }
//         ));
// });

//Proper way to create an api response and parsing request body data....
const server = http.createServer((req , res) => {
    console.log(req);

    const {method , url} = req;

    //create a default response....
        let body = [];
        let statusCode = 404;
        const response = {
            success: false,
            data: null
        }

        
    //parse the request and send response back to user.....
        req.on('data',chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();

           if(method==='GET' && url==='/users'){
            
                statusCode = 200;
                response.success = true;
                response.data = users;

                res.writeHead(
                    statusCode,
                    {
                        'Content-Type' : 'application/json'
                    }
                );

                res.end(JSON.stringify(
                    response
                ));
           }
           else if(method==='POST' && url==='/users'){
                statusCode = 201;
                response.success = true;

                res.writeHead(
                    statusCode,
                    {
                        'Content-Type' : 'application/json'
                    }
                );

                res.end(JSON.stringify(
                    response
                ));
                
           }
           else{
                res.writeHead(
                    statusCode,
                    {
                        'Content-Type' : 'application/json'
                    }
                );

                res.end(JSON.stringify(
                    response
                ));
           }
        });    

});

const PORT = 5000;

server.listen(PORT,()=>console.log(`Server Listening at port ${PORT}`));