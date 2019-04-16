//TODO: sleep,让程序不着急执行下一步操作
// FIXME:1  可以用setTimeout，但是需要提供回调函数
// setTimeout(()=>{
//     //... 
// },1000);
// FIXME:2
function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time)
    })
}
// sleep(3000).then(()=>{
//     //3000秒之后要执行的操作
// })
// FIXME:3 async,await
(async function(){
    console.log(1)
    await sleep(3000);
    console.log(2)
    await sleep(3000);
    console.log(3)
})()
