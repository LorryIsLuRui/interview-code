// 手写一个some

// tips some的第二个参数 thisArg 只有在第一个函数是function声明的才会生效，如果是箭头函数不会生效
// 箭头函数声明的回调，函数里的this指向window
// Array.prototype.some=function(){
//     let result = false;
//     let index = 0;
//     const args = Array.from(arguments);
//     const fn = args[0];
//     const that = args[1];
//     for(let v of this){
//         if(fn.call(that, v, index, this)){
//             result = true;
//             break;
//         }
//         index++
//     }
//     return result;
// }
const a=[1,2,3];
// const obj = {a:1};
// const b = a.some(function(v, i, arr) {
//     console.log('this ===> ', this.a);
//     if(v > 1) return true;
// }, obj);
// console.log('b ===> ', b);

// 手写filter
// 他也有第二个参数 thisArg[再次就不再赘述 参考some的写法]，返回满足条件的元素组成的数组
// Array.prototype.filter=function(fn){
//     const result = [];
    // let i = 0;
    // for(let v of this){
    //     if(fn(v, i, this)){
    //         result.push(v);
    //     }
    //     i++;
    // }
//     return result;
// }
// const a=[1,2,3];
// const b = a.filter((v, i, arr) => v > 1);
// console.log('b ===> ', b);
// console.log('a ===> ', a);

// 手写find
// find方法 不改变原数组 方法返回通过测试（函数内判断）的数组的第一个元素的值。
// Array.prototype.find = function(fn){
//     let result;
//     let i = 0;
//     for(let v of this){
//         if(fn(v, i, this)){
//             result = v;
//             break;
//         }
//         i++;
//     }
//     return result;
// }
// const b = a.find((v,i,arr) => v > 1);
// console.log('b ===> ', b);