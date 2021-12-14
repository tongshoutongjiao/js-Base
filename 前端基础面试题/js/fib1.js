/**
 * @Author: issuser
 * @Date: 2021-12-13
 * @Project: jsBased
 */

let tasks={
    [Symbol.iterator](){
        let steps=this.actions.slice();
        return {
        //    使迭代器成为iterable
            [Symbol.iterator](){return this},
            next(...args){
                if(steps.length>0){
                    let res=steps.shift()(...args);
                    return {value:res,done:false}
                }else {
                    return {done:true}
                }

            },
            return(v) {
                steps.length=0;
                return {value:v,done:true}
            }
        }
    },
    actions:[]
}

tasks.actions.push(
    function step1(x){
        console.log("step1:",x)
        return x*2
    },
    function step2(x,y){
        console.log("step2:",x,y);
        return x+(y*2)
    },

    function step3(x,y,z){
        console.log("step3",x,y,z)
        return (x*y)+z
    }
)

let it=tasks[Symbol.iterator]();

it.next(10);

it.next(20,50)

it.next(20,50,120)

it.next()

// function *foo(){
//     let arr=[yield 1,yield 2,yield 3];
//     console.log(arr,yield 4)
// };
// let its=foo()

function *foo(x){
    if(x<3){
        x=yield *foo(x+1)
    }
    return x*2
}

let itFoo=foo(1);

// foo(1)==> x=yield foo(2)
// foo(2)==>x=yield foo(3)
// foo(3)=6
