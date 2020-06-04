/**
 * 柯里化是指这样一个函数(假设叫做createCurry)，他接收函数A作为参数，运行后能够返回一个新的函数。
 * 并且这个新的函数能够处理函数A的剩余参数。
 * https://www.jianshu.com/p/5e1899fe7d6b
 */
// TODO: 简单
function add(num1,num2){
    return num1+num2;
}
function total(){
    return 50+add(1,2);
}
function curry(fn) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  const that=this;
  return function() {
    var innerArgs = slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(that, finalArgs);
  };
}
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
var res = curry(add, 50)(1, 2);
console.log(res)
// TODO:写一个bind
// Function.prototype.bind=function(self){
//     const that=this;
//     const args=Array.prototype.slice.call(arguments,1);
//     return function(){
//         args.concat(Array.prototype.slice.call(arguments));
//         that.apply(self,args)
//     }
// }
// const obj={
//     para:'obj'
// }
// function a(){
//     this.para2='aaa'
//     console.log(this.para);
// }
// a.bind(obj)('gg');
// console.log(obj)
