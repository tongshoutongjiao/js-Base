console.log('引入eventEmitter 函数')

//  事件监听对象
function EventEmitter() {
    this._events = {};
}
EventEmitter.VERSION = '1.0.0';

EventEmitter.prototype.on = function (eventName, listener) {
    if (!eventName || !listener) return;

    // 判断回调的 listener 是否为函数
    if (!isValidListener(listener)) {
        throw new TypeError('listener must be a function');
    }

    // 给当前时间的对象赋值
    let events = this._events;


    // 给当前事件的对象赋值
    let listeners = events[eventName] = events[eventName] || [];
    let listenerIsWrappered=typeof listener==='object';

    // 不重复添加事件，判断是否有一样的
    if(indexOf(listeners,listener)===-1) {
        listeners.push(listenerIsWrappered?listener:{
            listener: listener,
            once: false
        })
    }

    return this;


}

EventEmitter.prototype.emit=function(eventName,args){
    // 直接通过内部对象获取对应自定义时间的回调函数
    let listeners=this._events[eventName];
    if(!listeners)return;

    // 需要考虑多个listener的情况
    for(let i=0;i<listeners.length;i++){
        let listener=listeners[i];
        if(listener){
            console.log('传递参数');
            console.log(args)
            listener.listener.apply(this,[args]||[]);

            // 给 listener 中 once 为 true 的进行特殊处理
            if (listener.once) {
                this.off(eventName, listener.listener)
            }
        }
    }

    return this;
}

EventEmitter.prototype.off=function(eventName,listener){
    // 取消当前函数
    let listeners=this._events[eventName];
    if(listeners)return;
    let index;

    for(let i=0,len=listeners.length;i<len;i++){
        if(listeners[i]&&listeners[i].listener===listener){
            index=i;
            break;
        }
    }
    // off 的关键
    if(typeof index!==undefined){
        listeners.splice(index,1,null)
    }

    return this;



}

EventEmitter.prototype.once=function(eventName,listener){
        // 直接调用 on 方法，once 参数传入 true，待执行之后进行 once 处理

        return this.on(eventName,{
            listener,
            once:true
        })


}

EventEmitter.prototype.alloff=function(eventName){
         // 如果该 eventName 存在，则将其对应的 listeners 的数组直接清空

         if(eventName&&this._events[eventName]){
             this._events[eventName]=[];

         }else{
             this._events={};
         }


}






// 是否是无效的时间名称
function isValidListener(listener) {
    if(typeof listener==='function'){
        return true
    }else if(listener&&typeof listener==='object'){
        return isValidListener(listener.listener)
    }else{
        return false;
    }
}


//  判断是否存在
function indexOf(array,item){
    let result=-1;
    item=typeof item==='object'?item.listener:item;

    for(let i=0,len=array.length;i<len;i++){
        if(array[i].listener===item){
            result=i;
            break;
        }
    }
    return result;
}