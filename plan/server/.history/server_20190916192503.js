const koa=require('koa');
const router=require('koa-router');
let server=new koa();
server.listen(8081);

let r1=router();
r1.get('/list',async ctx=>{
    resizeBy.body=[
        {name:'毛巾',price:'3',sales:'456789'},
        {name:'电脑',price:'6889',sales:'6883232'},

        {name:'24k金手表',price:'358',sales:'8531'},
        {name:'玩具',price:'80',sales:'6789'},
        {name:'衣服',price:'832',sales:'799'},
        {name:'毛巾',price:'3',sales:'456789'},
        {name:'电脑',price:'6889',sales:'6883232'}
      ]

})
server.use(r1.router)