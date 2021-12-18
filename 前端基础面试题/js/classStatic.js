/**
 * @Author: issuser
 * @Date: 2021-12-14
 * @Project: jsBased
 */

class Foo{
    static cool(){
        console.log("cool")
    }

    wow(){
        console.log("wow")
    }
}

class Bar extends Foo{
    static awesome(){
        super.cool();
        console.log("awesome")
    }
    neat(){
        super.wow();
        console.log("neat")
    }
}

Foo.cool();
Bar.cool();
Bar.awesome();

var b=new Bar();
b.neat();

b.awesome;
b.cool;

let s=new Set();
let x={
    id:1
}

let y={
    id:2
}
s.add(x).add(y)

let keys=[...s.keys()]
let values=[...s.values()]
let entries=[...s.entries()];
console.log(keys);
console.log(values);
console.log(entries);

// Array.of 的用法
class MyCoolArray extends Array{

    sum(){
        return this.reduce(function (acc,curr){
            return acc+curr
        },0)
    }
}

let xs=new MyCoolArray(3);
let ys=[3];
let zs=MyCoolArray.of(3)