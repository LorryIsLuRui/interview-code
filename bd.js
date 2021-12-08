// 测试题
var app = {
    fn1: function () {
      console.log(this); // app
    },
    fn2: function(){
      return function() {
        console.log(this); // window
      }
    },
    fn3: function() {
      function fn() {
        console.log(this);// window
      }
      return fn()
    },
    fn4: function() {
      return {
        fn: function () {
          console.log(this); // window     xxxxxxxxx fn
        }
      }
    },
    fn5: function() {
      setTimeout(function () {
        console.log(this); // window
      },10) 
    },
    fn6: function() {
      setTimeout( () => {
        console.log(this); // window   xxxxxxx app
      },20) 
    },
    fn7: function() {
      setTimeout(function () {
        console.log(this); // app
      }.bind(this),30) 
    },
    fn8: () => {
      setTimeout( () => {
        console.log(this); // window
      },40) 
    }
  }
  app.fn1() // app
  app.fn2()() // window
  app.fn3() // window
  app.fn4().fn() // fn
  app.fn5() // window
  app.fn6() // app
  app.fn7() // app
  app.fn8() // window
  