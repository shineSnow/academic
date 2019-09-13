# js生僻知识

## 1.js 自定义事件实现
1. 原生提供了3个方法实现自定义事件
2. createEvent，设置事件类型，是 html 事件还是 鼠标事件
3. initEvent 初始化事件，事件名称，是否允许冒泡，是否阻止自定义事件
4. dispatchEvent 触发事件

## 2.js中arguments的用法   
[js中arguments的用法](https://www.cnblogs.com/LMJBlogs/p/6024148.html)  

## 3. js call(),apply(),bind()绑定函数的具体用法.

##4. js变量提升.

##5.js this的理解
[参考]( https://www.cnblogs.com/nuanriqingfeng/p/5789003.html)  

##6.html5的新特性有哪些?

##7.函数声明和函数表达式  

函数声明的典型格式：
```js
function functionName(arg1, arg2, ...){
    <!-- function body -->
}
```
函数表达式  
```js
var  variable=function(arg1, arg2, ...){
            <!-- function body -->
}
```

先给出var声明提前的结论：  

    变量在声明它们的脚本或函数中都是有定义的，变量声明语句会被提前到脚本或函数的顶部。但是，变量初始化的操作还是在原来var语句的位置执行，在声明语句之前变量的值是undefined。
```js
var handsome='handsome';
function handsomeToUgly(){
    alert(handsome);
    var handsome='ugly';
    alert(handsome);
}
handsomeToUgly();

/*
正确的输出结果是：
先输出undefined，然后输出ugly。

错误的输出结果是：
先输出handsome，然后输出ugly。

*/
```

函数声明提前错误的例子:
```js
sayTruth();
if(1){
    function sayTruth(){alert('myvin is handsome')};
}
else{
    function sayTruth(){alert('myvin is ugly')};
}

/*
在浏览器不抛出错误的情况下（请自行测试相应的浏览器是否有抛出错误的情况，为啥我不测试？我能说我懒么。。。），浏览器的输出结果是输出myvin is ugly（我不愿承认，但是事实就是这样啊啊啊啊，难道道出了人丑就该多读书？？？？？？）。

为什么呢？当然是声明提前了。因为函数声明提前，所以函数声明会在代码执行前进行解析，执行顺序是这样的，先解析function sayTruth(){alert('myvin is handsome')}，在解析function sayTruth(){alert('myvin is ugly')}，覆盖了前面的函数声明，当我们调用sayTruth()函数的时候，也就是到了代码执行期间，声明会被忽略，所以自然会输出myvin is ugly（好残酷的现实。。。）。忘了的可以看上面说过的：


*/
```
以下是浏览器上真实的反应
```js
sayTruth();
if(1){
    function sayTruth(){alert('myvin is handsome')};
}
else{
    function sayTruth(){alert('myvin is ugly')};
}
VM1430:1 Uncaught TypeError: sayTruth is not a function
    at <anonymous>:1:1
```