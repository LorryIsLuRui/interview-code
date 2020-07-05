// 总是被问到如何实现一个bind，有思考过如何使用原生js实现apply/call吗
// 思考
const name = 'window'
const jayObj = {
    name: 'jay',
    say: function() {
        console.log(`i am ${this.name}`);
    },
    sayCopy: () => {
        console.log('this ===> ', this); // this指向window
        console.log(`i am ${this.name}`);
    }
};
// jayObj.say(); // i am jay
// jayObj.sayCopy(); // this指向window
const jackObj = {
    name: 'jack',
    say: jayObj.say,
}
// jackObj.say(); // i am jack
// 根据上面的🌰，我们可以有个思路，为目标对象添加一个
Function.prototype.apply = function(){
    const argsArr = Array.from(arguments);
    const strict =(function () {return !this;}());
    console.log('strict ===> ', strict);
    const ctx = argsArr[0] ? argsArr[0] : (strict ? null : window); // this
    if(!ctx) return;
    const args = argsArr.slice(1);
    //  ctx[this] = this; // 万一ctx上有同名函数岂不是覆盖了，可以用symbol
    //  ctx[this] = this改用symbol
    
    // const fn = Symbol();
    // 模拟symbol
    const fn = createSymbol(ctx);
    ctx[fn] = this;
  
    //   end
    const result = ctx[fn](...args);
    delete ctx[fn];
    return result
}
const jay={
    name: 'jay',
    say: function(age) {
        console.log(`i am ${this.name}, i am ${age}`);
    }
};
const jack = {
    name: 'jacks',
}
jay.say.apply(jack,[23]); // 'i am jacks, i am 23'
console.log(Object.getOwnPropertySymbols(jack));
console.log(Object.getOwnPropertyNames(jack))

// 处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
// this传null，undefined，默认指向window
// var str = 'window str'; // const var声明有不同
// function say(){
//   console.log(this.str);
// }
// say.apply();

// 如果不让用symbol结构的话，可以自己模拟一个
function createSymbol(obj){
    const ran = Math.random() + Date.now();
    if(obj.hasOwnProperty(ran)) createSymbol();
    return ran;
}

// 实现bind
// https://github.com/jawil/blog/issues/16
