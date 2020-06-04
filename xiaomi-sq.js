// TODO:7
// 求数组中最大的数
// arr=[1,-2,100,-3,2,0];
// arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr)
// console.log(Math.max(...arr))
// TODO:6
// setTimeout(()=>{
//     console.log(1);
// })
// new Promise((res,rej)=>{
//     console.log(2);
//     res(3);
// }).then((res)=>{
//     console.log(res);
// })
// console.log(4);
//2431
// TODO:5
// var a=1;
// function fn(){
//     console.log(a);
//     let a=3;//error Uncaught ReferenceError: Cannot access 'a' before initialization
//     // let不存在变量提升，声明的代码在被运行之前，声明并不存在
// }
// fn();//error  Uncaught ReferenceError: Cannot access 'a' before initialization
//TODO:4
// function A(){
//     this.a=3;
// }
// var a=new A;
// console.log(a.prototype);//undefined
// console.log(a);//A {a:3}
// TODO:3
// 浏览器和node环境运行结果不一样，此题结果为浏览器运行结果
// var a=1;
// var o={
//     a:10,
//     b:2,
//     fn:function(){
//         console.log(this.a+this.b);
//     }
// }
// var c=o.fn;
// c();//NAN 浏览器里fn的this指向window，node里此时this指向global
// o.fn();//12,
// TODO:2
// function test(flag) {
//   if (flag) {
//     function getValue() {
//       return "a";
//     }
//   } else {
//     function getValue() {
//       return "b";
//     }
//   }
//   return getValue();
// }
// console.log(test(true)); //a
//TODO:1
// var name='lorry';
// var obj={
//     name:'jack',
//     say:function (){
//         console.log(this);
//         setTimeout(function (){
//             console.log(this);//Timeout对象
//             console.log(this.name);//undefined
//         },0)
//         setTimeout( ()=>{
//             console.log(this);//obj对象,是因为箭头函数没有自己的this
//         },0)
//     }
// };
// obj.say();
