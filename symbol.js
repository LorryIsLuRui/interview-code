// // Symbol类型不是对象，不用new
// const a1=Symbol();
// const a2=Symbol();
// console.log(a1,a2);
// console.log(a1===a2);//
// // 即便在定义a1 a2时设置a1=Symbol('a1');a2=Symbol('a1');她俩也是不相等的

// //TODO: Symbol for para表示key值，如果key在全局注册过就返回这个值,
// const a3=Symbol.for("a3");
// const a4=Symbol.for("a3");
// console.log(a3,a4);
// console.log(a3===a4); //true
// console.log(Symbol.keyFor(a3))

// const a1=Symbol.for('abc');
// const a2=Symbol.for('abcd');
// let obj={
//     [a1]:123,
//     [a1]:1233,
//     [a2]:1233456,
//     abc:'lorry',
// }
// console.log(obj) //{ abc: 'lorry', [Symbol(abc)]: 1233 }
//TODO: for of拿不到symbol定义的属性
// for(let [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }
//TODO:可以用getOwnPropertySymbols获取
// Object.getOwnPropertySymbols(obj).forEach((val,i,arr)=>{
//     console.log(val,i,obj[val],arr);
// })
//TODO:返回所有属性值，symbol和非symbol
// Reflect.ownKeys(obj).forEach((val,i)=>{
//     console.log(val,i,obj[val]);
// })

//FIXME: Symbol作class的私有属性
class father{
    constructor(){
        this.fatherPrivateFn=Symbol('fn');
        this.fatherPrivateAttr=Symbol('attr');
        this[this.fatherPrivateAttr]='hh';
        this.a='a';
    }
    [this.fatherPrivateFn](){
        console.log(this[this.fatherPrivateAttr])
    }
    get(){
        this[this.fatherPrivateFn]();
    }
    get1(){
        console.log('getttt1')
    }
}
class father1 extends father{
    constructor(){
        super();
    }
}
const child=new father1();
console.log(child);
child.get1();
// child.get();//报错
// console.log(child[fatherPrivateAttr]);
