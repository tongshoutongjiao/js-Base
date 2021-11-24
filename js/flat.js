console.log('手动实现带你了解数组扁平化的六种方式')

// 数组的扁平化其实就是将一个嵌套多层的数组 array（嵌套可以是任何层数）转换为只有一层的数组。举个简单的例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果如下面这段代码所示。

// 其实就是把多维的数组“拍平”，输出最后的一维数组。那么你知道了效果是什么样的了，下面就尝试着写一个 flatten 函数吧。实现方式有下述几种。

// 方法一 普通的递归实现
// const arr=[1,2,3,[2,3,4,[1,2,3],8,9],[4,5,6]];

// function flatten(arr){
//     let newArr=[];

//     if(!Array.isArray(arr)){
//         throw new Error('请传入数组,谢谢')
//     }


//     for(let i=0;i<arr.length;i++){
//         let cur=arr[i];
//         if(Array.isArray(cur)){
//             newArr= newArr.concat(flatten(cur))
//         }else{
//             newArr.push(cur)
//         }

//     }

//     return newArr

// }

// console.log('查看结果')
// let newArr=flatten(arr);
// console.log(arr)
// console.log(newArr);


//  方法二：利用 reduce 函数迭代

//从上面普通的递归函数中可以看出，其实就是对数组的每一项进行处理，那么我们其实也可以用第 7 讲中说的 reduce 来实现数组的拼接，从而简化第一种方法的代码，改造后的代码如下所示。

// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//     return arr.reduce(function(prev, next){
//         return prev.concat(Array.isArray(next) ? flatten(next) : next)
//     }, [])
// }
// console.log(flatten(arr));//  [1, 2, 3, 4，5]


// 方法3
// var arr = [1, [2, [3, 4]]];


// function flatten(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         console.log('查看执行逻辑')
//         console.log(arr);
//         arr = [].concat(...arr);
//         console.log(arr);
//     }
//     return arr;
// }
// console.log(flatten(arr)); //  [1, 2, 3, 4，5]

// 方法四：split 和 toString 共同处理

// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//     return arr.toString().split(',');
// }
// console.log(flatten(arr)); //  [1, 2, 3, 4，5]

// 方法五
// 我们还可以直接调用 ES6 中的 flat 方法，可以直接实现数组扁平化。

// var arr = [1, [2, [3, 4]]];
// function flatten(arr) {
//   return arr.flat(Infinity);
// }
// console.log(flatten(arr)); //  [1, 2, 3, 4，5]


// 方法六：正则和 JSON 方法共同处理
// 我们在第四种方法中已经尝试了用 toString 方法，其中仍然采用了将 JSON.stringify 的方法先转换为字符串，然后通过正则表达式过滤掉字符串中的数组的方括号，最后再利用 JSON.parse 把它转换成数组。请看下面的代码。

let arr = [1, [2, [3, [4, 5]]], 6];
function flatten(arr) {
  let str = JSON.stringify(arr);

  console.log('查看str类型');
  console.log(str);
  str = str.replace(/(\[|\])/g, '');
  console.log(str)

  str = '[' + str + ']';
  return JSON.parse(str); 
}
console.log(flatten(arr)); //  [1, 2, 3, 4，5]