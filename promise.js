
// var pro=new Promise((resolve,reject)=>{
//     resolve();
//     reject();
// });
// pro.then(()=>{

// },()=>{

// });
// TODO:同步
// function myPromise(fn){
//     const that=this;
//     that.status='pending';
//     that.value='';
//     that.err='';
//     function resolve(data){
//         console.log('data-->',data)
//         if(that.status==='pending'){
//             that.status='resolved';
//             that.value=data;
//         }
//     }
//     function reject(error){
//         if(that.status==='pending'){
//             that.status='rejected';
//             that.err=error;
//         }
//     }
//     try{
//         fn(resolve,reject);
//     }catch(e){
//         reject(e);
//     }
// }
// myPromise.prototype.then=function(succFn,errFn){
//     console.log(this)
//     if(this.status==='resolved'){
//         succFn(this.value);
//     }else if(this.status==='rejected'){
//         errFn(this.err);
//     }
// }
// var pro=new myPromise((resolve,reject)=>{
//     resolve('test');
// });
// pro.then((data)=>{
//     console.log('succ->',data)
// },(err)=>{
// console.log('err->',err)
// });
// TODO:异步

// function myPromise(fn){
//     const that=this;
//     that.status='pending';
//     that.value='';
//     that.err='';
//     that.succCallback=null;
//     that.errCallback=null;
//     function resolve(data){
//         if(that.status==='pending'){
//             that.status='resolved';
//             that.value=data;
//             that.succCallback(data);
//         }
//     }
//     function reject(error){
//         if(that.status==='pending'){
//             that.status='rejected';
//             that.err=error;
//             that.errCallback(error);
//         }
//     }
//     try{
//         fn(resolve,reject);
//     }catch(e){
//         reject(e);
//     }
// }
// myPromise.prototype.then=function(succFn,errFn){
//     console.log(this)
//     if(this.status==='resolved'){
//         succFn(this.value);
//     }else if(this.status==='rejected'){
//         errFn(this.err);
//     }else if(this.status==='pending'){
//         this.succCallback=()=>succFn(this.value);
//         this.errCallback=()=>errFn(this.err);
//     }
// }
// var pro=new myPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(Math.random()>0.5){
//             resolve('test');
//         }else{
//             reject('err');
//         }
//     },5000)
// });
// pro.then((data)=>{
//     console.log('succ->',data)
// },(err)=>{
// console.log('err->',err)
// });
// TODO:多个回调的情况下
// function myPromise(fn){
//     const that=this;
//     that.status='pending';
//     that.res='';
//     that.err='';
//     that.succCallbacks=[];
//     that.failCallbacks=[];
//     function resolve(data){
//         if(that.status==='pending'){
//             that.status='resolved';
//             that.res=data;
//             that.succCallbacks.forEach((val,index)=>{
//                 val();
//             })
//         }
//     }
//     function reject(err){
//         if(that.status==='pending'){
//             that.status='rejected';
//             that.err=err;
//             that.failCallbacks.forEach((val,index)=>{
//                 val();
//             })
//         }
//     }
//     try{
//         fn(resolve,reject);
//     }catch(e){
//         reject(e);
//     }
// };

// myPromise.prototype.then=function(succFn,errFn){
//     const that=this;
//     console.log(that)
//     if(that.status==='pending'){
//         // 是异步
//         that.succCallbacks.push(function(){
//             succFn(that.res);
//         })
//         that.failCallbacks.push(function(){
//             errFn(that.err);
//         })
//     }
// }
// var pro=new myPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('testsss');
//     },3000)
// });
// pro.then((data)=>{
//     console.log('succ1--->',data)
// },(e)=>{
//     console.log('err--->',e)
// })
// pro.then((data)=>{
//     console.log('succ2--->',data)
// })
// TODO:promise.all实现
// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('1000')
//     },1000)
// })
// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('200')
//     },200)
// })
// var p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('1500')
//     },1500)
// });
// p3.then((data)=>{
//     console.log(data);
// }).catch((e)=>{
//     console.log(e)
// })
// var pros=Promise.all([p1,p2,p3]);
// pros.then((data)=>{
//     console.log('all succ',data);
// },(e)=>{
//     console.log('one fail',e);
// })

// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('1000')
//     },1000)
// })
// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('2000')
//     },2000)
// })
// var p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('1500')
//     },1500)
// });
// p3.then((data)=>{
//     console.log('p3 then succ--->',data);
// },(err)=>{
//     console.log('p3 then err--->',err);
// })
// Promise.all=function(arr){
//     console.log(arr)
//     var pro= new Promise((resolve,reject)=>{
//         if(arr instanceof Array){
//             let prosNum=arr.length;
//             let resolvedNum=0;
//             const data=[];
//             const err=[];
//             arr.forEach((val,index)=>{
//                 Promise.resolve(val).then((res)=>{
//                     resolvedNum+=1;
//                     data.push(res);
//                     if(resolvedNum===prosNum){
//                         resolve(data);
//                     }
//                 },(error)=>{
//                     err.push(error);
//                     reject(err);
//                 })
//             })
//         }else {
//             reject();
//         }
//     })
//     return pro;
// }
// var pros=Promise.all([p1,p2,p3]);
// pros.then((data)=>{
//     console.log('all succ',data);
// },(err)=>{
//     console.log('one err',err);
// })
// TODO:promises.race
// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('1000')
//     },1000)
// })
// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('2000')
//     },2000)
// })
// var p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('500')
//     },500)
// });
// var pros=Promise.race([p1,p2,p3]);
// pros.then((data)=>{
//     console.log('one succ->',data);
// },(e)=>{
//     console.log('one err->',e);
// })

