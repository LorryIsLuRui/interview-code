// 运算符优先级
// https://fsp1yjl.github.io/2019/01/16/201901-js%E4%B8%ADnew%E7%9A%84%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95/
// https://segmentfault.com/q/1010000008430170
// https://segmentfault.com/a/1190000007979730
// https://www.cnblogs.com/xxcanghai/p/5189353.html
// https://www.cnblogs.com/zhansu/p/6641190.html
// https://www.cnblogs.com/zhansu/p/6641190.html
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { console.log(2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
console.log(Foo.getName()); //undefined
// new Foo.getName(); // 为啥不报a is not a constructor，a不是构造函数啊