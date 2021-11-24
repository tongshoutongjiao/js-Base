console.log('整一个时间发布模式函数');

function EventEmitter() {
    this._events = {}
};

// 接收一个时间名，然后将函数绑定当前的事件上边
EventEmitter.prototype.on = function (eventName, listener) {

    //  先进行各种错误判断和处理

    // 事件名称或者函数对象没写出来则直接默认返回
    if (!eventName || !listener) return;



    // 判断回调的listener 是否为函数
    if (!isValidListener(listener)) {
        throw new TypeError('listener must be a function')
    }

    // 给当前事件的对象赋值
    let events = this._events;

    //  如果当前名字存在的话，直接
    let listeners=events[eventName]=events[eventName]||[];

      let listenerIsWrappered=typeof listener==='object';


    //   不重复添加事件，判断是否有同样的事件函数
    if(indexOf(listeners,listener)===-1){
        listeners.push(listenerIsWrappered?listener:{
            listener:listener,
            once:false
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
            listener.listener.apply(this,[args]||[])

            // 给listener 中 once 为true的进行特殊处理
            if(listener.once){
                this.off(eventName,listener.listener)
            }
        }

    }

}

EventEmitter.prototype.off=function(){
    // 取消当前函数
    let listeners=this._events[eventName];
    if(!listeners) return;
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

    return this.on(eventName,{
        listener,
        once:true
    })

}


EventEmitter.prototype.alloff=function(eventName){
    if(eventName&&this._events[eventName]){
        this._events[eventName]=[]
    }else{
        this._events={};
    }

}


// 是否是有效的事件名称

function isValidListener(listener) {
    if (typeof listener === 'function') {
        return true;
    } else if (typeof listener === 'object') {
        return isValidListener(listener.listener)
    } else {
        return false;
    }
}

// 查询
function indexOf(array, item) {
    let result = -1;
    item = typeof item === 'object' ? item.listener : item;
    for (let i = 0, len = array.length; i < len; i++) {
        if (array[i].listener === item) {
            result = i;
            break;
        }
    }
    return result;

}