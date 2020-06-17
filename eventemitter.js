// 2020
class EventEmitter{
  constructor(){
    this.events = {};
  }
  on(name, cb){
    const list = this.events[name] || [];
    list.push(cb);
    this.events[name] = list;
  }
  emit(name, ...data){
    const list = this.events[name] || [];
    list.forEach(v => {
      v(data);
    })
  }
  off(name, cb){
    if(!name || !cb) {
      this.events = {};
      return;
    }
    if(!cb){
      delete this.events[name];
      return;
    }
    const list = this.events[name] || [];
    if(list) this.events[name].filter(v => v!=cb);
    console.log(this.events);
  }
  attach(page){
    const methods = ['on', 'emit', 'off', 'events'];
    for (let m of methods){
      if(page[m]){
        throw Error('on ,emit, off,方法或events属性已存在')
      }
    }
  }
}
// 2019
// class eventEmitter {
//   constructor() {
//     this.events = {};
//     // this
//   }
//   on(eventName, event) {
//     Object.keys(this.events).indexOf(eventName) > 0 && this.events[eventName].length >= 0
//       ? null
//       : (this.events[eventName] = []);
//       this.events[eventName].push(event);
//   }
//   emit(eventName) {
//       const paraArr=Array.from(arguments);
//       const args=paraArr.slice(1);
//       this.events[eventName].forEach(val=>{
//           val(args);
//       })
//   }
// }
function t1(){
    console.log(`test1`);
}
function t11(){
    console.log(`test11`);
}
function t(para = 0){
    console.log(`test`);
}
// //  TODO: 移除事件off，
// //  TODO: 将eventEmitter attach到一个对象
const ee = new EventEmitter();
ee.on("test", t);
ee.emit("test",1);
ee.on("test1", t1);
ee.on("test1", t11);
// ee.emit("test1",1);
ee.emit("test",2);
// ee.emit("test",3);
ee.emit("test1",4);
console.log('ee.events ===> ', ee.events);

setTimeout(() => {
  ee.off('test1', t1);
  console.log('ee.events ===> ', ee.events);
}, 2000)
// console.log(ee)
