console.log('基础班深拷贝');

// deepClone


//  深拷贝传递进来的对象
function deepClone(obj){

    //  判断是否是对象

    let newObj={};

    for(let key in obj){
        if(typeof obj[key]==='object'){
            newObj[key]=deepClone(obj[key])
        }else{
            newObj[key]=obj[key]
        }
    }
    return newObj

}


let obj1={a:1,b:2,c:{a:1,b:2}};
console.log(obj1);

let obj2=deepClone(obj1);

console.log(obj2)