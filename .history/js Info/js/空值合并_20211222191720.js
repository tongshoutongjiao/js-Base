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

function checkAge(age) {
    age??confirm('Do you have your parents permission to access this page?')
  }
  function checkAge(age) {
    age||confirm('Do you have your parents permission to access this page?')
  }


  