// Promise.race=function(arr){
//     const pro=new Promise((resolve,reject)=>{
//         if(arr instanceof Array){
//             let prosNum=arr.length;

//             arr.some((val,index)=>{
//                 Promise.resolve(val).then((data)=>{
//                     resolve(data);
//                     return true;
//                 },(e)=>{
//                     reject(e);
//                     return true;
//                 })
//             })
//         }else{
//             reject('need array')
//         }
//     })
//     return pro;
// }
// var p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('1000')
//     },1000)
// })
// var p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('100')
//     },100)
// })
// var p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('500')
//     },500)
// });
// var pros=Promise.race([p1,p2,p3]);
// pros.then((data)=>{
//     console.log('one succ->',data);
// },(e)=>{
//     console.log('one err->',e);
// })

// class Promise{
//     constructor(fn){
//         this.self=this;
//       this.self.status='pending';
//       this.self.fn = fn;
//       this.self.succCb = [];
//       this.self.failCb = [];
//       this.self.data = null;
//       this.self.err = null;
//       console.log('con',this);
      
//       this.self.exec()
//     }
//     resolve(data){
//         console.log('this ===> ', this);
//       if(this.self.status === 'pending'){
//         this.self.status === 'resolved';
//         this.self.data.push(data);
//         this.self.succCb(this.self.data);
//       }
//     }
//     reject(err){
//       if(this.self.status === 'pending'){
//         this.self.status === 'rejected';
//         this.self.err.push(err);
//         this.self.failCb(this.self.err);
//       }
//     }
//     exec(){
//       this.self.fn(this.self.resolve, this.self.reject);
//     }
//     then(res, rej){
//         const { status } = this.self;
//         console.log('then',this);
//         if(status === 'pending'){
//         console.log('then1',this);
        
//         this.self.succCb = res;
//         this.self.failCb = rej;
//       }
//     }
//   }
// es6 下面写法需要babel转换
/*
class Promise{
  constructor(props){
    this.status = 'pending';
    this.data = null;
    this.err = null;
    this.succCb = null;
    this.failCb = null;
    
    props(this.resolve, this.reject);
  }
  reject = (para) => {
    if(this.status === 'pending' && this.failCb){
        this.status = 'rejected';
        this.err = para;
        this.failCb(this.err);
    }
  }
  resolve = (para) => {
    if(this.status === 'pending' && this.succCb){
        this.status = 'resolved';
        this.data = para;
        this.succCb(this.data);
    }
  }
  say = () => {
      console.log('hhh')
  }
  then(res, err){
    if(this.status === 'pending'){
      this.succCb = res;
      this.failCb = err;
    }
  }
}
  const p=new Promise((res,rej)=>{
    setTimeout(() => {
      console.log('timeout')
      res('promise');
    }, 1000)
  })
  p.then(res=>{
    console.log(res);
  },rej=>{
    console.log(rej);
  });
  p.say();
*/
/*
class Promise{
    name = 'lorry'
    click = () => {
        console.log('constructor')
    }
    click(){
        console.log('proto')
    }
    constructor(fn){
        this.status='pending';
        this.fn = fn;
        this.succCb = [];
        this.failCb = [];
        this.data = [];
        this.err = [];
        const resolve = (data) => {
            if(this.status === 'pending'){
                this.status === 'resolved';
                this.data.push(data);
                this.succCb.forEach((v) => {
                    v(this.data);
                });
            }
        }
        const reject = (err) => {
            if(this.status === 'pending'){
                this.status === 'rejected';
                this.err.push(err);
                this.failCb.forEach((v) => {
                    v(this.err);
                });
            }
        }
        this.fn(resolve,reject)
    }
    then(res, rej){
      if(this.status === 'pending'){
        this.succCb.push(res);
        this.failCb.push(rej);
      }
      return this;
    }
  }
  const p=new Promise((res,rej)=>{
    setTimeout(() => {
      res('promise');
    }, 1000)
  });
  console.log('p.name ===> ', p.name);
  console.log('p.status ===> ', p.status);
  p.click();
  p.then(res=>{
    console.log(res);
  },rej=>{
    console.log(rej);
  })
  .then(res=>{
    console.log('2',res);
  },rej=>{
    console.log('2',rej);
  });
  */

//   Promise.allSettled()
/*
Promise.allSettled = function (arr){
    const data = [];
    let num=0;
    return new Promise((resolve, reject) => {
      arr.forEach((v,i,arr)=>{
        const pro = Promise.resolve(v);
        pro.then(res => {
          data.push({
            status: 'fulfilled',
            value: res,
          });
          num += 1;
          if(num === arr.length) resolve(data);
        }, err => {
          data.push({
            status: 'rejected',
            reason: err,
          });
          num += 1;
          if(num === arr.length) resolve(data);
        })
      })
      
    })
  }
  function createProArr(arr){
    return arr.map((v,i,arr)=>new Promise((res,rej)=>{
      console.log(v + ' promise done')
      if(v<2) res(v);
      else rej(v + ' reject')
    }))
  }
  const arr = [1,4,1,2]; 
  const pros=createProArr(arr);
  Promise.allSettled(pros).then(res=>{
    console.log('all res ',res);
  },rej=>{
    console.log('all rej ', rej);
  })
*/
// const arr=[1,2,3];
// arr.map((v,i,arr))