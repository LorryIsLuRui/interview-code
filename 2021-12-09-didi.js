// 面试地址
// https://note.youdao.com/s/cMxcMeR6
// 1. 
// [1, [2,4], [3,5]] v=>v<4 [1, [2], [3]]
const find = (array, filterCallback) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element)) {
            res.push(find(element, filterCallback));
        } else {
            if(filterCallback(element)) {
                res.push(element);
            }
        }
    }
    return res;
}
const arr = [1, [2,4], [3,5]];
const res = find(arr, v => v < 4);
console.log(res);