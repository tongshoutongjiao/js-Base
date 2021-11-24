console.log('数组排序的方式方法等等');

// 冒泡排序

var a = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221];

function bubbleSort(arr){
    console.log('冒泡排序');
    const len = arr.length
     if (len < 2) return arr;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

let res=bubbleSort(a);
console.log('查看结果');
console.log(res);

// 快速排序
// 快速排序的基本思想是通过一趟排序，将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可以分别对这两部分记录继续进行排序，以达到整个序列有序。

function quickSort(array) {
    var quick = function(arr) {
      if (arr.length <= 1) return arr
      const len = arr.length;
      const index = Math.floor(len >> 1);
      const pivot = arr.splice(index, 1)[0];
      console.log('查看索引值',index,pivot,arr);
      const left = [];
      const right = [];
      for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) {
          right.push(arr[i])
        } else if (arr[i] <= pivot) {
          left.push(arr[i])
        }
      }
      return quick(left).concat([pivot], quick(right))
    }
    const result = quick(array)
    return result
  }

  let quickRes=quickSort(a);

  console.log('查看快排的结果');
  console.log(quickRes);

//   插入排序
// 插入排序算法描述的是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入，从而达到排序的效果。来看一下代码。

function insertSort(array) {
    const len = array.length;
    let current;
    let prev;
    for (let i = 1; i < len; i++) {
      current = array[i]
      prev = i - 1
      while (prev >= 0 && array[prev] > current) {
          debugger;
        array[prev + 1] = array[prev]
        prev--
      }
      array[prev + 1] = current
    }
    return array
}


  let array=[1,3,4,5,2,4,4,2,3];


  console.log('插入排序');
  let insertRes=insertSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]

//   选择排序
// 选择排序是一种简单直观的排序算法。它的工作原理是，首先将最小的元素存放在序列的起始位置，再从剩余未排序元素中继续寻找最小元素，然后放到已排序的序列后面……以此类推，直到所有元素均排序完毕。请看下面的代码。

function selectSort(array) {
    const len = array.length
    let temp
    let minIndex
    for (let i = 0; i < len - 1; i++) {
      minIndex = i
      for (let j = i + 1; j < len; j++) {
        if (array[j] <= array[minIndex]) {
          minIndex = j
        }
      }
      temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
    }
    return array
  }

  // 这样，通过选择排序的方法同样也可以实现数组的排序，从上面的代码中可以看出该排序是表现最稳定的排序算法之一，因为无论什么数据进去都是 O(n 平方) 的时间复杂度，所以用到它的时候，数据规模越小越好。

//   堆排序
// 堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质，即子结点的键值或索引总是小于（或者大于）它的父节点。堆的底层实际上就是一棵完全二叉树，可以用数组实现。
function heap_sort(arr) {
    var len = arr.length
    var k = 0
    function swap(i, j) {
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    function max_heapify(start, end) {
      var dad = start
      var son = dad * 2 + 1
      if (son >= end) return
      if (son + 1 < end && arr[son] < arr[son + 1]) {
        son++
      }
      if (arr[dad] <= arr[son]) {
        swap(dad, son)
        max_heapify(son, end)
      }
    }
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
      max_heapify(i, len)
    }
     
    for (var j = len - 1; j > k; j--) {
      swap(0, j)
      max_heapify(0, j)
    }
    
    return arr
  }

  let heapRes=heap_sort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
  console.log('堆排序')
  console.log(heapRes);

//    归并排序
// 归并排序是建立在归并操作上的一种有效的排序算法，该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。


function mergeSort(array) {
    const merge = (right, left) => {
      const result = []
      let il = 0
      let ir = 0
      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          result.push(left[il++])
        } else {
          result.push(right[ir++])
        }
      }
      while (il < left.length) {
        result.push(left[il++])
      }
      while (ir < right.length) {
        result.push(right[ir++])
      }
      return result
    }
    const mergeSort = array => {
      if (array.length === 1) { return array }
      const mid = Math.floor(array.length / 2)
      const left = array.slice(0, mid)
      const right = array.slice(mid, array.length)
      return merge(mergeSort(left), mergeSort(right))
    }
    return mergeSort(array)
  }



  let mergeRes=mergeSort(a); // [1, 1, 3, 3, 6, 6, 23, 34, 76, 221, 222, 456]
  console.log('归并排序');
  console.log(mergeRes);
