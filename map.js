// 原生实现map
// const map=(arr1,fn)=>{
//     const that=arr1;
//     console.log(that)
//     const arr=[];
//     // const
//     for(let i=0;i<that.length;i++){
//         arr.push(fn.call(that,that[i],i,that));
//     }
//     return arr;
// }
// const arr=[1,2,3];
// const res=map(arr,(val,i,arr)=>{
//     return val+1;
// })
// console.log(res);
// 用reduce实现map
Array.prototype.map=function (fn){
    const that=this;
    console.log(that)
    let arr=[];
    // const
    arr=that.reduce((prev,cur,i,arr)=>{
        prev.push(fn(cur,i,arr))
        return prev
    },[])
    return arr;
}
const arr=[7,2,3];
const res=arr.map((val,i,arr)=>{
    return val+1;
})
console.log(res);

// 
/*
Array.prototype.map=function(fn){
    //   const data = [];
    //   for(let i=0; i < this.length; i++){
    //     data.push(fn(this[i], i, this));
    //   }
    //   return data;
    //   reduce实现
    //   return this.reduce((pre,curr,currInx,arr) => {
    //     console.log(pre,curr)
    //     pre.push(fn(curr, currInx, arr));
    //     return pre;
    //   },[])
    }
    const arr=[1,2,3];
    const b = arr.map((v,i,arr) => {
      return v+1;
    });
    console.log(b)
*/

// filter
/*
Array.prototype.filter=function(fn){
    return this.reduce((pre,curr,currInx,arr) => {
    console.log(pre,curr)
    if(fn(curr, currInx, arr)){
        pre.push(curr);
    }
    return pre;
    },[])
}
const arr=[1,2,3];
const b = arr.filter((v,i,arr) => v > 2);
console.log(b)
*/

// const arr=[1,2,3];
// arr.some((v,i,num),thisArg)
/*
// some
Array.prototype.some=function(fn){
  for(let i=0;i<this.length;i++){
    console.log(i)
    if(fn(this[i], i, this)){
      return true
    }
  }
  return false
}
const arr=[1,2,3];
const b = arr.some((v,i,arr) => v === 1);
console.log(b)
*/
//  reduce
/*
Array.prototype.reduce=function(...args){
    let init;
    const fn = args[0];
    if(this.length ===0 && !args[1]) throw Error('没有初始值的空数组不能调用此方法')
    if(args.length === 2){
      init = args[1];
    }else {
      init = this[0]
    };
    for(let i= args.length === 2 ? 0 : 1;i<this.length;i++){
      init = fn(init, this[i], i, this);
    }
    return init
  }
  const arr=[1,2,3];
  const b = arr.reduce((pre,curr,currIdx,arr) => {
    console.log('pre',pre);
    console.log('curr',curr);
    
    return curr+pre
  },10);
  console.log(b)
*/
// arr.find((v,i,obj))
// find
/*
Array.prototype.find=function(fn){
    let res;
    for(let i = 0;i < this.length; i++){
      res = fn(this[i], i, this) ? this[i]: undefined;
      if(res) break;
    }
    return res
  }
  const arr=['hhh',1,2,3];
  const b = arr.find((v,i,arr) => typeof v === 'number');
  console.log(b)
*/
// findIndex
/*
Array.prototype.findIndex=function(fn){
  let res;
  for(let i = 0;i < this.length; i++){
    res = fn(this[i], i, this) ? i: -1;
    if(res>=0) break;
  }
  return res
}
const arr=['hhh', 'hi', 1,2,3];
const b = arr.findIndex((v,i,arr) => typeof v === 'number');
console.log(b)
*/

