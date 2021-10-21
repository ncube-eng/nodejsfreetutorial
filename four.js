const fs = require('fs');


//for async we need a callback function

fs.readFile('./context/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log(result);
    }
})