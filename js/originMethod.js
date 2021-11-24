 console.log('原生方法的实现逻辑');

//  原生push 方法

//  将数组转化为对象，并且用对象操作的方式讲对应的值以属性的方式添加到对应的数据中

Array.prototype.push = function(...items) {
    //  将当前函数转化为对象
    let O = Object(this);  // ecma 中提到的先转换为对象

    //  利用移位运算操作获取获取数据
    let len = this.length >>> 0;
    let argCount = items.length >>> 0;

    console.log('查看无符号位移的结果');
    console.log(len);
    console.log(argCount);
    console.log(O);
    // 2 ^ 53 - 1 为JS能表示的最大正整数

    //  判断数组长度，如果超过最大位的话，直接报错
    if (len + argCount > 2 ** 53 - 1) {
      throw new TypeError("The number of array is over the max value")
    }
    for(let i = 0; i < argCount; i++) {
      O[len + i] = items[i];
    }
    let newLength = len + argCount;
    O.length = newLength;
    return newLength;
  }

//  pop 

//  转化为对象，如果数组长度是0，则直接返回undefined，使用delete方式删除掉数组的最后一项，返回删除之后的值
Array.prototype.pop = function() {
    let O = Object(this);
    let len = this.length >>> 0;
    if (len === 0) {
      O.length = 0;
      return undefined;
    }
    len --;
    let value = O[len];
    delete O[len];
    O.length = len;
    return value;
}

//  map 方法的底层实现方式

Array.prototype.map = function(callbackfn, thisArg) {

    if (this === null || this === undefined) {
      throw new TypeError("Cannot read property 'map' of null");
    }

    console.log('查看检查结果');
    console.log(Object.prototype.toString.call(callbackfn))



    if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
      throw new TypeError(callbackfn + ' is not a function')
    }


    let O = Object(this);
    let T = thisArg;
    
    let len = O.length >>> 0;
    let A = new Array(len);
    for(let k = 0; k < len; k++) {
      if (k in O) {
        let KValue = O[k];
        // 依次传入this, 当前项，当前索引，整个数组
        let mappedValue = callbackfn.call(T, KValue, k, O);
        A[k] = mappedValue;
      }
    }
    return A;
  }

//   reduce 
//  array 的reduce方法

Array.prototype.reduce  = function(callbackfn, initialValue) {
    // 异常处理，和 map 类似
    if (this === null || this === undefined) {
      throw new TypeError("Cannot read property 'reduce' of null");
    }
    // 处理回调类型异常
    if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
      throw new TypeError(callbackfn + ' is not a function')
    }
    let O = Object(this);
    let len = O.length >>> 0;
    let k = 0;
    let accumulator = initialValue;  // reduce方法第二个参数作为累加器的初始值
    if (accumulator === undefined) {  // 初始值不传的处理
      for(; k < len ; k++) {
        if (k in O) {
          accumulator = O[k];
          k++;
          break;
        }
      }
      throw new Error('Each element of the array is empty');
    }
    for(;k < len; k++) {
      if (k in O) {
        // 注意 reduce 的核心累加器
        accumulator = callbackfn.call(undefined, accumulator, O[k], O);
      }
    }
    return accumulator;
  }






