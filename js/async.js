console.log('查看异步编程的结果');

function testWait() {
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                console.log("testWait");
                resolve({code:200,message:'执行成功'});
            }, 1000);
        })
    }
    async function testAwaitUse(){
        let data=await testWait();
        console.log(data);
        console.log("hello");
        return 123;
        // 输出顺序：testWait，hello
        // 第十行如果不使用await输出顺序：hello , testWait
    }
    console.log(testAwaitUse());

    //  如何深入理解异步编程的核心 promise

    // 1 Promise 内部究竟有几种状态？
    // 2 Promise 是怎么解决回调地狱问题的？

//  Promise 的基本情况

//如果一定要解释 Promise 到底是什么，简单来说它就是一个容器，里面保存着某个未来才会结束的事件（通常是异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。

// Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。我们来简单看一下 Promise 实现的链式调用代码，如下所示。

//  trunk函数
let isType = (type) => {
    return (obj) => {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
}

let isString = isType('String');
let isArray = isType('Array');



isString("123");    // true
isArray([1,2,3]);   // true








