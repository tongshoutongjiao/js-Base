/**
 * @Author: issuser
 * @Date: 2021-11-30
 * @Project: jsBased
 */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 手写promise地址： https://zhuanlan.zhihu.com/p/144058361
function Promise(executor) {
    let _this = this
    this.state = PENDING; //状态
    this.onFulfilled = [];//成功的回调
    this.onRejected = []; //失败的回调
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    function resolve(value) {
        if(_this.state===PENDING){
            _this.state=FULFILLED
            _this.value=value;
            _this.onFulfilled.forEach(fn => fn(value))
        }
    }
    function reject(reason) {
        if(_this.state===PENDING){
            _this.state=REJECTED;
            _this.reason=reason;
            _this.onRejected.forEach(fn=>fn(reason))
        }


    }
    try {
        executor(resolve,reject)
    }catch (e){
        reject(e);
    }

}

Promise.prototype.then = function (onFulfilled, onRejected) {

    let _this=this;
    onFulfilled=typeof onFulfilled==='function'?onFulfilled:value=>value
    onRejected=typeof onRejected==='function'?onRejected:reason=>{throw reason}






    let promise2 = new Promise((resolve, reject)=>{
        if(_this.state===FULFILLED){
            setTimeout(()=>{
                try {
                    let x=onFulfilled(_this.value)
                    resolvePromise(promise2,x,resolve,reject)
                }catch (e){
                    reject(e)
                }
            })

        }else if(_this.state===REJECTED){

            setTimeout(()=>{
                try {
                    let x=onRejected(_this.reason)
                    resolvePromise(promise2,x,resolve,reject)

                }catch (e){
                    reject(e)
                }
            })






        }else if(_this.state===PENDING){
            _this.onFulfilled.push(()=>{
              setTimeout(()=>{
                  try {
                      let x=onFulfilled(_this.value)
                      resolvePromise(promise2,x,resolve,reject)
                  }catch (e){
                      reject(e)
                  }
              })
            })
            _this.onRejected.push(()=>{
              setTimeout(()=>{
                  try {
                      let x=onRejected(_this.reason);
                      resolvePromise(promise2,x,resolve,reject)

                  }catch (e){
                      reject(e)
                  }
              })
            })

        }



    })
    return promise2

};

/**
 *
 * @param promise 新的Promise对象
 * @param x 上一个then的返回值
 * @param res promise2的resolve
 * @param rej promise2的reject
 */
function resolvePromise(promise,x,res,rej){
    if (promise === x) {
        rej(new TypeError('Chaining cycle'));
    }

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        //函数或对象
        let used;

        try {
            let then = x.then;
            if(typeof then === 'function'){
                then.call(x, (y)=>{
                    if (used) return;
                    used=true;
                    resolvePromise(promise, y, res, rej)
                }, (r) =>{
                    if (used) return;
                    used = true
                    rej(r)
                })
            } else {
                if (used) return;
                used = true
                res(x)
            }




        } catch(e){
            if (used) return;
            used = true
            rej(e)
        }

    } else {
        //普通值
        res(x)
    }


}

