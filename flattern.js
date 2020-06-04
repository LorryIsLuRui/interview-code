/**
 * long description for the file
 *
 * @summary 数组扁平化
 * @author lorry  -  534774764@qq.com
 *
 * Created at     : 2019-04-16 21:15:12
 * Last modified  : 2020-06-03 07:57:09
 */

// 写一个函数，将传进去的数组按深度展开
var list = [1, 2, [3, 4], [5, 6, [7, 8], 9], 10, 11];
// depth 等于 1 时输出 展开一层
// depth = 1 :[1,2,3,4,5,6,[7,8],9,10,11]
// // depth 等于 2 时输出
// depth = 2 :[1,2,3,4,5,6,7,8,9,10,11]
function flattern(list, depth) {
  var result=[];
  list.forEach((val)=>{
    if(Array.isArray(val) && depth>0){
        var child=flattern(val,depth-1);
        result=result.concat(child);
    }else{
        result.push(val);
    }
  });
  return result;
}
console.log(flattern(list, 1));
// for(var i=1;i<6;i++){
//     (function(i){
//         console.log(i)
//     })(i)
// }
