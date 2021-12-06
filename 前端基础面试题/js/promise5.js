/**
 * @Author: issuser
 * @Date: 2021-12-06
 * @Project: jsBased
 */

let  p=new Promise(function (res,rej){

    setTimeout(function (){
        res('42')
    },100)

})

let p2=new Promise(function (res,rej){
    setTimeout(()=>{
        res('p2 函数结果决议')
    },0)
})
console.log('查看结果 promise5');
console.log(p)
p.then(function (res){
    console.log('查看执行结果');
    console.log(res);
    return p2
}).then(res=>{
    console.log('第二部问题');
    console.log(res);

},err=>{
    console.log('错误捕获函数');
    console.log(err);
    return 42
})

let p3=new Promise(function (res,rej){

    setTimeout(()=>{
        console.log('查看结果');
        res('p2')
    },0)

})
p3.then(res=>{
    console.log('查看结果');
    console.log('p2')

},err=>{
    console.log('err');
    console.log(err)
})