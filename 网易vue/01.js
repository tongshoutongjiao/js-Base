console.log('查看异步渲染队列');
let x;
let active;
let queue=[];
let queueJob=(job)=>{
    if(!queue.includes(job)){
        queue.push(job)
        nextTick(flushJob)
    }
}

let flushJob=()=>{
    let job;
    while((job=queue.shift())!==undefined){
        job()
    }
}
let nextTick=(cb)=>Promise.resolve().then(cb)



let watch=(cb)=>{
    active=cb;
    cb();
    active=null;

}
class Dep{
    constructor(){
        this.deps=new Set()
    }
    append(fn){
        this.deps.add(fn)
    }
    notify(){
        this.deps.forEach(dep=>queueJob(dep))
    }
}

let ref=(initalVal)=>{
    let value=initalVal;
    let dep=new Dep();
    return Object.defineProperty({},'value',{
        get(){
            if(active){
                dep.append(active)
            }
            return value;
        },
        set(newVal){
            value=newVal;
            dep.notify();
            return value
        }
    })
    
}


x=ref(1);
let y=ref(2);
let z=ref(3)

watch(()=>{
    let tpl=`hello world ${x.value},${y.value},${z.value}`
    console.log(tpl)
    document.write(tpl)
})

y.value=5;
z.value=2;