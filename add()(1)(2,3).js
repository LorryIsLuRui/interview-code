function add(){
    const args=Array.from(arguments);
    let sum = reduce(args);
    function s(){
        const inArgs=Array.from(arguments);
        sum += reduce(inArgs);
        return s;
    }
    s.toString = function(){
        return sum;
    }
    return s
  }
  function reduce(arr){
    return arr.reduce((pre,curr,currIn,arr)=>pre+curr,0);
  }
  console.log(add()(1,2)(1,2)()(3,4)(5)(6,7,8).toString());

  // 简易版本，以不传参数为停止条件
// let sum = 0;
// function add(...rest){
//   if(rest.length === 0) return sum;
//   sum += rest.reduce((pre,curr,currI,arr)=>pre+curr);
//   return add;
// }
// console.log(add(1)(2)(4,3)()) // 10