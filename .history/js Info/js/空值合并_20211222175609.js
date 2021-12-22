// 空值合并运算符
let a;
let b = "测试";
let val = a ?? b;
console.log(val);

function getNum(val) {
  if (val <= 1) {
    alert("请输入大于1的数");
  }
}

let val = prompt("请输入要判断的值");
getNum(val);
