/**
 * @Author: issuser
 * @Date: 2021-12-15
 * @Project: jsBased
 */

// 最大子序列和是指，给定一组序列，如 [1,-3,2,4,5]，求子序列之和的最大值，对于该序列来说，最大子序列之和为 2 + 4 + 5 = 11。
//
// 这里的子序列要求是连续的，因此也可以称其为连续子数组最大和。

// function LSS(list){
//     console.log(list)
//     const len=list.length;
//     let max=-Number.MAX_VALUE;
//     let sum=0;
//     for(let i=0;i<len;i++){
//         sum=0;
//         for(let j=i;j<len;j++){
//             sum+=list[j];
//             if(sum<max){
//                 max=sum
//             }
//         }
//     }
//     return max;
//
// }



function LSS(list) {
    const len = list.length;
    let max = -Number.MIN_VALUE;
    let sum=0;
    for (let i = 0; i < len; i++) {
        sum = 0;
        for (let j = i; j < len; j++) {
            sum += list[j];
            max=Math.max(max,sum)
        }
    }
    return sum;
}



// function helper(list, m, n) {
//     if (m === n) return list[m];
//     let sum = 0;
//     let lmax = -Number.MAX_VALUE;
//     let rmax = -Number.MAX_VALUE;
//     const mid = ((n - m) >>1) + m;
//     const l = helper(list, m, mid);
//     const r = helper(list, mid + 1, n);
//     for (let i = mid; i >= m; i--) {
//         sum += list[i];
//         if (sum > lmax) lmax = sum;
//     }
//     sum = 0;
//     for (let i = mid + 1; i <= n; i++) {
//         sum += list[i];
//         if (sum > rmax) rmax = sum;
//     }
//     return Math.max(l, r, lmax + rmax);
// }
// function LSS(list) {
//     return helper(list, 0, list.length - 1);
// }
let arr1=[1,-2,3,5,-3,5];
let arr2= [0, -2, 3, 5, -1, 2];
let arr3= [-9, -2, -3, -5, -3];
let res1=LSS(arr1)
let res2=LSS(arr2)
let res3=LSS(arr3)

console.log(res1,res2,res3)

let maxSequence = function(arr){
    // ...
    if(arr == null || arr.length === 0){
        return 0;
    }
    let global = arr[0];
    let local = arr[0];
    for(let i=1; i<arr.length; i++){
        local = Math.max(arr[i],local+arr[i]);
        console.log(i,local,global);

        global = Math.max(local,global);

    }
    if (global < 0){
        global =0;
    }
    return global;
}


function search(arr) {
    let maxSum = arr[0],
        sum = arr[0];
    for (let i = 0, l = arr.length; i < l; i++) {
        if (sum < 0) {
            sum = arr[i];
        } else {
            sum += arr[i];
        }

        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;

}

let ress1=maxSequence(arr1)
let resss1=search(arr1)
// let ress2=maxSequence(arr2)
// let ress3=maxSequence(arr3)
console.log(arr1)

console.log('计算法')
console.log(ress1);

console.log('search算法')
console.log(resss1)
