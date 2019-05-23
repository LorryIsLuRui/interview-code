// TODO:indexof
// Array.prototype.indexOf=function(para){
//     if(!this || !para) return;
//     let i=-1;
//     this.some((val,index)=>{
//         if(val===para){
//             i=index;
//             return true;
//         }
//     })
//     return i;
// }
// const arr=[1,2,3];
// console.log(arr.indexOf(2));
// TODO:instanceof
function myInstanceof(child,parent){
    let child_proto=child.__proto__;
    let parent_prototype=parent.prototype;
    while(true){
        if(child_proto===null) return false;
        else if(child_proto===parent_prototype) return true
        child_proto=child_proto.__proto__;
    }
}
function A(){

};
const a=new A();
console.log(a instanceof A);
console.log(myInstanceof(a,Object));
console.log(myInstanceof(A,Function));
// console.log(a.__proto__.__proto__)