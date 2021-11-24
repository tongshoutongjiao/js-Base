const http=require('http');

let server=http.createServer(function(req,res){
    console.log(req.headers)
    res.setHeader('Access-Control-Allow-Origin','*')
    res.write('abc');

    setTimeout(function(){
        res.write('abc');
        res.end();

    },Math.floor(Math.random()*20000))
    // res.end();
})
server.listen(8090)