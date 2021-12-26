// 空值合并运算符
// let a;
// let b = "测试";
// let val = a ?? b;
// console.log(val);

// function getNum(val) {
//   if (val <= 1) {
//     alert("请输入大于1的数");
//   }
//   nextPrime: for(let i=2;i<val;i++){
//     //   console.log('查看所有从2到val本身的元素')
//     //   console.log(i);

//       for(let j=2;j<i;j++){
//           if(i%j==0){
//               console.log(i);
//               continue nextPrime;
//           }
//       }
//       alert(i)

//   }
// }

// let val = prompt("请输入要判断的值");
// getNum(val);

//

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }
//   function checkAge(age) {

//     return (age > 18) || confirm('Did parents allow you?');
//   }

// function pow(m,n){
//     let mult=1;
//     for(let i=0;i<n;i++){
//         mult*=m
//     }

//     return mult

// }

// let val=  pow(3,2);
// console.log(val)

// 最大子序列

// let arr = [1, -2, 3, -5];
// let k = arr.length;

// 每一种情况的累加和计算出来
// n=1 1 (0)
// n=2 3 (0,0,1)
// n=3 6 (0,0,0,1,2,1) 2/3
// n=4 10
// n=5 15
// n=6 21
// n=7 28
// n=8 36
// n=9 45
// n=10 55

//  情况的可能性

// function getPossible(n){
//     let sum=1;
//     if(n==1){
//       return  sum;
//     }
//     return getPossible(n-1)+n;

// }

// function randomArr(n){
//     let arr=[];

//     for(let i=0;i<n;i++){

//         let item=Math.round(Math.random()*100);

//         arr.push(item)

//     }

//     return arr;

// }

// function getMax(n){
//     let arr=randomArr(n);
//     let obj={
//         addCount:0
//     }

//     let k=arr.length;

//     let sumTmp=0;
//     let sumMax=0;
//     let addArr=[]
//     let test2=0;
//     let test3=0;
//     for(let p=0;p<k;p++){

//         for(let q=p;q<k;q++){

//             let addVal=0

//             test2++
//             test3=test3+q-p;

//                     for(let i=p;i<q;i++ ){
//                         sumTmp+=arr[i];
//                        if(p===q){
//                          addVal=0;

//                        }else{
//                         addVal++;
//                        }

//                     }
//                     addArr.push(addVal);
//                     addVal=0

//                     if(sumTmp>0&&sumTmp>sumMax){
//                         sumMax=sumTmp;
//                     }
//                     sumTmp=0
//         }
//     }

//     let val=test3/test2;
//     console.log('比例')
//     console.log(val);

//     let sumVal=0;

//     addArr.reduce(function(prev,cur,next){
//         sumVal+=cur
//     },sumVal)

//     return {
//         obj,
//         arr,
//         addArr:sumVal/addArr.length,
//         sumMax
//     }

// }

// let map=new Map()

// function getSum(start,end,arr){
//     let sum=0;
//     for(let i=start;i<end;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }

//  函数值表达式
// console.log("查看arr的值");
// console.log(arr);

// let ask = (question, yes, no) => {
//   console.log("查看arr中的数据");
//   alert("111");
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agress?",
//   () => alert("You Agree"),
//   () => alert("You canceled the execution.")
// );

function deepClone(target, origin) {
  for (let key in origin) {
    if (typeof origin[key] === "object" && key !== null) {
      target[key] = deepClone(origin[key]);
    } else {
      target[key] = origin[key];
    }
  }

  return target;
}

// let calculator = {
//   read() {
//     let val = +prompt("a", "");
//     this.val = val;
//     let val2 = +prompt("b", "");
//     this.val2 = val2;
//   },
//   sum() {
//     return Number(this.val) + Number(this.val2);
//   },
//   mul() {
//     return this.val * this.val2;
//   },
// };

// let obj={
//     name:'john'
// }
// function A(){
// return obj

// }
// function B(){
//     return obj

// }
// let a=new A;
// let b=new B;

// alert(a===b)

// function read() {
//   let val = +prompt("a", "");
//   this.val = val;
//   let val2 = +prompt("b", "");
//   this.val2 = val2;
// }
// function sum() {
//   return this.val + this.val2;
// }
// function mul() {
//   return this.val * this.val2;
// }

