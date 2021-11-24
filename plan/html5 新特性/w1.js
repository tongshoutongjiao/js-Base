
// 3 接收
this.onmessage=function (data) {
    console.log('我得到了',data.data);
    //4 处理任务
    let sum=data.data.n1+data.data.n2

//     5 返回
    this.postMessage(sum)
}

