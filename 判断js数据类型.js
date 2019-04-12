/**
 * long description for the file
 *
 * @summary short description for the file
 * @author lorry  -  534774764@qq.com
 *
 * Created at     : 2019-04-12 17:05:30 
 * Last modified  : 2019-04-12 17:22:06
 */
// TODO:instanceof判断对象
const Person=function(){}
const p1=new Person();
const res1=p1 instanceof Person;
console.log(res1);//true
// TODO:instanceof判断原始类型
const str1='lorry';
const res2=str1 instanceof String;
console.log(res2);//false

const bool=false;
console.log(bool instanceof Boolean);//false

const sym=Symbol();
console.log(sym instanceof Symbol)

// TODO: 如何让 instanceof判断原始类型
const str2=new String(str1);
const res3=str2 instanceof String;
console.log(res3);//true