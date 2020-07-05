// sort默认以字符串根据字符串UniCode的规则进行排序
//如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，
// 是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

// https://juejin.im/post/5e3cc31f51882549291268bf
// sort原理 https://juejin.im/post/5d78a69d6fb9a06b084d208d
// <10个 插入排序，>10快速排序
// V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，
// 数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。

// 比如说比较函数中比较A和B两个数字，
// 如果我要按升序来排列，则对A和B在比较函数内先比较他们的大小，
//     如果A>B，则返回一个大于0的数，如果A<B，则返回一个小于0的数，则B会排在A后面，若A=B，则返回0。
// 反之我要用降序排列，若A>B，则返回一个小于0的数，B会排在A后面，若B>A，则返回一个大于0的数，B在A先。，若A=B，返回0。

// arr=[30,40,2,28,5];
// // console.log(arr.sort());//[ 0, 2, 28, 4, 5 ]
// const res=arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr);
// TODO:插入排序
// function insert(arr){
//     let temp=0;
//     for(let i=1;i<arr.length;i++){
//         for(let j=i-1;j>=0;j--){
//             if(arr[j+1]<arr[j]){
//                 temp=arr[j+1];
//                 arr[j+1]=arr[j];
//                 arr[j]=temp;
//             }else if(arr[j+1]>=arr[j]) {break};
//         }
//     }
//     return arr;
// }
function QuickSort(arr){
    if(arr.length<=1) return arr;
    const middleIndex=Math.floor((arr.length)/2);
    const middleVal=arr[middleIndex];
    const left=[];
    const right=[];
    for(let i=0;i<arr.length;i++){
        if(middleVal>arr[i]){
            left.push(arr[i])
        }else if(middleVal<arr[i]){
            right.push(arr[i])
        }
    }
    return QuickSort(left).concat([middleVal],QuickSort(right));
}
const arr=[2,1,4,6,0,40,3,-3];
const res=QuickSort(arr);
console.log(res);