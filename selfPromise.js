    function MyPromise(fn) {
      let self = this; //缓存当前的promise实例
      self.value = null; //成功时的值
      self.error = null; //失败时的值
      self.onFulfilled = null; //成功的回调函数
      self.onRejected = null; //失败时候的回调函数

      function resolve(value) {
        self.value = value;
        self.onFulfilled(self.value); //resolve时执行成功的回调
      }

      function reject(error) {
        self.error = error;
        self.onRejected(self.error) //reject时执行失败的回调
      }
      fn(resolve, reject)
    }
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
      //在这里给proimses实例注册成功和失败的回调
      this.onFulfilled = onFulfilled;
      this.onRejected = onRejected;
    }
    module.exports = MyPromise