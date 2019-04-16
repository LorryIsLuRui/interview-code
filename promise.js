
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
//     if(that.status==='resolved'){
//         console.log('aa');
//         succFn(that.res);
//     }else if(that.status==='rejected'){
//         errFn(that.err);
//     }else if(that.status==='pending'){
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
var p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1000')
    },1000)
})
var p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('200')
    },200)
})
var p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('1500')
    },1500)
});
p3.then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e)
})
var pros=Promise.all([p1,p2,p3]);
pros.then((data)=>{
    console.log('all succ',data);
},(e)=>{
    console.log('one fail',e);
})

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