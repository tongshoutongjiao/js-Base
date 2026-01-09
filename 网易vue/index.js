let x;
let y;
let f=n=>n*100+100;
let active;
let onChange=(cb)=>{
    active=cb;
    active();
    active=null;
}

class Dep{
    constructor(){
        this.deps=new Set();
    }
    append(active){
       if(active){
        this.deps.add(active)
       }
    }
    notify(){
        this.deps.forEach(
            dep=>dep())
    }
}



function ref(value){
    // let value=initVal;
    let dep=new Dep()
    return Object.defineProperty({},'value',{
        get(){ 
           dep.append(active)
            return value
        },
        set(newVal){
            value=newVal;
            dep.notify();
        }
    })
}
x=ref(1);

onChange(()=>{
    //  执行onchange方法
    y=f(x.value);
    console.log(y)
})
x.value=2;
x.value=3;



