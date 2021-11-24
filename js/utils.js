console.log('实现new,apply, bind,call 等方法');
// 1 用什么样的思路可以 new 关键词？

// new 关键字的作用: 
// 1 创建一个新对象；

// 2 将构造函数的作用域赋给新对象（this 指向新对象）；

// 3 执行构造函数中的代码（为这个新对象添加属性）；

// 4 返回新对象





// 2 apply、call、bind 这三个方法之间有什么区别?
// 先来了解一下这三个方法的基本情况，call、apply 和 bind 是挂在 Function 对象上的三个方法，调用这三个方法的必须是一个函数。

// 这三个方法共有的、比较明显的作用就是，都可以改变函数 func 的 this 指向。
// call 和 apply 的区别在于，传参的写法不同：apply 的第 2 个参数为数组； 
// call 则是从第 2 个至第 N 个都是给 func 的传参；而 bind 和这两个（call、apply）又不同，bind 虽然改变了 func 的 this 指向，但不是马上执行，而这两个（call、apply）是在改变了函数的 this 指向之后立马执行。






// 3 怎样实现一个 apply 或者 call 的方法？


// 

// let a = {
//     name: 'jack',
//     getName: function(msg) {
//       return msg + this.name;
//     } 
//   }
//   let b = {
//     name: 'lily'
//   }
//   console.log(a.getName('hello~'));  // hello~jack
//   console.log(a.getName.call(b, 'hi~'));  // hi~lily
//   console.log(a.getName.apply(b, ['hi~','json']))  // hi~lily
//   let name = a.getName.bind(b, 'hello~');
//   console.log(name());  // hello~lily


//   function _new(ctor, ...args) {
//     if(typeof ctor !== 'function') {
//       throw 'ctor must be a function';
//     }
//     let obj = new Object();
//     obj.__proto__ = Object.create(ctor.prototype);
//     let res = ctor.apply(obj,  [...args]);

//     let isObject = typeof res === 'object' && typeof res !== null;
//     let isFunction = typeof res === 'function';
//     return isObject || isFunction ? res : obj;
//  };


//  call
 Function.prototype.selfCall = function (context, ...args) {
    var con = context || window;

    // 将函数保存下来
    con.fn = this;
    console.log('查看标识')
    console.log(this);
    console.log(con)
    //  使用eval函数，在运行时执行函数
    var result = con.fn(...args);
    delete con.fn
    return result;
}



// apply
Function.prototype.selfApply = function (context, args) {
    let con = context || window;
    con.fn = this;

    //  使用eval函数，在运行时执行函数
    let result = eval('con.fn(...args)');
    delete con.fn
    return result;
}
let a={
    name:'zhl',
    getName(msg){
        return msg+this.name
    }
}

let b={
    name:'lihua'
}
console.log(a.getName('hello'));
console.log(a.getName.selfCall(b,'isRight'));






//  bind
Function.prototype.selfBind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new Error("this must be a function");
    }
    var self = this;
    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }
    if(this.prototype) {
      fbound.prototype = Object.create(this.prototype);
    }
    return fbound;
}









