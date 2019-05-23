class eventEmitter {
  constructor() {
    this.events = {};
    // this
  }
  on(eventName, event) {
    Object.keys(this.events).indexOf(eventName) > 0 && this.events[eventName].length >= 0
      ? null
      : (this.events[eventName] = []);
      this.events[eventName].push(event);
  }
  emit(eventName) {
      const paraArr=Array.from(arguments);
      const args=paraArr.slice(1);
      this.events[eventName].forEach(val=>{
          val(args);
      })
  }
}
const ee = new eventEmitter();
ee.on("test", para => {
  console.log("test", para);
});
ee.emit("test",1);
ee.on("test1", para => {
  console.log("test1", para);
});
ee.emit("test1",1);
ee.emit("test",2);
ee.emit("test",3);
ee.emit("test",4);
