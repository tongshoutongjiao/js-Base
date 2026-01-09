let x;
let y;
let z;
let f = n => n * 100 + 100;
let active;
let queue=[];

let queueJob=(job)=>{
    if(!queue.includes(job)){
        queue.push(job)
        nextTick(flashJob)

    }
}

let nextTick=(job=>Promise.resolve().then(job))

let flashJob=(()=>{
    let job;
    while((job=queue.shift())!==undefined){
        job();
    }

})

let watch = cb => {
    active = cb;
    active();
    active = null;
}



class Dep{
    constructor(){
        this.deps=new Set()
    }
    append(){
        active&&this.deps.add(active)
    }

    notify(){
        this.deps.forEach(dep=>queueJob(dep))
    }


}


let ref = initVal => {
    let value = initVal;
    let dep=new Dep();
    return Object.defineProperty({}, 'value', {
        get() {
            dep.append()
            return value
        },
        set(newVal) {
           
            value = newVal;
            dep.notify()
        }
    })
}
x=ref(1)
y=ref(1)
z=ref(1)

watch(()=>{
    let tpl=`${x.value}${y.value}${z.value}`;
    console.log(tpl);
    document.write(tpl)
})
x.value=2;
y.value=2;
z.value=2;