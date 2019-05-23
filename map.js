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