//  引入koa
const koa=require('koa');

// 引入router
const router=require('koa-router');

// new 一个新对象
let server=new koa();

//  监听一个服务
server.listen(8082);

//  调用路由
let r=router();

// 根据路由返回数据
r.get('/a',async ctx=>{
    ctx.body=[12,4,5,6]
})

//  在server中use
server.use(r.routes())