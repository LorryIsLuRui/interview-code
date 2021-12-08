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

// import request from '...';

// const limit = 5;
// const list = [];
// const currNum = 0;
// function myRequest(url){
//     currNum += 1;
//     if(currNum >= limit){
//         list.push(url);
//     }else{
//         request.get(url)
//         .then(() => {
//             currNum -= 1;
//             if(list && list.length > 0){
//                 const nextUrl = list.shift();
//                 myRequest(nextUrl);
//             }
//         }).catch(() => {
//             if(list && list.length > 0){
//                 const nextUrl = list.shift();
//                 myRequest(nextUrl);
//             }
//             currNum -= 1;
//         })
//     }
// }
// function cancelReq(id){
//     list.filter(v => v.id !== id);
// }

// myRequest({id: 1, url: '111'});
// myRequest({id: 2, url: '222'});
// myRequest({id: 3, url: '333'});
// myRequest({id: 4, url: '444'});
// myRequest({id: 5, url: '555'});
// myRequest({id: 6, url: '666'});
// cancelReq(6);


// 简易版
// class Limit{
//     constructor(num){
//       this.num = num;
//       this.list = [];
//       this.curr = 0;
//     }
//     operate(req){
//       this.list.push(req);
//       this.curr += 1;
//       if(this.curr <= this.num){
//         this.exec();
//       }
//     }
//     exec(){
//       if(this.list.length <= 0) return;
//       const req = this.list.shift();
//       req().then(res => {
        
//       }, rej => {
        
//       }).finally(() => {
//         this.curr -= 1;
//         console.log(this.list);
//         this.exec();
//       })
//     }
//   }
//   function get(p){
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         console.log('get method ' + p);
//         res();
//       }, p*1000);
//     })
//   }
//   const l = new Limit(2);
//   l.operate(get.bind(null,10));
//   l.operate(get.bind(null,2));
//   l.operate(get.bind(null,3));
//   l.operate(get.bind(null,1));