# 重点

[toc]

### js

---
### 1. http的相关问题   
 1. https与http有什么区别和联系?  
    [https与http的区别和联系,以及加密的原理,过程,https的优缺点](https://blog.csdn.net/xionghuixionghui/article/details/68569282)  
    [HTTPS握手](https://blog.csdn.net/hherima/article/details/52469674)  
    [https握手证书验证](https://blog.csdn.net/sunansheng/article/details/78581468)

 2. http1.0, http1.1, http2.0的区别?     
    [参考](https://www.cnblogs.com/heluan/p/8620312.html)   
    [http2.0的优劣](https://blog.csdn.net/u012657197/article/details/77877840)  

 3. *http常见的状态码?*  

   	简单版  
   	
   		100  Continue	继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息  
   	
   		200  OK 		正常返回信息  
   		201  Created  	请求成功并且服务器创建了新的资源  
   		202  Accepted 	服务器已接受请求，但尚未处理  
   	
   		301  Moved Permanently  请求的网页已永久移动到新位置。  
   		302 Found  		临时性重定向。  
   		303 See Other  	临时性重定向，且总是使用 GET 请求新的 URI。  
   		304  Not Modified 自从上次请求后，请求的网页未修改过。  
   	
   		400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
   		401 Unauthorized 请求未授权。
   		403 Forbidden  	禁止访问。
   		404 Not Found  	找不到如何与 URI 相匹配的资源。
   	
   		500 Internal Server Error  最常见的服务器端错误。
   		503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。


    完整版


        1**(信息类)：表示接收到请求并且继续处理  
        100——客户必须继续发出请求  
        101——客户要求服务器根据请求转换HTTP协议版本  
    
        2**(响应成功)：表示动作被成功接收、理解和接受  
        200——表明该请求被成功地完成，所请求的资源发送回客户端  
        201——提示知道新文件的URL  
        202——接受和处理、但处理未完成  
        203——返回信息不确定或不完整   
        204——请求收到，但返回信息为空  
        205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件   
        206——服务器已经完成了部分用户的GET请求
    
        3**(重定向类)：为了完成指定的动作，必须接受进一步处理  
        300——请求的资源可在多处得到  
        301——本网页被永久性转移到另一个URL   
        302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。  
        303——建议客户访问其他URL或访问方式  
        304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用  
        305——请求的资源必须从服务器指定的地址得到  
        306——前一版本HTTP中使用的代码，现行版本中不再使用  
        307——申明请求的资源临时性删除
    
        4**(客户端错误类)：请求包含错误语法或不能正确执行  
        400——客户端请求有语法错误，不能被服务器所理解  
        401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用  
        HTTP 401.1 - 未授权：登录失败  
        　　HTTP 401.2 - 未授权：服务器配置问题导致登录失败  
        　　HTTP 401.3 - ACL 禁止访问资源  
        　　HTTP 401.4 - 未授权：授权被筛选器拒绝  
        HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败  
        402——保留有效ChargeTo头响应  
        403——禁止访问，服务器收到请求，但是拒绝提供服务  
        HTTP 403.1 禁止访问：禁止可执行访问  
        　　HTTP 403.2 - 禁止访问：禁止读访问  
        　　HTTP 403.3 - 禁止访问：禁止写访问  
        　　HTTP 403.4 - 禁止访问：要求 SSL  
        　　HTTP 403.5 - 禁止访问：要求 SSL 128  
        　　HTTP 403.6 - 禁止访问：IP 地址被拒绝  
        　　HTTP 403.7 - 禁止访问：要求客户证书  
        　　HTTP 403.8 - 禁止访问：禁止站点访问  
        　　HTTP 403.9 - 禁止访问：连接的用户过多  
        　　HTTP 403.10 - 禁止访问：配置无效  
        　　HTTP 403.11 - 禁止访问：密码更改  
        　　HTTP 403.12 - 禁止访问：映射器拒绝访问  
        　　HTTP 403.13 - 禁止访问：客户证书已被吊销  
        　　HTTP 403.15 - 禁止访问：客户访问许可过多   
        　　HTTP 403.16 - 禁止访问：客户证书不可信或者无效   
        HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效   
        404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL  
        405——用户在Request-Line字段定义的方法不允许  
        406——根据用户发送的Accept拖，请求资源不可访问  
        407——类似401，用户必须首先在代理服务器上得到授权  
        408——客户端没有在用户指定的饿时间内完成请求  
        409——对当前资源状态，请求不能完成  
        410——服务器上不再有此资源且无进一步的参考地址  
        411——服务器拒绝用户定义的Content-Length属性请求  
        412——一个或多个请求头字段在当前请求中错误   
        413——请求的资源大于服务器允许的大小  
        414——请求的资源URL长于服务器允许的长度  
        415——请求资源不支持请求项目格式  
        416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段  
        417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。   
    
        5**(服务端错误类)：服务器不能正确执行一个正确的请求  
        HTTP 500 - 服务器遇到错误，无法完成请求  
        　　HTTP 500.100 - 内部服务器错误 - ASP 错误  
        　　HTTP 500-11 服务器关闭  
        　　HTTP 500-12 应用程序重新启动  
        　　HTTP 500-13 - 服务器太忙  
        　　HTTP 500-14 - 应用程序无效  
        　　HTTP 500-15 - 不允许请求 global.asa  
        　　Error 501 - 未实现  
        HTTP 502 - 网关错误   
        HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常  
 4. TCP的三次握手与四次挥手（详解+动图）  
 [参考](https://blog.csdn.net/qzcsu/article/details/72861891)  

    三次握手  
        client -> server   SYN = 1,seq = x;  
        server -> client   SYN = 1,ACK=1,seq= y,ack=x+1;  
        client -> sever    ACK=1, seq = x+1,ack=y+1;    
        数据传输

    四次挥手  
        client -> server FIN = 1,seq =u;  
        server -> client ACK=1,seq=v,ack=u+1;  
        传输数据  
        server -> client FIN=1,ACK=1,seq=w,ack=u+1;   
        client -> server ACK=1,seq=u+1.ack=w+1;  
  [http传输过程超详解](https://www.cnblogs.com/kongxy/p/4615226.html) 

        页面渲染过程    
    [页面渲染参考](https://www.cnblogs.com/dojo-lzz/p/3983335.html)   
    [页面渲染参考 更好](https://www.cnblogs.com/CandyManPing/p/6635008.html)   
        现代浏览器渲染页面的过程是这样的：解析HTML以构建DOM树 –> 构建渲染树 –> 布局渲染树 –> 绘制渲染树。

        DOM树是由HTML文件中的标签排列组成，渲染树是在DOM树中加入CSS或HTML中的style样式而形成。渲染树只包含需要显示在页面中的DOM元素，像<head>元素或display属性值为none的元素都不在渲染树中。
         
        在浏览器还没接收到完整的HTML文件时，它就开始渲染页面了，在遇到外部链入的脚本标签或样式标签或图片时，会再次发送HTTP请求重复上述的步骤。在收到CSS文件后会对已经渲染的页面重新渲染，加入它们应有的样式，图片文件加载完立刻显示在相应位置。在这一过程中可能会触发页面的重绘或重排。

    重绘或重排。    [连接](https://blog.csdn.net/qq_20544669/article/details/80494475)  
            当DOM的变化影响了元素的几何属性（宽和高）——比如改变边框宽度或给段落增加文字，导致行数增加——浏览器需要重新计算元素的集合属性，同样其他元素的集合属性和位置也会受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程称为“重排”。完成重排后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为“重绘”（比如改变一个元素的背景色并不影响几何属性）。  

            重排：当页面布局和几何属性改变时就需要“重排”。下述情况会发生重排：
         
            添加或删除可见的DOM元素。
            元素的位置、尺寸（内外边距、边框厚度、宽高等属性）改变
            内容改变（文本改变或图片被另一个不同尺寸的图片替代）
            页面渲染器初始化
            浏览器窗口尺寸改变。
              "重绘"不一定需要"重排"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。但是，"重排"必然导致"重绘"，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。
        最小化重绘和重排 
          重回和重排代价可能会很昂贵，因此一个好的提高程序响应速度的策略就是减少此类操作的发生。为了减少发生的次数，应该合并多次对DOM和样式的修改，然后依次处理掉。
         
          上述示例中有三个样式被改变，每一个都会影响元素的几何结构，会导致浏览器触发三次重排，可以优化，合并操作 
         
        1、使用cssText属性实现
        var el = document.getElementById('myDiv');
        el.style.cssText = 'border-left:1px; border-right: 2px; padding: 5px;'ar el = documen
         
        2、修改css的class名称
         
        批量修改DOM 
          当需要对DOM元素进行一系列操作，可以通过以下步骤来减少重绘和重排的次数： 
        1、使元素脱离文档流（重排） 
        2、对应用多重改变 
        3、把元素带回文档（重排）
         
        有三种基本方法可以使DOM脱离文档流： 
        1、隐藏元素，应用修改，重新显示 
        2、使用文档片段在当前DOM之外构建一个子树，再把它拷贝回文档（推荐） 
        3、将原始元素拷贝到一个脱离文档的节点中，修改副本，完成后再替换原始元素。

 5. 认识http的基本信息.  
 [重点参考链接,](http://www.cnblogs.com/ranyonsue/p/5984001.html)  
    [http详解搜索百度](https://blog.csdn.net/u013219814/article/details/56290792)  
 6. OSI，TCP/IP，五层协议的体系结构，以及各层协议   
 [http的七层协议](https://blog.csdn.net/a5582ddff/article/details/77731537)  

        OSI七层网络协议  
            倒数 物理层->数据链路层->网络层->传输层->会话层->表示层->应用层  
        TCP/IP分层  
            （4层）：网络接口层、 网际层、运输层、 应用层。  
            五层协议 （5层）：物理层、数据链路层、网络层、运输层、 应用层。  
        每一层的协议如下：  

            物理层：RJ45、CLOCK、IEEE802.3 （中继器，集线器）
         
            数据链路：PPP、FR、HDLC、VLAN、MAC （网桥，交换机）
         
            网络层：IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP、 （路由器）
         
            传输层：TCP、UDP、SPX
         
            会话层：NFS、SQL、NETBIOS、RPC
         
            表示层：JPEG、MPEG、ASII
         
            应用层：FTP、DNS、Telnet、SMTP、HTTP、WWW、NFS  
        每一层的作用如下:  
            物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）

            数据链路层：将比特组装成帧和点到点的传递（帧Frame）
         
            网络层：负责数据包从源到宿的传递和网际互连（包PackeT）
         
            传输层：提供端到端的可靠报文传递和错误恢复（段Segment）
         
            会话层：建立、管理和终止会话（会话协议数据单元SPDU）
         
            表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）
         
            应用层：允许访问OSI环境的手段（应用协议数据单元APDU）


### 1.加密算法-对称加密,非对称加密,创建的用户密码加密措施.
[对称加密,非对称加密](http://www.ruanyifeng.com/blog/2013/06/rsa_algorithm_part_one.html)
[常见的用户密码加密措施](https://blog.csdn.net/cocacola456/article/details/77714861)
### 1.前端页面性能优化.  
[http缓存](https://www.cnblogs.com/chenqf/p/6386163.html)  
[详解http缓存字段](https://www.cnblogs.com/shangxiaofei/p/6214560.html)  
[HTTP 缓存的四种风味与缓存策略](https://segmentfault.com/a/1190000006689795)

    1.http 请求方面，减少请求数量，请求体积.
    2. 压缩资源，提取公共资源压缩，提取 公共的 css ，js   
    3. 使用雪碧图，使用字体图表（阿里矢量图库）
    4. 使用 CDN(2-4个)，抛开无用的 cookie
    5. 减少重绘重排，CSS属性读写分离，最好不要用js 修改样式，dom 离线更新，渲染前指定图片的大小
    6. js 代码层面的优化，减少对字符串的计算，合理使用闭包，首屏的js 资源加载放在最底部
    7. 缓存资源(网站缓存相关的知识,数据库缓存,后端语言缓存,服务器缓存,http缓存机制,浏览器缓存机制,前端页面缓存方法)  
        http缓存强制缓存,对比缓存.
    8. css文件放在头部,js文件放在body结束标签前(每个问题都需要再问一个为什么?,联系浏览器加载顺序,可接 从一个url输入到浏览器到页面出现都发生了什么?)  
    9.懒加载
    10,函数节流,函数防抖
### 2. 数组的相关操作(去重,排序,删除单个元素,最大值,最小值,为维数组变一维) 

    1.找出下列正数组的最大差值:
        这是通过一道题目去测试对于基本的数组的最大值的查找，很明显我们知道，最大差值肯定是一个数组中最大值与最小值的差
```javscript
function getMaxProfit(arr) {
    var minPrice = arr[0];
    var maxProfit = 0;
    for(var i = 0; i< arr.length;i++) {
        var currentPrice = arr[i];
        var minPrice = Math.min(minPrice,currentPrice);
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit,potentialProfit);
    }
    return maxProfit;
}
```
    2.数组去重

```javascript
    1.利用s对象不能设置开通一个值的的的机制实现去重.

        function unique(arr) {
            var tempArr = [];
            var obj={};
            for(var i= 0;i<arr.length;i++) {
                var currentVal = arr[i];
                if(!obj[currentVal]) {
                    obj[currentVal] = 1;
                    tempArr.push(currentVal);
                }
            };
            return tempArr;
        }

```

```javascript
    2.利用indexOf()方法去重

        function unique(arr) {
            var tempArr = [];
            for(var i=0;i< arr.length;i++) {
                if(tempArr.indexOf(arr[i]) == -1) {
                    tempArr.push(arr[i]);
                }
            }
            return tempArr;
        }
```

```javascript
    3.利用indexOf()里面只获取数组中第一次元素出现的位置去重

        function unique(arr) {
            var n = [arr[0]];
            for(var i= 1; i< arr.length;i++ ) {
                if(arr.indexOf(arr[i]) === i) {
                    n.push(arr[i])
                }
            }
            return n;
        }
```

```JavaScript
4.es6 ... Set()去重, Array.from()

    var new = [...new Set(arr)];
    var new  = Array.from(new Set(arr))
```
### 3. 前端的排序算法.(冒泡,二分法(快排))
[js家的十大算法](https://www.jianshu.com/p/1b4068ccd505)
[算法](https://www.jackpu.com/qian-duan-mian-shi-zhong-de-chang-jian-de-suan-fa-wen-ti/ )  

    前端排序算法有的思想还是很简单明了的,主要算法有,冒泡排序,二分法(快排)
    如果抽到算法题目的话，应该大多都是比较开放的题目，不限定算法的实现，但是一定要求掌握其中的几种，所以冒泡排序，这种较为基础并且便于理解记忆的算法一定需要熟记于心。
     
    1. 冒泡排序   
        冒泡排序算法就是依次比较大小，小的的大的进行位置上的交换  
```javascript
function bubbleSort(arr) {
    for(let i = 0,l = arr.length;i<l-1;i++) {
        for(let j= i+1;j<l;j++) {
            if(arr[i] >arr[j]) {
                let temp= arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}
```

    2. 二分法(快排)
        算法参考某个元素值，将小于它的值，放到左数组中，大于它的值的元素就放到右数组中，然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好顺序的数组了。
```javascript
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for(let i = 1; i<arr.length;i++) {
        if(arr[i] > q) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return [].concat(quickSort(leftArr),q,quickSort(rightArr))
}
```

    100. 斐波那契数组前n项数组  1,1,2,3,5,8
```javascript
function getFibonacci(n) {
    let fibarr = [];
    let i=1;
    while(i<= n) {
        if(i <=2) {
            fibarr.push(1);
        } else {
            var l = fibarr.length;
            fibarr.push(fibarr[i-2] + fibarr[i-3])
        }
        i++;
    }

    return fibarr;
}
```
    101. Math随机数的控制.
```javascript
取[min,max]之间的值
Math.floor(Math.random()*(max-min+1)+min);
```
[随机数](https://www.cnblogs.com/starof/p/4988516.html)


### 4. 前端安全(xss,csrf,jwt)常用的攻击手段,常用的加密方法.
    常用的攻击手段:
        1. xss 跨站脚本攻击，主要是前端层面的，用户在输入层面插入攻击脚本，改变页面的显示，或则窃取网站 cookie，预防方法：不相信用户的所有操作，对用户输入进行一个转义，不允许 js 对 cookie 的读写  
        2. csrf 跨站请求伪造，以你的名义，发送恶意请求，通过 cookie 加参数等形式过滤 
        3. 警惕iframe带来的风险.给iframe添加sandbox <iframe sandbox src="..."> ... </iframe>.这样浏览器就会限制iframe只能使用静态资源展示.
        4.别被点击劫持了.有个词叫做防不胜防，我们在通过iframe使用别人提供的内容时，我们自己的页面也可能正在被不法分子放到他们精心构造的iframe或者frame当中，进行点击劫持攻击。  
        有多种防御措施都可以防止页面遭到点击劫持攻击，例如Frame Breaking方案。一个推荐的防御方案是，使用X-Frame-Options：DENY这个HTTP Header来明确的告知浏览器，不要把当前HTTP响应中的内容在HTML Frame中显示出来。  
        5. 文件上传漏洞.
        网站允许用户在评论里上传图片，攻击者在上传图片的时候，看似提交的是个图片文件，实则是个含有JavaScript的脚本文件。该文件逃过了文件类型校验（这涉及到了恶意文件上传这个常见安全问题，但是由于和前端相关度不高因此暂不详细介绍），在服务器里存储了下来。接下来，受害者在访问这段评论的时候，浏览器会去请求这个伪装成图片的JavaScript脚本，而此时如果浏览器错误的推断了这个响应的内容类型（MIME types），那么就会把这个图片文件当做JavaScript脚本执行，于是攻击也就成功了。  
        如何防御
        浏览器根据响应内容来推断其类型，本来这是个很“智能”的功能，是浏览器强大的容错能力的体现，但是却会带来安全风险。要避免出现这样的安全问题，办法就是通过设置"X-Content-Type-Options"这个HTTP Header明确禁止浏览器去推断响应类型。
    
        同样是上面的攻击场景，后端服务器返回的Content-Type建议浏览器按照图片进行内容渲染，浏览器发现有X-Content-Type-OptionsHTTP Header的存在，并且其参数值是nosniff，因此不会再去推断内容类型，而是强制按照图片进行渲染，那么因为实际上这是一段JS脚本而非真实的图片，因此这段脚本就会被浏览器当作是一个已经损坏或者格式不正确的图片来处理，而不是当作JS脚本来处理，从而最终防止了安全问题的发生。
        6. SQL注入攻击  
        SQL注入(SQL Injection)，应用程序在向后台数据库传递SQL(Structured Query Language，结构化查询语言)时，攻击者将SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令.
        解决方案:
        (1) 防止系统敏感信息泄露。设置php.ini选项display_errors=off，防止php脚本出错之后，在web页面输出敏感信息错误，让攻击者有机可乘。(2) 数据转义。设置php.ini选项magic_quotes_gpc=on，它会将提交的变量中所有的’(单引号)，”(双引号)，\(反斜杠)，空白字符等都在前面自动加上\。或者采用mysql_real_escape()函数或addslashes()函数进行输入参数的转义。(3) 增加黑名单或者白名单验证。白名单验证一般指，检查用户输入是否是符合预期的类型、长度、数值范围或者其他格式标准。黑名单验证是指，若在用户输入中，包含明显的恶意内容则拒绝该条用户请求。在使用白名单验证时，一般会配合黑名单验证。 




### 5. 异步同步问题(promise async await)
[js单线程,同步,异步的由来](https://www.cnblogs.com/c3gen/p/6170504.html)
### 6. 闭包的实现

使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。   
*有权访问另一个函数作用域内变量的函数都是闭包。*

闭包的三个特性:
> 1.函数嵌套函数  
> 2.函数内部可以引用外部的参数和变量  
> 3.参数和函数不会被垃圾机制回收
### 7. 对象的创建,继承,对象的属性类型Object.defineProperty()
    7种创建方法,6种继承方法


​        
```javascript
  创建对象的方法:  

    1.new Object()的实例

    var person = new Object();
        person.name = 'jack';
        person.sayName = function() {
            alert(this.name)
        }

    2. 简介的对象字面量

    var person = {
        name :'jack',
        sayName:function() {
            alet(this.name)
        }
    }
    3.工厂模式
    4.构造函数
    5.原型模式
    6.组合使用构造函数和原型模式
    7.动态原型模式
    8.寄生构造函数模式
    9.稳妥构造函数
```

```javascript
    继承的方法
        1.原型链继承
        2.构造函数继承
        3.组合继承
        4.原型式继承
        5.寄生式继承
        6.继承组合式继承(最优)  
            所谓继承组合式继承,即通过借用构造函数来继承属性,通过原型链的混成方法来继承方法.基本思路是:不必为了指定子类的原型而调用超类的构造函数.我们所需要的不过是超类原型的一个副本而已.

        function inheritPrototype(subType,superType) {
            var prototype = Object(superType.prototype);
            subType.constructor = subType;
            subType.prototype = prototype;
        }

        function superType(name) {
            this.name = name;
            this.colors = ["red","blue","green"]
        }
        superType.prototype.sayName = function() {
            alert(this.name)
        }
        function subType(name,age) {
            superType.call(this,name);
            this.age = age;
        }
        inheritPrototype(subType,superType)

        subType.prototype.sayAge = function () {
            alert(this.age)
        }
```

### 8. js 的作用域和作用域链  
[参考](https://www.cnblogs.com/buchongming/p/5858026.html)

### 9. 前端缓存机制
[很详细的前端缓存教程](https://blog.csdn.net/shenmill/article/details/71080926)

### 10.前端的数据类型,数据类型的判断,浅拷贝和深拷贝.
[数据类型](https://segmentfault.com/a/1190000014456603)
    前端数据类型
        首先明确ECMAscript中的数据类型分为两种：基本类型和引用类型  
         1.基本类型：即简单的数据段，都是按值访问的，即将一个基本类型的数据赋值给另外一个变量，是通过将原数据拷贝一份赋值的，两变量之间互不影响。
         2.引用类型：即保存在内存中的对象，按引用访问，即将一个引用类型的地址赋值给另一个变量，当该变量改变时，原变量也会随之改变

```javascript
分类: 
    基本数据类型有:String,Number,Boolean,Null,Undefined,Symbol.
    引用数据有: 
        1.第一类:原生对象,objet,Array,Function,Date,RegExp,基于基本类型还衍生出来了三个包装类型:Boolean,Number,String,每当我们读取一个基本数据类型的实例时，后台都会创建一个对应的基本包装类型，从而使我们可以使用不是对象的基本类型调用相应的方法。
        2.第二类内置对象(JS语言提供的不依赖于执行宿主的对象，如Global,Math)。
        3.宿主对象(JS语言提供的任何依赖宿主环境的对象，如IE中的window，WS中的WScript实例，以及任何用户创建的类)
    基本包装类型和引用类型的区别:
        使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存内存中，而自动创建的基本包装类型的对象，只存在于一行代码执行的瞬间，然后立即被销毁，即我们不能在运行时为基本类型值添加属性和方法。如图：

        var s = new String("hello");
        console.log(s.substring(2)); //"llo"
        s.color="red";
        console.log(s.color); //"red"

        var r= "everyone";
        console.log(s.substring(2)); //"eryone"
        r.color="red";
        console.log(r.color); //"everyone"

```
```javascript
前端数据类型的判断 typeof和Object.prototype.toString()辨析
    // Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写,意思是"不是一个数字"
typeof Number(1) === 'number'; // 不要这样使用!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof返回的肯定是一个字符串
typeof String("abc") === 'string'; // 不要这样使用!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 不要这样使用!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // 一个未定义的变量,或者一个定义了却未赋初值的变量

// Objects
typeof {a:1} === 'object';

// 使用Array.isArray或者Object.prototype.toString.call方法可以从基本的对象中区分出数组类型
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要这样使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) ==== 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof Math.sin === 'function';


由以上结果可知typeof在数组，正则，日期，对象上的判断并不好，都是返回object
由此可以引出另一个判断方法Object.prototype.toString();toString()方法返回一个描述某对象的字符串，如果此方法在自定义的对象中未被覆盖，则toString()返回"[object type]",其中type是对象类型。在使用toString()方法检测对象类型时，常用Object.prototype.toString.call()或Object.prototype.toString.apply()来检测，如下代码：

    var toString = Object.prototype.toString;
    toString.call(new Date);//[object Date]
    toString.call(new String);//[object String]
    toString.call(Math);//[object Math]
    toString.call(undefined);//[object Undefined]
    toString.call(null);//[object Null]

```

```JavaScript
    对象的浅拷贝和深拷贝的问题
        1. 深拷贝和浅拷贝是只针对Object和Array这样的复杂类型的  
        2. 也就是说a和b指向了同一块内存，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝  
        3. 浅拷贝， ”Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象  
        4. 深拷贝，JSON.parse()和JSON.stringify()给了我们一个基本的解决办法。但是函数不能被正确处理
        5.深拷贝代码实现

    浅拷贝: [参考链接](https://blog.csdn.net/u010533180/article/details/53389149)
        1.自定义实现:

            function clone(obj) {
                var tempObj= {};
                for(var key in obj) {
                    tempObj[key] = obj[key];
                }
                reutrn tempObj;
            }
        2.使用Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 Object.assign() 进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。

            var simpleObject = Object.assign({},obj)

    深拷贝:

        1.JSON.parse(),JSON.stringfy()

            function deepClone (obj) {
                var tempObj = {};
                tempObj = JSON.parse(JSON.stringfy(obj));
                return tempObj;
            }

            这种方法虽然简单,但是有如下的问题,它会抛弃对象的constructor，也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。 
            这种方法能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象(自己百度一下)，即那些能够被 json 直接表示的数据结构。RegExp对象是无法通过这种方式深拷贝。

        2.递归拷贝
            function deepClone(obj) {
                var tempObj = Array.isArray(obj)? []:{};
                if(obj && typeof obj === "object") {
                    for (var key in obj) {
                        if(obj[key] === deepClone) {
                            continue;
                        }
                        if(obj[key] && typeof obj[key] ==='object') {
                            tempObj[key] = deepClone(obj[key]); 
                        } else {
                            tempObj[key] = obj[key];
                        }

                    }
                }
                return tempObj;
            }
        3.Object.create()   

```
[理解对象Obejct的方法 深入理解](https://www.cnblogs.com/leijee/p/7490822.html)        


### 11. 原生ajax,ajax的优缺点,跨越,跨域的解决方案.
    浏览器的同源策略导致了跨域
    用于隔离潜在恶意文件的重要安全机制
    
    跨域的解决方案: 
[参考链接](https://juejin.im/post/5b5ff1dfe51d4519610e26ec)

```javascript
    1. jsonp    
    单纯地为了实现跨域请求而创造的一个 trick。【实现原理】虽然因为同源策略的影响，不能通过XMLHttpRequest请求不同域上的数据（Cross-origin reads）。但是，在页面上引入不同域上的js脚本文件却是可以的（Cross-origin embedding）。因此在js文件载入完毕之后，触发回调，可以将需要的data作为参数传入。【实现方式（需前后端配合）】

    <script type="text/javascript">
        function dosomething(data){
            //处理获得的数据
        }
    </script>
    <script src="http://example.com/data.php?callback=dosomething"></script>
```
```php
    <?php
$callback = $_GET['callback'];//得到回调函数名
$data = array('a','b','c');//要返回的数据
echo $callback.'('.json_encode($data).')';//输出
?>
【JSONP的优缺点】
优点：兼容性好（兼容低版本IE）
缺点：1.JSONP只支持GET请求； 2.XMLHttpRequest相对于JSONP有着更好的错误处理机制
```
    2. document.domain+iframe、
[document.domain跨域](https://blog.csdn.net/super_yang_android/article/details/53992210) 
    父子页面都添加docuemnt.domain = '父域名',然后父页面动态添加iframe  
```javascript
    document.domain = 'b.com';
    var ifr = document.createElement('iframe');
    ifr.src = 'http://a.b.com/a.b.com.html';
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    ifr.onload = function(){
        var doc = ifr.contentDocument || ifr.contentWindow.document;
        // 这里操作DOM
        var oUl = doc.getElementById('ul1');
        alert(oUl.innerHTML);
        ifr.onload = null;
    };
```
    3. window.name    
[链接](http://www.cnblogs.com/zichi/p/4620656.html)  
    4. window.postMessage、
```javascript
跨域页a.html页面添加iframe页面,
<iframe src="http://localhost:9022/b.html" id="child" style="display: block; border: 1px dashed #ccc; height: 300px;"></iframe>

发送消息:
window.iframes[0].postMessage(data,'http://localhost:9022/)

接受消息:
window.addEventListener('message',function (messageEvent){
        var data = messageEvent.data; 
    console.info('message from child:', data);
},false);

b.html页面  
window.addEventListener('message', function(ev) {
    // if (ev.source !== window.parent) {return;}
    var data = ev.data;
    console.info('message from parent:', data);
}, false);

function send() {
    var data = document.querySelector('#inp').value;
    parent.postMessage(data, 'http://localhost:9011/'); // 若父页面的域名和指定的不一致，则postMessage失败
    // parent.postMessage(data, '*'); // 触发父页面的message事件
}

```
    5. websocket
```javascript
//socket.html
let socket = new WebSocket('ws://localhost:3000');
// 给服务器发消息
socket.onopen = function() {
    socket.send('hello server')
}
// 接收服务器回复的消息
socket.onmessage = function(e) {
    console.log(e.data)
}

```
    6. nginx 反向代理（nginx 服务内部配置 Access-Control-Allow-Origin *）
    
    7. cors 前后端协作设置请求头部，Access-Control-Allow-Origin 等头部信息
   [cors详解](https://www.cnblogs.com/keyi/p/6726089.html)

### 12. 原生,vue,react,实现懒加载和预加载.
原生的
[rect版本](https://segmentfault.com/a/1190000012428565)

### 13. this的理解,应用.
     匿名函数的this,初始指向window
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
    1. 创建了一个新对象,并且this变量引用该对象,同时还继承了该函数的原型.
    2. 属性和方法被加到this引用的对象中.
    3. 新创建的对象有this所引用,并且最后隐式的返回this.
    
    1.创建一个空对象 obj;
    2.将新创建的空对象的隐式原型指向其构造函数的显示原型。
    3.使用 call 改变 this 的指向
    4.如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
    
    所以我们可以看到，在 new 的过程中，我们是使用 call 改变了 this 的指向。

```javascript
var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);

var a = new myFunction("Li","Cherry");

new myFunction{
    var obj = {};
    obj.__proto__ = myFunction.prototype;
    var result = myFunction.call(obj,"Li","Cherry");
    return typeof result === 'obj'? result : obj;
}

```

### 17.JavaScript中的作用域与变量声明提升？
### 18.WEB应用从服务器主动推送Data到客户端有那些方式？
    Commet：基于HTTP长连接的服务器推送技术
[xhr长轮讯](https://www.cnblogs.com/zengqinglei/archive/2013/03/31/2991189.html)

    基于WebSocket的推送方案  
[连接](https://www.cnblogs.com/jingmoxukong/p/7755643.html)
```javascript
  // 初始化一个 WebSocket 对象
var ws = new WebSocket("ws://localhost:9998/echo");

// 建立 web socket 连接成功触发事件
ws.onopen = function () {
  // 使用 send() 方法发送数据
  ws.send("发送数据");
  alert("数据发送中...");
};

// 接收服务端数据时触发事件
ws.onmessage = function (evt) {
  var received_msg = evt.data;
  alert("数据已接收...");
};

// 断开 web socket 连接成功触发事件
ws.onclose = function () {
  alert("连接已关闭...");
};
```

    SSE（Server-Send Event）：服务器推送数据新方式
```javascript
var sse = new EventSource("./php");
sse.addEventListener("message",function(e) {
    var data = JSON.parse(e.data);
})
```


### 19.一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
    注：这题胜在区分度高，知识点覆盖广，再不懂的人，也能答出几句，
    而高手可以根据自己擅长的领域自由发挥，从URL规范、HTTP协议、DNS、CDN、数据库查询、
    到浏览器流式解析、CSS规则构建、layout、paint、onload/domready、JS执行、JS API绑定等等；  
    
    详细版：
      1、浏览器会开启一个线程来处理这个请求，对 URL 分析判断如果是 http 协议就按照 Web 方式来处理;
      2、调用浏览器内核中的对应方法，比如 WebView 中的 loadUrl 方法;
      3、通过DNS解析获取网址的IP地址，设置 UA 等信息发出第二个GET请求;
      4、进行HTTP协议会话，客户端发送报头(请求报头);
      5、进入到web服务器上的 Web Server，如 Apache、Tomcat、Node.JS 等服务器;
      6、进入部署好的后端应用，如 PHP、Java、JavaScript、Python 等，找到对应的请求处理;
      7、处理结束回馈报头，此处如果浏览器访问过，缓存上有对应资源，会与服务器最后修改时间对比，一致则返回304;
      8、浏览器开始下载html文档(响应报头，状态码200)，同时使用缓存;
      9、文档树建立，根据标记请求所需指定MIME类型的文件（比如css、js）,同时设置了cookie;
      10、页面开始渲染DOM，JS根据DOM API操作DOM,执行事件绑定等，页面显示完成。 
    
    简洁版：
        1. 浏览器向 DNS 服务器请求解析该 URL 中的域名所对应的 IP 地址;
        2.解析出 IP 地址后，根据该 IP 地址和默认端口 80，和服务器建立TCP连接;
        3. 浏览器发出读取文件(URL 中域名后面部分对应的文件)的HTTP 请求，该请求报文作为 TCP 三次握手的第三个报文的数据发送给服务器;
        4. 服务器对浏览器请求作出响应，并把对应的 html 文本发送给浏览器;
        5. 释放 TCP连接;
        6. 浏览器将该 html 文本并显示内容; 
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

### 30.js代码的执行顺序问题
[执行顺序](https://www.jb51.net/article/36755.htm)

### 31. js 异步加载的方式

1. 渲染引擎遇到 script 标签会停下来，等到执行完脚本，继续向下渲染  
2. defer 是“渲染完再执行”，async 是“下载完就执行”，defer 如果有多个脚本，会按照在页面中出现的顺序加载，多个async 脚本不能保证加载顺序加
3. es6模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上async属性，异步执行脚本（利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中）


### 32. 事件委托，目的，功能，写法

1. 把一个或者一组元素的事件委托到它的父层或者更外层元素上
2. 优点，减少内存消耗，动态绑定事件
3. target 是触发事件的最具体的元素，currenttarget是绑定事件的元素(在函数中一般等于this)
4. [JavaScript 事件委托详解](https://zhuanlan.zhihu.com/p/26536815)  [事件委托](https://www.cnblogs.com/liugang-vip/p/5616484.html)

### 33.babel把ES6转成ES5或者ES3之类的原理是什么
1. 它就是个编译器，输入语言是ES6+，编译目标语言是ES5
2. [babel 官方工作原理]()
3. 解析：将代码字符串解析成抽象语法树
4. 变换：对抽象语法树进行变换操作
5. 再建：根据变换后的抽象语法树再生成代码字符串

### 34. 什么是CDN缓存

1. CDN 是一种部署策略，根据不同的地区部署类似nginx 这种服务服务，会缓存静态资源。前端在项目优化的时候，习惯在讲台资源上加上一个 hash 值，每次更新的时候去改变这个 hash，hash 值变化的时候，服务会去重新取资源  
2. (CDN)是一个经策略性部署的整体系统，包括分布式存储、负载均衡、网络请求的重定向和内容管理4个要件
3. [cdn百度]()

### 35.js将类数组转换成数组的几种方式
```javascript
let arrayLike = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    length : 3
};
let arr1 = Array.prototype.slice.call(arrayLike);
let arr2 = [].slice.call(arrayLike);
let arr3 = Array.from(arrayLike);
```

### 35 函数节流,函数防抖   
[函数防抖,节流](https://www.cnblogs.com/walls/p/6399837.html)   

    函数节流是指一定时间内js方法只跑一次。比如人的眨眼睛，就是一定时间内眨一次。这是函数节流最形象的解释。    
```javascript
// 函数节流
var canRun = true;
document.getElementById("throttle").onscroll = function(){
    if(!canRun){
        // 判断是否已空闲，如果在执行中，则直接return
        return;
    }

    canRun = false;
    setTimeout(function(){
        console.log("函数节流");
        canRun = true;
    }, 300);
};
```

    函数防抖是指频繁触发的情况下，只有足够的空闲时间，才执行代码一次。比如生活中的坐公交，就是一定时间内，如果有人陆续刷卡上车，司机就不会开车。只有别人没刷卡了，司机才开车。
```javascript
// 函数防抖
var timer = false;
document.getElementById("debounce").onscroll = function(){
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态

    timer = setTimeout(function(){
        console.log("函数防抖");
    }, 300);
};
```

### 36.React、React-Router、Redux、Vue的大致的实现原理，然后比较了下Vue和React的性能的优势和劣势。  

[Vue和React的性能的优势和劣势](https://blog.csdn.net/tiangongkaiwu152368/article/details/81132884)  
[vue-router的实现原理](https://segmentfault.com/a/1190000015123061)
一面很快，也就是十几分钟，最后和面试官聊了下RxJS拖了些时间。  

### 37. es6的新特性
    1. let,const块级作用域
    2. 字符串,模板字符串 
    3. 函数
        3.1 函数默认参数
        3.2 箭头函数
            .不需要 function 关键字来创建函数
            .省略 return 关键字
            .继承当前上下文的 this 关键字
            .当你的函数有且仅有一个参数的时候，是可以省略掉括号的。当你函数返回有且仅有一个表达式的时候可以省略{} 和 return；例如: 
            var people = name => 'hello' + name
    
            等同于  
                var people = (name, age) => {
                    const fullName = 'hello' + name
                    return fullName
                } 
    4. 扩展的对象功能  
        4.1 键值同名的简写   
        4.2 
    5. 数组对象的结构赋值  
    6. Spread Operator 展开运算符  
        //数组
        const color = ['red', 'yellow']
        const colorful = [...color, 'green', 'pink']
        console.log(colorful) //[red, yellow, green, pink]
        
        //对象
        const alp = { fist: 'a', second: 'b'}
        const alphabets = { ...alp, third: 'c' }
        console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"
        }  
```JavaScript
    7.import 和 export  

        //全部导入
    import people from './example'

    //有一种特殊情况，即允许你将整个模块当作单一对象进行导入
    //该模块的所有导出都会作为对象的属性存在
    import * as example from "./example.js"
    console.log(example.name)
    console.log(example.age)
    console.log(example.getName())

    //导入部分
    import {name, age} from './example'

    // 导出默认, 有且只有一个默认
    export default App

    // 部分导出
    export class App extend Component {};  

    1.当用export default people导出时，就用 import people 导入（不带大括号）

    2.一个文件里，有且只能有一个export default。但可以有多个export。

    3.当用export name 时，就用import { name }导入（记得带上大括号）

    4.当一个文件里，既有一个export default people, 又有多个export name 或者 export age时，导入就用 import people, { name, age } 

    5.当一个文件里出现n多个 export 导出很多模块，导入时除了一个一个导入，也可以用import * as exampl

```
    8. Promise  

[经典题目](https://zhuanlan.zhihu.com/p/25407758)  
```javascript
setTimeout(function() {
      console.log(1)
    }, 0);
    new Promise(function executor(resolve) {
      console.log(2);
      for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
      }
      console.log(3);
    }).then(function() {
      console.log(4);
    });
    console.log(5);
        //2,3,5,4,1

    9.promise的简单实现  
    
```


### 38.https加密详解   
[链接](https://www.cnblogs.com/zxj015/p/6530766.html)


### 39.js常用设计模式  
[链接](https://www.cnblogs.com/xianyulaodi/p/5827821.html)


### 参考链接  
[题目](https://juejin.im/entry/585ba05d128fe1006ddc956e)



## css
---
### 1. 元素垂直居中的方法
[链接](https://juejin.im/post/58f818bbb123db006233ab2a)
### 2. 1px问题的解决方案
[方案](https://juejin.im/post/58fde1835c497d005808d421)
### 3. 经典的布局方法(圣杯,双飞燕,左边固定,右边自适应)
[布局](https://juejin.im/post/599970f4518825243a78b9d5)
### 4. 对BFC规范的理解？  
[BFC](https://blog.csdn.net/xuehangongzi/article/details/80713854)  

    BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）  
    
    2.BFC 的原理/BFC的布局规则
    BFC 的原理，其实也就是 BFC 的渲染规则。包括：
    
    （1）BFC 内部的子元素，在垂直方向，边距会发生重叠,就是间距采用margin值大地那个，而不是叠加在一起
    
    （2）BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
    
    （3）BFC区域不与旁边的float box区域重叠。（可以用来清除浮动带来的影响）。 
    （4）计算BFC的高度时，浮动的子元素也参与计算。  


    3.如何生成BFC
    有以下几种方法：
    
    方法1：overflow: 不为vidible，可以让属性是 hidden、auto
    
    方法2：浮动中：float的属性值不为none。意思是，只要设置了浮动，当前元素就创建了BFC。
    
    方法3：定位中：只要posiiton的值不是 static或者是relative即可，可以是absolute或fixed，也就生成了一个BFC。
    
    方法4：display为inline-block, table-cell, table-caption, flex, inline-flex
    
    BFC 原理解释说明
    
    (1)解决 margin 重叠
    当父元素和子元素发生 margin 重叠时，解决办法：给子元素或父元素创建BFC。
    
    上文提到的一条规则：与浮动元素相邻的已生成BFC的元素不能与浮动元素相互覆盖。利用该特性可以作为多栏布局的一种实现方式。
```css
    html, body { height: 100%; width: 100%; margin: 0; padding: 0; }
    .left{
      background:pink;
      float: left;
      width:180px;
    }
    .center{
      background:lightyellow;
      overflow:hidden;
      
    }
    .right{
      background: lightblue;
      width:180px;
      float:right;
    }
```



5. css3的新特性

6. 伪类和伪元素

7. 盒模型

8. flex
9. html5新特性 
[新特性MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)

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
   5. BFC  


### 11. 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

`CSS Sprites`其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。
### 





## html
---
1. HTML5新特性(新增的标签, API等)，如localstorage的用法以及与cookie的区别，如何理解web语义化
2. iframe的优缺点？



## webpack 构建工具
---
### 1.有没有去研究webpack的一些原理和机制，怎么实现的

    1. 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果
    2.注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
    3. 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。  
    4. 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
    5.递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
    6. 输出所有chunk到文件系统。

### 2.ES6模块与CommonJS模块的差异  
    1. CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
    2. CommonJS 模块是运行时加载，ES6模块是编译时输出接口
    3. ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错  

### 3. 模块加载AMD，CMD，CommonJS Modules/2.0 规范
    1. 这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
    2. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
    3. CMD 推崇依赖就近，AMD 推崇依赖前置



## vu相关问题
---
### 1. angular 双向数据绑定与vue数据的双向数据绑定
1. 二者都是 MVVM 模式开发的典型代表angular 是通过脏检测实现，
2. angular 会将 UI 事件，请求事件，settimeout 这类延迟，的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染  
3. vue 通过数据属性的数据劫持和发布订阅的模式实现，大致可以理解成由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图

## 2. vue双向绑定的代码实现  
    Object.defineProperty()
[代码参考](https://www.cnblogs.com/libin-1/p/6893712.html)

## 3.深入Vue2.x的虚拟DOM diff原理  
[vdom实现](https://blog.csdn.net/m6i37jk/article/details/78140159)  

## 4. vue一般概念面试题  
[vue一般概念面试题](https://blog.csdn.net/zxy9602/article/details/79642877)  

## 5. vue ssr(服务端渲染)

[vue ssr](https://segmentfault.com/a/1190000015964813)

## 一般面试问题
---
### 1.你遇到过比较难的技术问题是？你是如何解决的？  
### 2.对前端界面工程师这个职位是怎么样理解的？它的前景会怎么样？  


## 经典参考链接
---
1. [掘金](https://juejin.im/entry/57b68b8b0a2b58005c8270eb)
2. [剑指offer js](https://blog.csdn.net/column/details/16574.html)
3. [剑指offer niuke](https://www.nowcoder.com/discuss/49349?type=0&order=0&pos=6&page=1)
4. [知乎](https://www.zhihu.com/search?type=content&q=%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98)
5. [前端面试题大全](https://juejin.im/entry/56f06612731956005d3b6795)
6. [面试流程](https://juejin.im/entry/584522c0a22b9d007a9f90e0)
7. [问题参考-契合度5星](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers)
8. [阿里面试](https://blog.ihoey.com/posts/Interview/2018-02-28-alibaba-interview.html)  
9. [前端知识综合优秀](https://juejin.im/post/5aae076d6fb9a028cc6100a9)