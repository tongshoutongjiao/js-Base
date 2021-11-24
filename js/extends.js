console.log('extends 实现逻辑');

class Person {
    constructor(name) {
      this.name = name
    }
    // 原型方法
    // 即 Person.prototype.getName = function() { }
    // 下面可以简写为 getName() {...}
    getName = function () {
      console.log('Person:', this.name)
    }
    getAge(){
        return this.age;
    }
}
class Gamer extends Person {
    constructor(name, age) {
      // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
      super(name)
      this.age = age
    }
    getNames(){
        return this.name
    }

   
}

const asuna = new Gamer('Asuna', 20)

console.log(asuna);
asuna.getName() // 成功访问到父类的方法