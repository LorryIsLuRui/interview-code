const p1=()=>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log('p1');
                res('p1')
            },2000)
        })
}
const p2=(para)=>{
        setTimeout(()=>{
            console.log('p2',para);
        },3000)
}
var data=null;
function *fn(){
    data=yield p1();
    yield p2(res);
};
const f=fn();
const res=f.next();
const res1=f.next(data);
const res2=f.next();
console.log(res);
console.log(res1);
console.log(res2);