/**
 * @Author: issuser
 * @Date: 2021-11-30
 * @Project: jsBased
 */

const PENDING="pending";
const RESOLVED="resolved";
const REJECTED="rejected";

class MyPromise{
    constructor(fn) {
        this.state=PENDING;
        this.resolvedHandlers=[];
        this.rejectedHandlers=[];
        fn(this.resolve.bind(this),this.reject.bind(this))
        return this
    }
    resolve(props){
        setTimeout(()=>{
            this.state=RESOLVED;
            const resolveHandler=this.resolvedHandlers.shift();
            if(!resolveHandler) return;
            const result=resolveHandler(props);
            if(result &&result instanceof MyPromise){
                result.then(...this.resolvedHandlers)

            }

        })
    }

    reject(error){
        setTimeout(()=>{
            this.state=REJECTED;
            const rejectHandler=this.rejectedHandlers.shift();
            if(!rejectHandler) return;
            const  result=rejectHandler(error);
            if(result&&result instanceof MyPromise){
                result.catch(...this.rejectedHandlers)
            }
        })
    }
    then(...handlers){
        this.resolvedHandlers=[...this.resolvedHandlers,...handlers];
        return this;

    }
    catch(...handlers){
        this.rejectedHandlers=[...this.rejectedHandlers,...handlers];
        return this;

    }
}

MyPromise.all=function (promises){
    return new MyPromise((res,rej)=>{
        const result=[];
        for(let i=0;i<promises.length;i++){
            promises.then(res=>{
                result.push(res);
                if(result.length===promises.length) res(result)
            }).catch(rej)
        }
    })
}

MyPromise.race=function (promises){
    return new MyPromise((res,rej)=>{
        for(let i=0;i<promises.length;i++){
            const promise=promises[i];
            promise.then(res).catch(rej)
        }
    });

}