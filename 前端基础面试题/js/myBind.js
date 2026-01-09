Function.prototype.myBind = function (thisArg, ...args1) {
    // 1. 严格判断调用者是否为函数（排除 Function.prototype 本身）
    if (
        typeof this !== 'function' ||
        Object.prototype.toString.call(this) !== '[object Function]'
    ) {
        throw new TypeError('The bind target must be a function');
    }
    const _self = this;

    // 2. 中间构造函数（用于维护原型链，避免直接修改原函数原型）
    function Middle() {}

    // 绑定后的函数
    // 3. 绑定后的函数
    function BoundFunction(...args2) {
        // 关键：判断是否通过 new 调用（this 是否为 BoundFunction 实例）
        const isNewCall = this instanceof BoundFunction;
        // 若为 new 调用，this 指向实例；否则指向 thisArg
        const context = isNewCall ? this : Object(thisArg); // Object 包装避免原始值（如 number）
        // 合并参数：bind 时的参数 + 调用时的参数
        return _self.apply(context, [...args1, ...args2]);
    }

    // 4. 维护原型链（让 new 实例能继承原函数的原型方法）
    Middle.prototype = _self.prototype;
    BoundFunction.prototype = new Middle();
    // 修复 constructor 指向（否则实例.constructor 会指向 Middle）
    BoundFunction.prototype.constructor = BoundFunction;

    return BoundFunction;
}

// 测试

const person = { name: 'Alice' };

function sayHello(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// 绑定 this 为 person，并传入第一个参数 'Hello'
const boundSayHello = sayHello.myBind(person, 'Hello');

// 调用时传入第二个参数
boundSayHello('!'); // 输出：Hello, Alice!

function sum(a, b, c) {
  return a + b + c;
}

// bind 时传入前两个参数 1 和 2
const boundSum = sum.myBind(null, 1, 2);

// 调用时传入第三个参数 3
console.log(boundSum(3)); // 输出：6（1+2+3）


function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 绑定 this 为 null，传入默认 age=18
const BoundPerson = Person.myBind(null, 'Bob');

// 用 new 实例化（此时 this 指向实例，null 失效）
const p = new BoundPerson(20); // 覆盖 age 为 20

console.log(p.name); // 输出：Bob
console.log(p.age); // 输出：20
console.log(p instanceof Person); // 输出：true（原型链继承正常）