// function Calculator(){
//     this.read=read;
//     this.sum=sum;
//     this.mul=mul
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("value", "");
  };
}
let acc = new Accumulator(1);

// 可选链

// let user = {}; // user 没有 address 属性
// let val=user?.address;
// console.log(val)

// // alert( user?.address?.street ); // undefined（不报错）

// let styles=['Jazz',"Blues"];

// styles.push('Rock-n-Roll');

// let num=(styles.length)%2;
// console.log(num)
// styles[num]='Classics';
// console.log(styles.shift());
// styles.unshift('Rap','Reggae')
// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// console.log('查看数组')
// console.log(arr)

// let testArr = [-1, 2, 3, -9, 11];
// function getMaxSubSum(arr) {
//   let maxSubSum = arr[0];
//   let tempSum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       tempSum += arr[j];
//       maxSubSum = Math.max(tempSum, maxSubSum);
//     }
//     tempSum = null;
//   }

//   return maxSubSum;
// }

// function getMax2(arr) {
//   let k = arr.length;
//   let tempSum = arr[0];
//   let maxSum = arr[0];
//   let classObj = [];
//   for (let p = 0; p < k; p++) {
//     for (let q = p; q < k; q++) {
//       for (let i = p; i <= q; i++) {
//         // p==q的情况忽略
//         tempSum += arr[i];
//         if (tempSum > maxSum) {
//           maxSum = tempSum;
//         }
//       }
//       classObj.push({
//         range: [arr[p], arr[q]],
//         tempSum,
//       });

//       tempSum = null;
//     }
//   }
//   console.log(classObj);
//   return maxSum;
// }

// function getMax3(arr) {
//   let maxSum = null;
//   let partialSum = null;

//   for (let item of arr) {
//     partialSum += item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   return maxSum;
// }
// alert(getMaxSubSum([-1, 2, 3, -9])); // 5
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// alert(getMaxSubSum([-2, -1, 1, 2])); // 3
// alert(getMaxSubSum([1, 2, 3])); // 6
// alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100

// alert(getMaxSubSum([-4, -40, -100, -30])); //
// alert(getMax2([-4, -40, -1, -30])); //
// alert(getMax2([-1, 2, 3, -9, 11])); // 11
// alert(getMax2([-2, -1, 1, 2])); // 3
// alert(getMax2([1, 2, 3])); // 6
// alert(getMax2([100, -9, 2, -3, 5])); // 100

// 编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”

// let str='my-short-string';

// function camelize(str){
//   return str
//   .split('-')
//   .map((item,index)=>{
//     return item=index==0?item:item[0].toUpperCase()+item.slice(1)
//   }).join('');

// }

// function camelize(str){
//   let arr= str.split('-');
//   arr.forEach((item,index)=>{
//       if(index===0) return;
//       let strArr=item.split('');
//       strArr[0]= strArr[0].toUpperCase();
//       item='sasa';
//       item=strArr.join('');
//       console.log('查看item');
//       console.log(item)
//   })
//   console.log('查看arr');
//   console.log(arr);

//   return arr.join('');

// }

// let newStr=camelize(str);
// console.log(newStr)

// let arr = [5, 3, 8, 1];

// function filterRange(arr,a,b){
//   return arr.filter((item)=>{
//      return (item>=a&&item<=b)
//   })

// }
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)

// 写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

// 该函数应该只修改数组。它不应该返回任何东西。
// let arr = [5, 3, 2, 1,0,5,2,5];

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let item=arr[i];
//     if(a<=item&&item<=b){
//       continue
//     }
//     arr.splice(i,1);
//     // i--;
//   }
// }

//  数组塌陷的过程
// i=0; item=5; 删除第一项  [3,2,1,0,5,2,5]
//  i=1; item=2; 继续，[3,2,1,0,5,2,5]
//  i=2; item=1; 继续,[3,2,1,0,5,2,5]
// i=3;item=0; 删除i，第四项[3,2,1,5,2,5]
// i=4;item=2; 继续  [3,2,1,5,2,5]
// i=5;item=5; 删除第五项 [3,2,1,5,2]




// filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

// alert(arr); // [3, 1]


