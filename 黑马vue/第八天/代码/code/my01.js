const fs=require('fs');
const path=require('path');

function getFileByPath(pathUrl,succCb,errCb){
    fs.readFile(pathUrl,'utf-8',(err,dataStr)=>{
        if(err) return errCb(err);
        succCb(dataStr)
    })  
}


getFileByPath(path.join(__dirname,'./files/1.txt'),(dataStr)=>{
    console.log(dataStr)
    getFileByPath(path.join(__dirname,'./files/2.txt'),(dataStr)=>{
        console.log(dataStr)
        getFileByPath(path.join(__dirname,'./files/3.txt'),(dataStr)=>{
            console.log(dataStr)
        })
    })
})
