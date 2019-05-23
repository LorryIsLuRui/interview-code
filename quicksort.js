const quicksort=(arr)=>{

    if(arr.length<=1) return arr;
    const middle=Math.floor(arr.length/2);
    const middleVal=arr.splice(middle,1)[0];
    const left=[];
    const right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<middleVal){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quicksort(left).concat([middleVal],quicksort(right));
}
const arr=[1,2,10,80,-2,0,5];
const res=quicksort(arr);
console.log(res);