// function Calculator(){
//   this.methods={
//     "-":(a,b)=>a-b,
//     "+":(a,b)=>a+b
//   }
//   this.calculate=function( ){
//     let split=str.split(' '),
//     a=+split[0],
//     op=split[1],
//     b=+split[2];
//     if(!this.methods[op]||isNaN(a)||isNaN(b)){
//       return NaN
//     }
//     return this.methods[op](a,b)
//   };
//   this.addMethod=function(name,func){
//     this.methods[name]=func;
//   }



// }


// let calc=new Calculator();
// let sum=calc.calculate('3 + 7')
// calc.addMethod("**",(a,b)=>a**b)
// let res=calc.calculate("2 ** 3")


// 
// function unique(arr){

  //  方式一
  // return [...new Set([...arr])];

  // 方式二
  // return Array.from(new Set([...arr]))

  // 方式三
  // let obj={};
  // for(let i=0;i<arr.length;i++){
  //   let cur=arr[i];
  //   if(!obj[cur]){
  //     obj[cur]=cur
  //   }


  // }
  // return Object.keys(obj)

  //  方式四
// let res=[];
//  for(let str of arr){
//    if(!res.includes(str)){
//      res.push(str)
//    }

//  }

// 方式五
// let map=new Map();
// for(let str of arr){
//   if(!map.get(str)){
//     map.set(str,str)
//   }
  
// }
// console.log(map.keys())
// console.log(Array.from(map.values()))


// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(strings))

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function groupById(users){

//  return users.reduce((acc,cur,index)=>{
//    console.log(cur)
//    acc[cur.id]=cur


//    return acc

//   },{})

// }

// let usersById = groupById(users);

// console.log('userById');
// console.log(usersById)


// let range={
//   from:1,
//   to:5,
// }
// range[Symbol.iterator]=function(){
//   return {
//     current:this.from,
//     last:this.to,
//     next(){
//       if(this.current<=this.last){
//         return {done:false,value:this.current++}

//       }else{
//         return {done:true}
//       }

//     }
//   }
// }


// for(let val of range){
//   console.log('查看迭代对象的值')
//   console.log(val)

// }

//  显示调用
// let str='test';
// let res=str[Symbol.iterator]()
// while(true){
//  let iterator= res.next()
//  if(iterator.done) break;
//  console.log(iterator.value)

// }

// let range={
//   from:1,
//   to:5,
  
//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };
// let arr=Array.from(range,num=>num*num);
// console.log(arr)


let obj = {
  name: "John",
  age: 30
};
// console.log(Object.entries(obj))

// let map=new Map(Object.entries(obj));
// console.log(map)

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr){
//   let map=new Map();
//   for(let word of arr){
//     let sorted=word.toLowerCase().split('').sort().join('');
//     map.set(sorted,word)
//    }
//    return Array.from(map.values())

// }
// let newArr=aclean(arr);
// console.log('去除掉重复的map值');
// console.log(newArr)

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices=Object.fromEntries(
//   Object.entries(prices).map(([key,value]) => [key,value*2])
// )


// console.log('newArr');
// console.log(doublePrices)

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function sumSalaries(salaries){


  
// return Object.values(salaries).reduce((a,b)=>a+b,0)



  

// }
// let sum=sumSalaries(salaries);
// console.log('查看结果');
// console.log(sum)


// let user = {
//   name: "John",
//   years: 30
// };

// let {name,years:age,isAdmin:isAdmin=false}=user;

// console.log('查看name')
// console.log(name);
// console.log('查看age');
// console.log(age);

// console.log('isAdmin');
// console.log(isAdmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function toSalary(salaries){
//   let sum=null;
//   let name=null;
//   Object.entries(salaries).forEach(([key,value])=>{
//     if(value>=sum){
//       sum=value;
//       name=key
//     }

//   })
//   return name

// }
// toSalary(salaries)

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);
// console.log(meetup)

// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 1600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// function sumSalaries(departMent){
//   if(Array.isArray(departMent)){
//     return departMent.reduce((prev,cur)=>prev+cur.salary,0)
//   }
//   else{
//     let sum=0;
//     for(let subdep of Object.values(departMent)){
//       sum+=sumSalaries(subdep)
//     }
//     return sum;

//   }



// }

// alert(sumSalaries(company))

// 方法一：使用循环
function sumTo(n){
  let sum=null;
  for(let i=0;i<=n;i++){
    sum+=i
  }
  return sum;

}
console.log(sumTo(4))