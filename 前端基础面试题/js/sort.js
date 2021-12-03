/**
 * @Author: issuser
 * @Date: 2021-12-01
 * @Project: jsBased
 */

/**
 *
 * @param arr 选择排序的数组
 */
function sortArr(arr){
    for(let j=0;j<arr.length;j++){
        let minIndex=j;
        for(let i=j;i<arr.length;i++){
            if(arr[i]<arr[minIndex]){
                minIndex=i
            }
        }

        [arr[j],arr[minIndex]]=[arr[minIndex],arr[j]]
    }


    return arr;
}

// let min=sortArr([8,4,2,5,6,7,0,-10]);


// console.log('查看最小元素排序');
// console.log(min)

// 使用迭代的方式，实现flatten函数

/**
 *
 * @param arr
 */
function flatten(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            arr=arr.concat(arr[i]);
            arr.splice(i,1);
            i--;
        }
    }

    console.log('扁平化数组操作');
    console.log(arr)

    return arr;

}

// let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

// 1 2 9 10  3, 4, 5, 8 ,11,,6, 7,12, 13





let testArr= [ [1, 2, 2],[3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// [ 10,1, 2, 2,3, 4, 5, 5,6, 7, 8, 9, 11, 12, 12, 13, 14  ]


/**
 *  编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * @param arr
 */
function sortSingleArr(arr){

    // 先扁平化处理
    let flattenArr=flatten(arr);
//    再去重
    let newArr=[...new Set([...flattenArr])]

//    再排序
    newArr.sort((a,b)=>a-b);
    return newArr

}

let newArr=sortSingleArr(testArr);
// console.log('升序且不重复的数组')
// console.log(newArr)


// 方式2  es6 api 方式
function sortSingleArr2(arr){
    return Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b)

}

// console.log('第二种方式');
// console.log(sortSingleArr2(testArr))

/**
 * 给定两个数组，计算他们的交集
 * @param arr1
 * @param arr2
 */
function  commonArr(arr1,arr2){
    let ary=[];
    arr1.forEach(item=>{

        if( arr2.includes(item)&&!ary.includes(item)){
            ary.push(item)
        }
    })

    return ary;
}

const intersect = (nums1, nums2) => {
    const map = {}
    const res = []
    for (let n of nums1) {
        if (map[n]) {
            map[n]++
        } else {
            map[n] = 1
        }
    }
    for (let n of nums2) {
        if (map[n] > 0) {
            res.push(n)
            map[n]--
        }
    }
    console.log(map)
    return res
}

let arr1=[1,2.5,56,6,4,6,7,3,2];
let arr2=[2,3,5,7,89,23,5,98,4];
var nums1 = [1,1]
var nums2 = [1]

console.log('计算交集')
console.log(commonArr(nums1,nums2))
console.log(intersect(arr1,arr2))


function moveRight(arr, n) {
    const movedArr = [];
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        console.log('获取索引值')
        console.log(-n%l)
        movedArr[i] = arr[Math.abs(-n % l)];
    }
    console.log('movedArr');
    console.log(movedArr);
    return movedArr;
}
console.log(moveRight([1, 2, 3, 4, 5, 6, 7], 3));

