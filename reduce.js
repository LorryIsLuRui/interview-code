// reduce 累加器
// arr.reduce(callback,[initialValue])
/** 
 * callback （执行数组中每个值的函数，包含四个参数）

    previousValue （第一项的值或者上一次叠加的结果值，或者是提供的初始值（initialValue））
    currentValue （数组中当前被处理的元素）
    index （当前元素在数组中的索引）
    array （数组本身）

    initialValue （作为第一次调用 callback 的第一个参数，可以控制返回值的格式）
*/
var arr = [
    {
    id: 1,
    type: "A",
    total: 3
  },
  {
    id: 2,
    type: "B",
    total: 5
  },
  {
      id: 3,
    type: "E",
    total: 7
  }
];
// 聚合为数字
// TODO:不使用reduce的情况
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0, len = arr.length; i < len; i++) {
//     const { total } = arr[i];
//     sum += total;
//   }
//   return sum;
// }
// console.log(sum(arr));
// TODO:使用reduce
// const sum=arr.reduce((prev,curr,index,arr)=>{
//     console.log(prev);
//     console.log(curr);
//     console.log(index);
//     console.log('-------------')
//     return prev+curr.total
// },0);
// console.log(sum)
// TODO: reduceRight
a=[1,2,3,4];
a.reduceRight((pre, curr, i, arr) => {
    console.log(pre, curr, i)
    return curr+i;
},0)
// TODO:聚合为字符串
// var result=arr.reduce((str,curr,index,arr)=>{
//     return str+`id:${curr.id},type:${curr.type};`
// },'');
// console.log(result)
// TODO:聚合为数组
// var result=arr.reduce((res,curr,index,arr)=>{
//     res[index]=curr.type;
//     return res;
// },[]);
// console.log(result)
//TODO: myReduce
// Array.prototype.myReduce=function(callback,initialValue){
//     let prev=undefined;
//     let curr=undefined;
//     let index=0;
//     let arr=this;
//     let result=undefined;
//     if(index===0){
//         prev=initialValue;
//         result=initialValue;
//     }
//     this.forEach((val,i,arr)=>{
//         curr=val;
//         index=i;
//         result+=callback(prev,curr,index,arr);
//     })
//     return result
// }
// arr=[1,2,3];
// var sums=arr.myReduce((prev,curr,index,arr)=>{
//     console.log(prev);
//     console.log(curr);
//     console.log(index);
//     console.log('-------------')
//     return curr+','
// },'');
// console.log(sums)
// TODO:reduce数组去重
// arr=[1,3,4,2,3,5,1,2,3,4];
// var result= arr.reduce((prev,curr,index,arr)=>{

//     if(prev.indexOf(curr)<0) prev.push(curr);
//     return prev;
// },[]);
// result=new Set([...arr]);
// console.log(Array.from(result));

