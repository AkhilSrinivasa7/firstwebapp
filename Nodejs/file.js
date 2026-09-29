//file handling
console.log("start");
let fs = require('fs');
//readFile
fs.readFile('blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})
console.log("end");