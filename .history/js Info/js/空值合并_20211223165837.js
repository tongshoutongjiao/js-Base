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

let arr = [1, -2, 3, -5];
let k = arr.length;

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
console.log("查看arr的值");
console.log(arr);

let ask = (question, yes, no) => {
  console.log("查看arr中的数据");
  alert("111");
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agress?",
  () => alert("You Agree"),
  () => alert("You canceled the execution.")
);


function deepClone(target,origin){
    for(let key in origin){
        if(typeof origin[key]==='object'&&key!==null){
            target[key]=deepClone(origin[key])
        }else{
            target[key]=origin[key];
        }

    }

    return target;

}

let calculator={
    read(){
        let val=prompt('请输入大于1的数','')
        this.val=Number(val);
        let val2=prompt('请输入大于1的数','');
        this.val2=Number(val2)

    },
    sum(){
        return Number(this.val)+Number(this.val2)
    },
    mul(){
        return this.val*this.val2
    }
}




