
//  1 原型继承：方式子类的原型指向父类的实例
// 缺点:改变其中一个子类原型的内容，其他也会跟着改变

// function Parent1() {
//     this.name = 'parent1';
//     this.play = [1, 2, 3]
//   }
//   function Child1() {
//     this.type = 'child2';
//   }
//   Child1.prototype = new Parent1();
//   console.log(new Child1());

//   var s1 = new Child1();
//   var s2 = new Child1();
//   s1.play.push(4);
//   console.log(s1.play, s2.play);



//   2 构造函数继承（利用call）
//  不会共享私有属性了，但是只能继承父类的私有属性和方法，不能继承父级原型对象上的共有属性和方法

// function Parent1(){
//     this.name = 'parent1';
//   }

//   Parent1.prototype.getName = function () {
//     return this.name;
//   }

//   function Child1(){
//     Parent1.call(this);
//     this.type = 'child1'
//   }

//   let child = new Child1();
//   console.log(child);  // 没问题
//   console.log(child.getName());  // 会报错


// 3   组合继承
//  这种方式结合了以上两种方式的优缺点，组合起来继承

//  使用call继承，讲父级原型的私有属性变成私有的，（这样即使修改也是修改自身，不影响其他实例）
//  同时将当前子类所属原型对象的原型指向父类原型对象的实例，同时修改当前子类所属构造函数的指向

// function Parent3 () {
//     this.name = 'parent3';
//     this.play = [1, 2, 3];
//   }

//   Parent3.prototype.getName = function () {
//     return this.name;
//   }
//   function Child3() {
//     // 第二次调用 Parent3()
//     Parent3.call(this);
//     this.type = 'child3';
//   }

//   // 第一次调用 Parent3()
//   Child3.prototype = new Parent3();
//   // 手动挂上构造器，指向自己的构造函数
//   Child3.prototype.constructor = Child3;
//   var s3 = new Child3();
//   var s4 = new Child3();
//   s3.play.push(4);
//   console.log(s3);
//   console.log(s4);
//   console.log(s3.play, s4.play);  // 不互相影响
//   console.log(s3.getName()); // 正常输出'parent3'
//   console.log(s4.getName()); // 正常输出'parent3'


//  4 原型式继承
// Object.create()接受两个参数 一是用作新对象原型的对象、二是为新对象定义额外属性的对象（可选参数）。 

// let parent4 = {
//     name: "parent4",
//     friends: ["p1", "p2", "p3"],
//     getName: function() {
//       return this.name;
//     }
// };

// let person4 = Object.create(parent4);

// person4.name = "tom";
// person4.friends.push("jerry");

// let person5 = Object.create(parent4);
// person5.friends.push("lucy");

// console.log(person4.name);
// console.log(person4.name === person4.getName());
// console.log(person5.name);
// console.log(person4.friends);
// console.log(person5.friends);

// 5 寄生组合式继承

// 使用原型式继承可以获得一份目标对象的浅拷贝，然后利用这个浅拷贝的能力再进行增强，添加一些方法，这样的继承方式就叫作寄生式继承。

// let parent5 = {
//     name: "parent5",
//     friends: ["p1", "p2", "p3"],
//     getName: function() {
//       return this.name;
//     }
//   };

// function clone(original) {
// let clone = Object.create(original);
// clone.getFriends = function() {
//     return this.friends;
// };
// return clone;
// }

// let person5 = clone(parent5);

// console.log(person5.getName());
// console.log(person5.getFriends());


// 第六种：寄生组合式继承
// 结合第四种中提及的继承方式，解决普通对象的继承问题的 Object.create 方法，我们在前面这几种继承方式的优缺点基础上进行改造，得出了寄生组合式的继承方式，这也是所有继承方式里面相对最优的继承方式，代码如下。

function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
  }

   Parent6.prototype.getName = function () {
    return this.name;
  }

  function Child6() {
    Parent6.call(this);
    this.friends = 'child5';
  }

  clone(Parent6, Child6);

  Child6.prototype.getFriends = function () {
    return this.friends;
  }

  let person6 = new Child6();
  console.log(person6);
  console.log(person6.getName());
  console.log(person6.getFriends());

//   通过这段代码可以看出来，这种寄生组合式继承方式， 基本可以解决前几种继承方式的缺点，较好地实现了继承想要的结果，同时也减少了构造次数，减少了性能的开销，我们来看一下上面这一段代码的执行结果。

