### 1. 观察者模式实现 ?
[观察者模式的实现容易理解](https://blog.csdn.net/q1056843325/article/details/53353850gv)

现在我们想实现这样的功能 
定义一个事件对象，它有以下功能

- 监听事件（订阅公众号）
- 触发事件（公众号发布）
- 移除事件（取订公众号）
  
当然我们不可能只订阅一个公众号，可能会有很多 
所以我们要针对不同的事件设置不同的”键” 
这样我们储存事件的结构应该是这样的
```JS
//伪代码
Event = {
    name1: [回调函数1,回调函数2,...],
    name2: [回调函数1,回调函数2,...],
    name3: [回调函数1,回调函数2,...],
}


var Event = (function(){
    var list = {},
        listen,
        trigger,
        remove;
    listen = function(key,fn){ //监听事件函数
        if(!list[key]){
            list[key] = []; //如果事件列表中还没有key值命名空间，创建
        }
        list[key].push(fn); //将回调函数推入对象的“键”对应的“值”回调数组
    };
    trigger = function(){ //触发事件函数
        var key = Array.prototype.shift.call(arguments); //第一个参数指定“键”
        msg = list[key];
        if(!msg || msg.length === 0){
            return false; //如果回调数组不存在或为空则返回false
        }
        for(var i = 0; i < msg.length; i++){
            msg[i].apply(this, arguments); //循环回调数组执行回调函数
        }
    };
    remove = function(key, fn){ //移除事件函数
        var msg = list[key];
        if(!msg){
            return false; //事件不存在直接返回false
        }
        if(!fn){
            delete list[key]; //如果没有后续参数，则删除整个回调数组
        }else{
            for(var i = 0; i < msg.length; i++){
                if(fn === msg[i]){
                    msg.splice(i, 1); //删除特定回调数组中的回调函数
                }
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
})();
var fn = function(data){
    console.log(data + '的推送消息：xxxxxx......');
}
Event.listen('某公众号', fn);
Event.trigger('某公众号', '2016.11.26');
Event.remove('某公众号', fn);

```
### 2.发布订阅模式的实现?

### 3.观察者模式和发布订阅模式的区别?
[区别](https://www.jianshu.com/p/594f018b68e7)
[很详细的区别让人明白](https://www.cnblogs.com/viaiu/p/9939301.html)
[经典博文](https://juejin.im/post/5bce9a35f265da0abd355715)   

### 4. 浏览器事件有哪些过程? 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听? addEventListener 参数分别是什么 ?

1. js中时间执行的整个过程称之为事件流，分为三个阶段：事件捕获阶段，事件目标处理函数、事件冒泡。
 
      - 其中捕获（Capture）是 事件对象(event object) 从 window 派发到 目标对象父级的过程。
      - 目标（Target）阶段是 事件对象派发到目标元素时的阶段，如果事件类型指示其不冒泡，那事件传播将在此阶段终止。
      - 冒泡（Bubbling）阶段 和捕获相反，是以目标对象父级到 window 的过程。
      在任一阶段调用 stopPropagation 都将终止本次事件的传播。


2. addEventListener的参数
```js
//第三个参数是一个布尔值如果为true表示在捕获阶段调用事件处理程序,如果为false表示在冒泡阶段调用事件处理程序.
  window.addEventListener('click',function (event) {
    console.log(event)
  },true)
//note: addEventListener形式注册的监听事件接受参数以指定是否在捕获阶段触发本次事件，默认值为否(既冒泡阶段)。以事件处理器注册的事件在非捕获阶段触发
```

3.为什么一般在冒泡阶段执行事件程序?因为冒泡阶段可以阻止祖先元素上相同类型事件的触发,`e.cancelBubble=true;e.stopPropagation()`


### 5. JSbridge原理, js和native是如何通信的?
[jsBridge](https://juejin.im/post/5abca877f265da238155b6bc)
[如何通信](https://www.e-learn.cn/content/qita/915582)
[好文章](https://www.cnblogs.com/dailc/p/5931324.html)
[jsbridge](https://www.e-learn.cn/content/qita/915582)

### 6.前端跨域?
[详细参考](https://segmentfault.com/a/1190000011145364)
1. jsonp
2. cors(跨域资源共享)
3. nginx反向代理
4. WebSocket协议跨域
5. postMessage跨域