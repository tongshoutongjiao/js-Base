// const koa=require('koa');
// const router=require('koa-router');

// let server=new koa();

// server.use(async (ctx,next)=>{
//     ctx.set('Access-Control-Allow-Origin','*');
//     await next()
// })
// let r1=router();
// r1.get('/list',async ctx=>{
//     res.body=[
//         {name:'毛巾',price:'3',sales:'456789'},
//         {name:'电脑',price:'6889',sales:'6883232'},

//         {name:'24k金手表',price:'358',sales:'8531'},
//         {name:'玩具',price:'80',sales:'6789'},
//         {name:'衣服',price:'832',sales:'799'},
//         {name:'毛巾',price:'3',sales:'456789'},
//         {name:'电脑',price:'6889',sales:'6883232'}
//       ]

// })
// console.log(server);
// server.use(r1.routers());
// server.listen(8081);
//使用
var koa = require('koa');
var koaRouter = require('koa-router');

var port = 8081;

//application 应用
var app =new koa();
var router = koaRouter();

router.get('/', function *(){
    this.body = 'home';
});

router.get('/about', function *(){
    this.body = 'aoubt';
});

//参数说明: 生成器函数 访问回调函数
// app.use(function*(){
//  this.body = 'hello world';
// });

app.use( router.routes() );

app.listen(port);
console.log( 'your app is runing on '+port );

