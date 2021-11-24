
// json.parse json对象化

const json = '{"result":true, "count":2}';
const obj = JSON.parse(json);
console.log('查看对象结果')
console.log(obj)
console.log(obj.count);
// 2
console.log(obj.result);
// true
/* 带第二个参数的情况 */
JSON.parse('{"p": 5}', function (k, v) {

    console.log('查看参数传递结果');
    console.log(arguments);
    console.log('k',k)
 
    if(k === '') return v;     // 如果k不是空，
    return v * 2;              // 就将属性值变为原来的2倍返回
});                            // { p: 10 }


JSON.stringify({ x: 1, y: 2 });
// "{"x":1,"y":2}"
JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })
// "{"x":[10,null,null,null]}"
/* 第二个参数的例子 */
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}
var foo = {foundation: "Mozilla", model: "box", week: 4, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);
// "{"week":4,"month":7}"
/* 第三个参数的例子 */
JSON.stringify({ a: 2 }, null, " ");
/* "{
 "a": 2
}"*/
JSON.stringify({ a: 2 }, null, "");
// "{"a":2}"


// jsonStringify 函数
function jsonStringify(data) {

    // 判断基本类型：是基础类型还是引用类型
      
    let type = typeof data;
  
    if(type !== 'object') {
            let result = data;
            
            //data 可能是基础数据类型的情况在这里处理
            if (Number.isNaN(data) || data === Infinity) {
                //NaN 和 Infinity 序列化返回 "null"
                result = "null";
            } else if (type === 'function' || type === 'undefined' || type === 'symbol') {
                // 由于 function 序列化返回 undefined，因此和 undefined、symbol 一起处理
                return undefined;
            } else if (type === 'string') {
                result = '"' + data + '"';
            }
            return String(result);

    } else if (type === 'object') {

            if (data === null) {
                return "null"  // 第01讲有讲过 typeof null 为'object'的特殊情况
            } else if (data.toJSON && typeof data.toJSON === 'function') {
                return jsonStringify(data.toJSON());
            } else if (data instanceof Array) {
                let result = [];
                //如果是数组，那么数组里面的每一项类型又有可能是多样的
                data.forEach((item, index) => {
                if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
                        result[index] = "null";
                    } else {
                        result[index] = jsonStringify(item);
                    }
                });
                result = "[" + result + "]";
                return result.replace(/'/g, '"');
                } else {
                // 处理普通对象
                let result = [];
                Object.keys(data).forEach((item, index) => {
                    if (typeof item !== 'symbol') {
                        //key 如果是 symbol 对象，忽略
                        if (data[item] !== undefined && typeof data[item] !== 'function' && typeof data[item] !== 'symbol') {
                        //键值如果是 undefined、function、symbol 为属性值，忽略
                        result.push('"' + item + '"' + ":" + jsonStringify(data[item]));
                        }
                    }
                });
                return ("{" + result + "}").replace(/'/g, '"');
                }
      }
  }