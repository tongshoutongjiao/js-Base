function testPromist(){
  return new Promise(function(res,rej){
        setTimeout(()=>{
            console.log('函数执行完毕,等待传参结果了')
            res({code:'200',message:'成功结果'})
        },1000)

    })
}


let p=testPromist()


setTimeout(function(){
    p.then(res=>{
        console.log('此时再执行函数');
        console.log(res);
    })
},3000)