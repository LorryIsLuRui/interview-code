function fn(n,arr){
    arr.some((val,index)=>{
        if(val!==initArr[index] && val>initArr[index]){
            i=index;
            num+=1;
            return true;
        }
    })
    
}
const n=4;
const arr=[5,2,1,3,4];
let i=0;
let num=0;
const initArr=arr.sort();
fn(n,arr);
// function fn(num){
//     if(num===1){`
//         return 1;
//     }
//     return num*fn(num-1);
// }
// const res=String(fn(6));
// const res1=res.split("").reverse();
// let result=0;
// res1.some((val,index)=>{
//     if(val!=0){
//         result=val;
//         return true;
//     }
// })
// console.log(typeof Number(result));

// #include <bits/stdc++.h>
// using namespace std;
// int main() {
//     long n, ret = 1, j = 0;
//     cin >> n;
//     for(long i = 1; i <= n; ++i) {
//         ret *= i;
//         while(ret % 10 == 0){
//             ret /= 10;
//         }
//         ret %= 10;
//     }
//     cout << ret;
//     return 0;
// }