function Foo() {
  getName = function() {
    console.log(1);
  };
  console.log("this is" + this);
  return this;
}

Foo.getName = function() {
  console.log(2);
};
Foo.prototype.getName = function() {
  console.log(3);
};
var getName = function() {
  console.log(4);
};
function getName() {
  console.log(5);
} // 请写出一下的输出结果 Foo.getName()
getName();
console.log(Foo());
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
