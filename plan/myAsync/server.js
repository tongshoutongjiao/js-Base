const  express=require('express');
const app=express();
app.use(express.static('public'));

app.post('/phoneLocation',(req,res)=>{
    setTimeout(()=>{
        res.json({
            success:true,
            obj:{
                province: '广东',
                city:'深圳'
            }
        })
    },1000)

});

// 返回面值列表
app.post('/faceList', (req, res) => {
    setTimeout(() => {
        res.json(
            {
                success: true,
                obj:['20元', '30元', '50元']
            }

        )
    }, 1000);
});







app.listen(3000,()=>{
    console.log('server start')
});
