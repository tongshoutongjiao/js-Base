/**
 * @Author: issuer
 * @Date: 2021-11-29
 * @Project: jsBased
 */

// 手写promise 功能
let PENDING='pending';
let RESOLVE='resolved';
let REJECTED='rejected';

function  Promise(execute){
    let self=this;
    self.state=PENDING;
    self.onFulfilledFn=[];
    self.onRejectedFn=[];

    function resolve(value){
        setTimeout(function (){
            if(self.state===PENDING){
                self.state=FULFILLED;
                self.value=value;
                self.onFulfilledFn.forEach(function (f){
                    f(self.value)
                })
            }

        })

    }

    function  reject(reason){
        setTimeout(()=>{
            if(self.state===PENDING){
                self.state=REJECTED;
                self.reason=reason;
                self.onRejectedFn.forEach(function (f){
                    f(self.reason)
                })
            }
        })
    }

    try {
        execute(resolve,reject)
    }catch (e){
        reject(e)
    }

}



Promise.prototype.then=function (onFulfilled,onRejected){

    let promise;
    let self=this;

    onFulfilled=typeof onFulfilled==="function"?onFulfilled:function (x){
        return x;
    }

    onRejected=typeof onRejected==="function"?onRejected:function (e){
        throw e
    }


    switch (self.state){
        case FULFILLED:
            promise=new Promise(function (resolve,reject){
                setTimeout(function (){
                    try {
                     let x=   onFulfilled(self.value);

                        resolvePromise(promise,x,resolve,reject)

                    }catch (e){
                        reject(e)
                    }
                })


            })
            break;
        case REJECTED:
          promise=new Promise(function (res,rej){
              setTimeout(function (){
                  try {
                    var x=  onRejected(self.reason);
                    resolvePromise(promise,x,res,rej)


                  }catch (e){
                      rej(e)

                  }

              })
          })
            break;
        case PENDING:
           promise=new Promise(function (res,rej){
               self.onFulfilledFn.push(function (){
                   try {
                     var x=  onFulfilled(self.value);
                     resolvePromise(promise,x,res,rej)
                   }catch (e){
                       rej(e)
                   }
               })
               self.onRejectedFn.push(function (res,rej){
                   try {
                     var x=  onRejected(self.reason);
                     resolvePromise(promise,x,res,rej)
                   }catch (e){
                       rej(e)
                   }
               })

           })

            break;
    }
    return promise




}

function resolvePromise(promise,x,resolve,reject){

    // 情况一
    if (promise === x) {
        return reject(new TypeError("x 不能与 promise 相等"));
    }

    // 情况二

    if (x instanceof Promise) {
        if (x.state === FULFILLED) {
            resolve(x.value)
        } else if (x.state === REJECTED) {
            reject(x.reason)
        } else {
            x.then(function (y) {
                resolvePromise(promise, y, resolve, reject)
            }, reject)
        }
    }else if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {

        // 情況三
        let executed;
        try {
            let then = x.then;
            if (typeof then === "function") {
                then.call(x, function (y) {
                    if (executed) return;
                    executed = true;
                    return resolvePromise(promise, y, resolve, reject)
                }, function (e) {
                    if (executed) return;
                    executed = true;
                    reject(e);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (executed) return;
            executed = true;
            reject(e);
        }
    }else {
        //    情况四
        resolve(x);

    }





}