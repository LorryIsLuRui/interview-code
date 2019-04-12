let obj={
    oppSize:'hi',
    wiperSize:'kk',
    olsize:'pp',
}
const object={};
const patt=/Size/i;
Object.keys(obj).forEach((val,index)=>{
    let result=/^[a-zA-Z]\w+Size$/i.test(val);
    if(result){
        object['参数']=obj[val];
    }
    console.log(object)
})