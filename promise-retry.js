class Retry{
  constructor({fn, count, time, cb}){
    this.count = count;
    this.origin = count;
    this.time = time;
    this.fn = fn;
    this.cb = cb;
    this.timeout = null;
  }
  exec(){
    if(this.timeout){
      clearTimeout(this.timeout);
    }
    this.fn().then(res => {
      this.cb();
    }, err => {
      console.log(err);
      if(this.count > 0){
        this.count--;
        this.timeout = setTimeout(() => {
          console.log(`失败后第${this.origin - this.count} 次retry`)
          this.exec();
        }, this.time)
      }
    })
  }
}
function fn(){
    console.log('post fn')
  return Promise.reject('fail')
}
function cb(){
  console.log('succ callback');
}
const count = 2; // retry几次
const time = 2000; // 失败之后多少秒开始重新执行
const request = new Retry({fn, count, time, cb});
request.exec();