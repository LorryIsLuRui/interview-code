// promise串行
// ES6写法
// https://www.manman.io/2019/03/21/promise_series/
class Serial{
    constructor(pros){
        this.pros = pros;
        this.data = [];
        this.err = [];
        this.gen = this.init();
    }
    *init(){
        for(let fn of this.pros){
            console.log('fn ===> ', fn.toString());
            yield fn();
        }
    }
    exec(){
        const nextRes = this.gen.next();
        if(nextRes.done){
            console.log(this.data);
            console.log(this.err);
            return;
        }
        const promise = nextRes.value;
        promise.then(res => {
            this.data.push(res);
            this.exec()
        }, rej => {
            this.err.push(rej);
            this.exec()
        })
    }
}

function pro(task, result){
    return new Promise((res,rej) => {
        setTimeout(() => {
            if(result){
                console.log(`task ${task} succ`)
                res(`task ${task} succ`);
            }else{
                console.log(`task ${task} rej`)
                rej(`task ${task} rej`);
            }
        }, task * 1000)
    })
};
const pros = Array.of(0, 5, 2).map((v, i) => pro.bind(this, v, i === 1));
const serial = new Serial(pros);
serial.exec();

// 使用异步迭代器实现
// const createAsyncIterator = items => {
//     const arr = items;
//     return {
//         next() {
//             const done = arr.length === 0;
//             const value = arr.shift();
//             return new Promise((resolve, reject) => {
//                 value().finally(() => {
//                     resolve({
//                         value,
//                         done,
//                     })
//                 })
//             })
//         }
//     }
// }
// async function  serial(arr){
//     const obj = {
//         [Symbol.asyncIterator]: createAsyncIterator.bind(null, arr),
//     };
//     for await (let fn of obj){
//         console.log('fn ===> ', fn);
//         fn()
//     }
// }
// serial(pros);