const koa=require('koa');
const router=require('koa-router');

let server=new koa();
server.listen(8082);

let r=router();
r.get('/a',async ctx=>{
    ctx.body=[12,4,5,6]
})
server.use(r.routes())