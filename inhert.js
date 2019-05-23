// 原型继承、组合继承、寄生组合继承
// TODO:原型继承
/**
 * 缺点：
1.重写子类的原型 等于 父类的一个实例，
    （父类的实例属性变成子类的原型属性）如果父类包含引用类型的属性，那么子类所有实例都会共享该属性
2.在创建子类实例时，不能向父类的构造函数传递参数
 */
// function Parent() {
//   this.parent = "i am parent";
//   this.parts = ["age", "name", "sex"];
// }
// Parent.prototype.say = function() {
//   console.log(this.parent);
// };
// function Child() {
//   this.child = "child";
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;
// Parent.prototype.sayCh = function() {
//   console.log(this.child);
// };

// const p=new Child();
// console.log(p.parts);//子类的实例对共享父类构造函数的属性，parts是引用类型  [ 'age', 'name', 'sex' ]
// p.parts.push('2');
// p.parent='ss';
// const p1=new Child();
// console.log(p1.parts); //[ 'age', 'name', 'sex', '2' ],
// console.log(p.parent);


// FIXME:但是大家要注意一下一种情况，在通过原型链继承时，不能通过对象字面量个方式来更新原型对象
// function Person(){
//     this.name="bob" ;
//   }
//   Person.prototype.eat=function(){
//     return "food";
//   }
//   function Student(){}
   
//   Student.prototype=new Person();
//   Student.prototype={
//     run:function(){
//       return "run";
//     }
//   };
//   var one=new Student();
//   console.log(one.eat());//Uncaught TypeError: undefined is not a function 
// 在上面的代码中，把Person的实例赋给Student的原型，接下来又把原型改写成另一个对象字面量，
// 现在原型包含的是Object实例，不再是Person实例，因此原型链已经被切断了，也就是说Student和Person没关系了。


// TODO:组合继承
/**
 * 原型链 + 构造函数 组合实现
 * 组合继承 解决原型链继承的引用类型原型属性被实例共享问题
 *
 * 缺点：
 * 两次调用父类构造函数：（第一次是在创建子类原型的时候，第二次是在子类构造函数内部）。
 * 子类继承父类的属性，一组在子类实例上，一组在子类原型上
 *      （在子类原型上创建不必要的多余的属性）（实例上的屏蔽原型上的同名属性），同时效率低。
 */
function Parent() {
  this.parent = "i am parent";
  this.parts = ["age", "name", "sex"];
}
Parent.prototype.say = function() {
  console.log(this.parent);
};
function Child() {
  this.child = "child";
  Parent.apply(this, []);  
  //每new一次，都是一次深拷贝，而不是地址的拷贝，所以一个实例的引用类型属性的值改变，不会影响其他实例的这个属性
//   this.sayCh = function() {
//     console.log('constructor+++++'+this.child);
//   };
//   console.log(this);
}
Child.prototype = new Parent();  //1
Child.prototype.constructor = Child;
Parent.prototype.sayCh = function() {
  console.log(this.child);
};

const p = new Child();
console.log(p); //子类的实例对共享父类构造函数的属性，parts是引用类型
p.parts.push('2');
p.sayCh();  //构造函数里面的会覆盖掉原型链上的同名函数
const p1 = new Child();
// console.log(p.parent);
// console.log(p1.__proto__);
// console.log(p1);

//TODO:  寄生组合继承
/**
 *     优点：

1.只调用一次父类的构造函数,避免了在子类原型上创建不必要的，多余的属性

2.原型链保持不变
 */
// function Parent() {
//   this.parent = "i am parent";
//   this.parts = ["age", "name", "sex"];
// }
// Parent.prototype.say = function() {
//   console.log(this.parent);
// };
// function Child() {
//   this.child = "child";
//   Parent.apply(this, []);
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = Child;
// Parent.prototype.sayCh = function() {
//   console.log(this.child);
// };

// const p = new Child("child");
// p.parts.push(2);
// console.log(p.parts); //[ 'age', 'name', 'sex', 2 ]
// const p1 = new Child("child");
// console.log(p1.parts);//[ 'age', 'name', 'sex' ]
// console.log(p1.__proto__);
