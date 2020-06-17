// js实现控制并发数，即一个时间内允许异步数
class limitRequest{
    constructor(max){
        this.max = max;
        this.queue = [];
        this.count = 0; // 当前正在执行的异步数量
    }
    promisify(fn, args, res, rej){
        return () => {
            console.log(fn())
            fn()
            .then()
            .catch()
            .finally(() => {
                this.count--;
                if(this.queue.length){
                    const task = this.queue.shift();
                    task();
                }
            })
            this.count++;
        }
    }
    /**
     * 
     * @param {function} fn 异步函数
     * @param  {...any} rest 函数参数
     */
    call(fn){
        return (...rest) => {
            console.log('rest ===> ', arguments);
            return new Promise((resolve, reject) => {
                const task = this.promisify(fn, resolve, reject);
                if(this.count >= this.max){
                    this.queue.push(task);
                }else{
                    task();
                }
            })
        }
    }
}
function get(url){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('get ' + url);
            res();
        }, 1000)
    })
}
function post(url){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('post ' + url);
            res();
        }, 1000)
    })
}
const lp = new limitRequest(2)
const url = 'hhhh';
const getMethod = lp.call(get, url);
const postMethod = lp.call(post, url);
getMethod('1',1000).then(res => {
    console.log(res)
})
getMethod('2', 2000).then(res => {
    console.log(res)
})
getMethod('3', 5000).then(res => {
    console.log(res)
})
