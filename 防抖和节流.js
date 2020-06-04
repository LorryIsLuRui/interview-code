/**
 * long description for the file
 *
 * @summary short description for the file
 * @author lorry  -  534774764@qq.com
 *
 * Created at     : 2019-04-12 18:30:50
 * Last modified  : 2019-05-26 15:13:26
 */

// TODO:防抖debounce
// 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
// 防抖函数分为立即执行函数和非立即执行版
// 【非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。】
// 立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
var count = 1;
function debounce(fn, wait, immediate) {
  let timer = null;
  // let count=0;
  return function() {
    let that = this;
    let args = arguments;
    let hh = "jjj";
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callnow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callnow) fn.apply();
    } else {
      timer = setTimeout(fn.bind(), wait);
    }
    // count+=1;
  };
}
function clg() {
  this.count = 0;
  const args = Array.prototype.slice.call(arguments);
  console.log(this.count);
  // console.log(this.hh)
  // console.log(args)
  // console.log(args[0]+'---debounce---'+this.count);
}
debounce(clg, 3000, true)("lorry");

// TODO:节流 有两种实现方法 1.时间戳，2 定时器
// 1
// var throttle = function(func, delay) {
//   var prev = Date.now();
//   return function() {
//       var context = this;
//       var args = arguments;
//       var now = Date.now();
//       if (now - prev >= delay) {
//           func.apply(context, args);
//           prev = Date.now();
//       }
//   }
// }
// function handle() {
//   console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));
// 2
// var throttle = function(func, delay) {
//   var timer = null;
//   return function() {
//       var context = this;
//       var args = arguments;
//       if (!timer) {
//           timer = setTimeout(function() {
//               func.apply(context, args);
//               timer = null;
//           }, delay);
//       }
//   }
// }
// function handle() {
//   console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));

