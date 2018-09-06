# 重点

## js
---
### 1. http的相关问题
 1. https与http有什么区别?
### 1.前端页面性能优化.

### 2. 数组的相关操作(去重,排序,删除单个元素)
### 3. 前端的排序算法.(冒泡,二分法(快排))
前端排序算法有的思想还是很简单明了的,主要算法有,冒泡排序,二分法(快排).  
[算法](:https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/ )   
1. 冒泡排序   
2. 二分法  
100. 斐波那契数列
101. Math随机数的控制.
### 4. 前端安全(xss,csrf,jwt)常用的攻击手段,常用的加密方法.
### 5. 异步同步问题(promise async await)
### 6. 闭包的实现

使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。

闭包的三个特性:
> 1.函数嵌套函数  
> 2.函数内部可以引用外部的参数和变量  
> 3.参数和函数不会被垃圾机制回收
### 7. 对象的创建,继承
7种创建方法,6种继承方法
### 8. js 的作用域和作用域链
### 9. 前端缓存机制
### 10.前端的数据类型,数据类型的判断,浅拷贝和深拷贝
### 11. 原生ajax,跨越,跨域的解决方案.
jsonp、 document.domain+iframe、window.name、window.postMessage、服务器上设置代理页面

### 12. 原生,vue,react,实现懒加载和预加载.
### 13. this的理解,应用.
### 14.dom操作
### 15.null和undefined的区别.
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

当声明的变量还未被初始化时，变量的默认值为undefined。 null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

（1）变量被声明了，但没有赋值时，就等于undefined。

（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

（3）对象没有赋值的属性，该属性的值为undefined。

（4）函数没有返回值时，默认返回undefined。
null表示"没有对象"，即该处不应该有值。典型用法是：

（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。

### 16.new操作符具体干了什么呢?
### 17.JavaScript中的作用域与变量声明提升？
### 18.WEB应用从服务器主动推送Data到客户端有那些方式？
Commet：基于HTTP长连接的服务器推送技术

基于WebSocket的推送方案

SSE（Server-Send Event）：服务器推送数据新方式


### 19.一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
### 20.网站重构的理解？ 
### 21.js操作获取和设置cookie
### 22.window.requestAnimationFrame(),window.cancelAnimationFrame()
>window.requestAnimationFrame() 将告知浏览器你马上要开始动画效果了，后者需要在下次动画前调用相应方法来更新画面。这个方法就是传递给window.requestAnimationFrame()的回调函数。

>也可这个方法原理其实也就跟setTimeout/setInterval差不多，通过递归调用同一方法来不断更新画面以达到动起来的效果，但它优于setTimeout/setInterval的地方在于它是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销。

可以直接调用，也可以通过window来调用，接收一个函数作为回调，返回一个ID值，通过把这个ID值传给window.cancelAnimationFrame()可以取消该次动画。
```javascript
requestAnimationFrame(callback)//callback为回调函数
```
### 23.call与apply的区别
### 24浏览器缓存，跨域，从输入url到渲染的整个过程，事件(W3C和IE)，TCP三次握手过程，如何实现懒加载(跟预加载的区别)

### 24. 移动页面适配问题.之前有看过你做的一个移动页简历，请问如何实现？我主要是使用REM+Media Query，根据不同尺寸的设备进行不同的font-size设置。然后问我REM和EM的区别，如果父元素的font-size也是采用em表示，那么子元素的font-size怎么计算等。

### 25.怎么理解JS模块化？有没有使用过webpack？
### 26.JS手写二分搜索算法
### 27.SSL握手时有对称加密和非对称加密吗
### 28.js实现对树深度优先遍历与广度优先遍历
参考链接  https://blog.csdn.net/github_38861674/article/details/77937691?locationNum=3&fps=1
### 29.原生DOM操作
技术点: dom的增删查改,dom各种的关系查找(父子,兄弟,祖先,孙子节点,前后节点,前后所有节点,除自己外的所有兄弟节点),节点类型,操纵节点属性,操纵样式class,文本.

参考链接  
[题目](https://juejin.im/entry/585ba05d128fe1006ddc956e)



## css
---
### 1. 元素垂直居中的方法
2. 1px问题的解决方案
3. 经典的布局方法(圣杯,双飞燕,左边固定,右边自适应)
### 4. 对BFC规范的理解？
BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）

5. css3的新特性
6. 伪类和伪元素
7. 盒模型
8. flex
### 7.解释下浮动和它的工作原理？

浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留
浮动元素引起的问题：

>（1）父元素的高度无法被撑开，影响与父元素同级的元素  
>（2）与浮动元素同级的非浮动元素（内联元素）会跟随其后  
>（3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构  



### 8.rem,em.
### 9.margin重叠现象
### 10.常见的清除浮动的方法有哪些？bootstrap是怎么做的？bootstrap是怎么实现grid系统的？
1. 使用空标签清除浮动。  
   这种方法是在所有浮动标签后面添加一个空标签`<div style="clear:both;"></div>` 定义css clear:both. 弊端就是增加了无意义标签。  
2. 使用overflow。  
   给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。  
3. 使用after伪对象清除浮动。  
   该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；  
   ```css
   .clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
   .clearfix{display: inline-block;} /* for IE/Mac */
   ```
   4. 浮动外部元素

### 11. 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

`CSS Sprites`其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。


## html
---
1. HTML5新特性(新增的标签, API等)，如localstorage的用法以及与cookie的区别，如何理解web语义化
2. iframe的优缺点？



## webpack 构建工具
---

## 一般面试问题
---
### 1.你遇到过比较难的技术问题是？你是如何解决的？
### 2.对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？


## 经典参考链接
1. [掘金](https://juejin.im/entry/57b68b8b0a2b58005c8270eb)
2. [剑指offer js](https://blog.csdn.net/column/details/16574.html)
3. [剑指offer niuke](https://www.nowcoder.com/discuss/49349?type=0&order=0&pos=6&page=1)
4. [知乎](https://www.zhihu.com/search?type=content&q=%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98)
5. [前端面试题大全](https://juejin.im/entry/56f06612731956005d3b6795)
