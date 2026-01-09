// 防抖 debounce
// 频繁触发时，只有最后一次生效

// 思路: 设置一个定时器，每次触发时，清除定时器，重新设置定时器，最后触发

function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}



// 节流 throttle
//  频繁触发时，每隔一段时间才生效

// 思路 1：时间戳版（立即执行）
// function throttle(fn,delay){
//     let lastTime = 0;
//     return function(){
//         let context = this;
//         let args = arguments;
//         let now = +new Date();
//         if(now - lastTime > delay){
//             fn.apply(context,args);
//             lastTime = now;
//         }
//     }

// }

// 思路 2：定时器版（延迟执行）

function throttle(fn, interval) {
  let timer = null;
  let lastTime = 0; // 记录上一次执行时间
  return function(...args) {
    const now = Date.now();
    // 计算剩余时间：间隔时间 - （当前时间 - 上一次执行时间）
    const remaining = interval - (now - lastTime);

    // 情况1：已超过间隔时间，直接执行（避免延迟）
    if (remaining <= 0) {
      fn.apply(this, args);
      lastTime = now;
      clearTimeout(timer); // 清空可能存在的旧定时器
      timer = null;
    } 
    // 情况2：未到间隔时间，但没有定时器，设置一个定时器（保证最后一次触发会执行）
    else if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now(); // 更新执行时间
        timer = null;
      }, remaining);
    }
  };
}