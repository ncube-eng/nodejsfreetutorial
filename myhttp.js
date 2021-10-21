//http - hypertext transfer protocol
// using an abstraction called express to setup our own webserver


const http = require('http');

//req -- request from the webuser  --response is what we sending back
const server = http.createServer((req,res)=>{
    console.log('Server started at port 3000');
    if(req.url == '/'){
        //console.log('am here now')
        res.write('Welcome to our Home page');        
       }
       else if(req.url == '/about'){
           res.write('This is the about page')
       }
       else{
           res.end(`
               <h1>Oops!</h1>
               <p>Page not found</p>
               <a href='/'>back home</a>s
           `)
       }

    //console.log(req);
    //sending response to the server
   
});

//server listens at this port
server.listen(3000);
